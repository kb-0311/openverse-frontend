<template>
  <div class="media-attribution">
    <h5 class="mb-4 text-base md:text-2xl font-semibold">
      {{ headerText }}
    </h5>

    <template v-if="isLicense">
      <i18n
        path="media-details.reuse.attribution"
        tag="span"
        class="block text-sm md:text-base mb-2"
      >
        <template #link>
          <VLink class="uppercase" :href="licenseUrl">
            {{ fullLicenseName }}
          </VLink>
        </template>
      </i18n>
      <VLicenseElements v-if="license" :license="license" />
    </template>

    <template v-else>
      <VLicenseElements v-if="license" :license="license" />
      <i18n
        path="media-details.reuse.tool.content"
        tag="span"
        class="text-sm font-semibold"
      >
        <template #link>
          <VLink
            :aria-label="$t('media-details.aria.attribution.tool')"
            :href="licenseUrl"
            >{{ $t('media-details.reuse.tool.link') }}</VLink
          >
        </template>
      </i18n>
    </template>
  </div>
</template>

<script>
import { isLicense } from '~/utils/license'

import VLicenseElements from '~/components/VLicense/VLicenseElements.vue'
import VLink from '~/components/VLink.vue'

export default {
  name: 'VMediaLicense',
  components: { VLicenseElements, VLink },
  props: {
    fullLicenseName: String,
    license: String,
    licenseUrl: String,
  },
  computed: {
    isLicense() {
      return isLicense(this.license)
    },
    headerText() {
      const licenseOrTool = this.isLicense ? 'license' : 'tool'
      return this.$t(`media-details.reuse.${licenseOrTool}-header`)
    },
  },
}
</script>
