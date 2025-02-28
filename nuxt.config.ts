import path from 'path'
import fs from 'fs'

import pkg from './package.json'
import locales from './src/locales/scripts/valid-locales.json'

import { VIEWPORTS } from './src/constants/screens'

import { isProd } from './src/utils/node-env'
import { sentryConfig } from './src/utils/sentry-config'
import { env } from './src/utils/env'

import type { NuxtConfig } from '@nuxt/types'
import type { LocaleObject } from '@nuxtjs/i18n'

/**
 * The default metadata for the site. Can be extended and/or overwritten per page. And even in components!
 * See the Nuxt.js docs for more info.
 * {@link https://nuxtjs.org/guides/features/meta-tags-seo} Nuxt.js Docs
 */
const meta = [
  { charset: 'utf-8' },
  {
    name: 'viewport',
    content: 'width=device-width,initial-scale=1',
  },
  // Tells Google to only crawl Openverse when iframed
  { hid: 'googlebot', name: 'googlebot', content: 'noindex,indexifembedded' },
  {
    vmid: 'monetization',
    name: 'monetization',
    content: '$ilp.uphold.com/edR8erBDbRyq',
  },
  {
    hid: 'theme-color',
    name: 'theme-color',
    content: '#ffffff',
  },
  {
    name: 'description',
    content:
      'Search over 600 million free and openly licensed images, photos, audio, and other media types for reuse and remixing.',
  },
  { hid: 'og:title', name: 'og:title', content: 'Openverse' },
  {
    hid: 'og:image',
    name: 'og:image',
    content: '/openverse-default.jpg',
  },
  {
    hid: 'og:description',
    name: 'og:description',
    content:
      'Search over 600 million free and openly licensed images, photos, audio, and other media types for reuse and remixing.',
  },
  { name: 'twitter:card', content: 'summary_large_image' },
  { name: 'twitter:site', content: '@WPOpenverse' },
]

if (process.env.NODE_ENV === 'production') {
  meta.push({
    // @ts-expect-error: 'http-equiv' isn't allowed here by Nuxt
    'http-equiv': 'Content-Security-Policy',
    content: 'upgrade-insecure-requests',
  })
}

const favicons = [
  // SVG favicon
  {
    rel: 'icon',
    href: '/openverse-logo.svg',
  },
  // SVG favicon for Safari
  {
    rel: 'mask-icon',
    href: '/opvenverse-logo.svg',
    color: '#30272E',
  },
  // Fallback iPhone Icon
  {
    rel: 'apple-touch-icon',
    href: '/openverse-logo-180.png',
  },
]

// Default html head
const head = {
  title: 'Openly Licensed Images, Audio and More | Openverse',
  meta,
  link: [
    ...favicons,
    {
      rel: 'preconnect',
      href: env.apiUrl,
      crossorigin: '',
    },
    {
      rel: 'dns-prefetch',
      href: env.apiUrl,
    },
    {
      rel: 'search',
      type: 'application/opensearchdescription+xml',
      title: 'Openverse',
      href: '/opensearch.xml',
    },
  ],
}

