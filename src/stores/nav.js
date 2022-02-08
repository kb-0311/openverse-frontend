import { defineStore } from 'pinia'

export const useNavStore = defineStore('nav', {
  state: () => ({
    isEmbedded: true,
    isReferredFromCc: false,
  }),
  actions: {
    setEmbedded(params) {
      this.isEmbedded = params.isEmbedded
    },
    setReferred(params) {
      this.isReferredFromCc = params.isReferredFromCc
    },
  },
})
