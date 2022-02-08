import { sendWindowMessage } from '~/utils/send-message'
import { useNavStore } from '~/stores/nav'

/**
 * In embedded mode, we need to notify the outer window of the current URL.
 * Normally, the `src/middleware/embed.js` middleware does this on every
 * route change. However, it does not run on the initial render.
 * So, for the initial render this plugin runs when router is ready.
 */
export default function ({ app, $pinia }) {
  const navStore = useNavStore($pinia)
  app.router.onReady(() => {
    if (process.client && navStore.isEmbedded) {
      sendWindowMessage({
        type: 'urlChange',
        value: {
          path: app.router.currentRoute.fullPath,
          title: document.title,
        },
      })
    }
  })
}