const config: NuxtConfig = {
  // eslint-disable-next-line no-undef
  version: pkg.version, // used to purge cache :)
  cache: {
    pages: ['/'],
    store: {
      type: 'memory', // 'redis' would be nice
      max: 100,
      ttl: process.env.MICROCACHE_DURATION || 60,
    },
  },
  srcDir: 'src/',
  modern: 'client',
  server: {
    port: process.env.PORT || 8443,
    https: process.env.LOCAL_SSL
      ? {
          key: fs.readFileSync(path.resolve(__dirname, 'localhost+1-key.pem')),
          cert: fs.readFileSync(path.resolve(__dirname, 'localhost+1.pem')),
        }
      : undefined,
  },
  router: {
    middleware: 'middleware',
  },
  components: [
    { path: '~/components', extensions: ['vue'], pathPrefix: false },
  ],
  plugins: [
    { src: '~/plugins/url-change' },
    { src: '~/plugins/migration-notice' },
    { src: '~/plugins/ua-parse' },
    { src: '~/plugins/focus-visible', mode: 'client' },
  ],
  css: [
    '~/styles/tailwind.css',
    '~/assets/fonts.css',
    '~/styles/vocabulary.scss',
    '~/styles/global.scss',
    '~/styles/accent.scss',
  ],
  head,
  env,
  dev: !isProd,
  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/composition-api/module',
    '@nuxt/postcss8',
    '@nuxtjs/style-resources',
    '@nuxtjs/svg',
    '@nuxtjs/eslint-module',
    '@pinia/nuxt',
  ],
  // Load the scss variables into every component:
  // No need to import them. Since the variables will not exist in the final build,
  // this doesn't make the built files larger.
  styleResources: {
    scss: ['./styles/utilities/all.scss'],
  },
  modules: [
    '@nuxtjs/i18n',
    '@nuxtjs/redirect-module',
    '@nuxtjs/sentry',
    '@nuxtjs/sitemap',
  ],
  serverMiddleware: [
    { path: '/healthcheck', handler: '~/server-middleware/healthcheck.js' },
  ],
  i18n: {
    locales: [
      {
        // unique identifier for the locale in Vue i18n
        code: 'en',
        name: 'English',
        // ISO code used for SEO purposes (html lang attribute)
        iso: 'en',
        // wp_locale as found in GlotPress
        wpLocale: 'en_US',
        file: 'en.json',
      },
      ...(locales ?? []),
    ].filter((l) => Boolean(l.iso)) as LocaleObject[],
    lazy: true,
    langDir: 'locales',
    defaultLocale: 'en',
    /**
     * `detectBrowserLanguage` must be false to prevent nuxt/i18n from automatically
     * setting the locale based on headers or the client-side `navigator` object.
     *
     * Such detection is handled at the parent level in WP.org.
     *
     * More info about the Nuxt i18n:
     *
     * - [detectBrowserLanguage](https://i18n.nuxtjs.org/options-reference/#detectbrowserlanguage)
     * - [Browser language detection info](https://i18n.nuxtjs.org/browser-language-detection)
     * */
    detectBrowserLanguage: false,
    vueI18n: '~/plugins/vue-i18n',
  },
  /**
   * Map the old route for /photos/_id page to /image/_id permanently to keep links working.
   * See the redirect module for more info.
   * {@link https://github.com/nuxt-community/redirect-module#usage}
   */
  redirect: [{ from: '^/photos/(.*)$', to: '/image/$1', statusCode: 301 }],
  sentry: sentryConfig,
  build: {
    templates: [
      {
        src: './nuxt-template-overrides/App.js',
        dst: 'App.js',
      },
      {
        src: './nuxt-template-overrides/index.js',
        dst: 'index.js',
      },
    ],
    friendlyErrors: false,
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
        'postcss-focus-visible': {},
      },
    },
    extend(config, ctx) {
      // Enables use of IDE debuggers
      config.devtool = ctx.isClient ? 'source-map' : 'inline-source-map'

      // Mitigates import errors for Pinia
      config.module?.rules.push({
        test: /\.mjs$/,
        include: /node_modules/,
        type: 'javascript/auto',
      })
    },
  },
  storybook: {
    port: 6006, // standard port for Storybook
    stories: ['~/**/*.stories.@(mdx|js)'],
    addons: [
      {
        name: '@storybook/addon-essentials',
        options: {
          backgrounds: false,
          viewport: true,
          toolbars: true,
        },
      },
    ],
    parameters: {
      options: {
        storySort: {
          order: ['Introduction', ['Openverse UI']],
        },
      },
      viewport: {
        viewports: VIEWPORTS,
      },
    },
  },
}

export default config
