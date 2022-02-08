import { useNavStore } from '~/stores/nav'

/**
 * If the URL contains a referral parameter pointing containing
 * 'creativecommons.org' the migration notice needs to be displayed. This
 * plugin checks the presence of the param and updates the store.
 */
export default function ({ query, $pinia }) {
  const navStore = useNavStore($pinia)
  if (query.referrer) {
    const isReferredFromCc = query.referrer.includes('creativecommons.org')
    navStore.setReferred({ isReferredFromCc })
  }
}
