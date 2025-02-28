import Vuei18n from 'vue-i18n'

import type { AttributableMedia } from '~/utils/attribution-html'
import { getAttribution } from '~/utils/attribution-html'
import enMessages from '~/locales/en.json'

const i18n = new Vuei18n({
  locale: 'en',
  fallbackLocale: 'en',
  messages: { en: enMessages },
})

const mediaItem: AttributableMedia = {
  title: 'Title',
  foreign_landing_url: 'https://foreign.landing/url',
  creator: 'Creator',
  creator_url: 'https://creator/url',
  license: 'pdm',
  license_version: '1.0',
  license_url: 'https://license/url',
}

describe('getAttribution', () => {
  it.each`
    sendI18n | attributionText
    ${true}  | ${'"Title" by Creator is marked with Public Domain Mark 1.0 .'}
    ${false} | ${'"Title" by Creator is marked with PDM 1.0 .'}
  `(
    'returns attribution for media with i18n $sendI18n',
    ({
      sendI18n,
      attributionText,
    }: {
      sendI18n: boolean
      attributionText: boolean
    }) => {
      document.body.innerHTML = getAttribution(
        mediaItem,
        sendI18n ? i18n : null
      )
      const attributionP = document.getElementsByClassName('attribution')[0]
      expect(attributionP.textContent?.trim()).toEqual(attributionText)
    }
  )

  it('does not use anchors in plain-text mode', () => {
    document.body.innerHTML = getAttribution(mediaItem, i18n)
    expect(document.getElementsByTagName('a').length !== 0)
    document.body.innerHTML = getAttribution(mediaItem, i18n, {
      isPlaintext: true,
    })
    expect(document.getElementsByTagName('a').length === 0)
  })

  it('renders the correct text in plain-text mode', () => {
    const attrText = getAttribution(mediaItem, i18n, { isPlaintext: true })
    const expectation =
      '"Title" by Creator is marked with Public Domain Mark 1.0. To view the terms, visit https://license/url?ref=openverse.'
    expect(attrText).toEqual(expectation)
  })

  it('does not add license element icons in no-icons mode', () => {
    document.body.innerHTML = getAttribution(mediaItem, i18n)
    expect(document.getElementsByTagName('img').length !== 0)
    document.body.innerHTML = getAttribution(mediaItem, i18n, {
      includeIcons: false,
    })
    expect(document.getElementsByTagName('img').length === 0)
  })
})
