<template>
  <div>
    <input v-if="droppedImage"

          type="file"

        >
  </div>
</template>

<script>

import interact from "interactjs";

export default {

  name: 'droppedImage',

  props: [
      'droppedImage'
  ],

  data () {
    return {
    	loading3: false,
      loader: null
    }
  },

  watch: {
      loader () {
        const l = this.loader
        this[l] = !this[l]

        setTimeout(() => (this[l] = false), 3000)

        this.loader = null
      }
  },

  computed: {
  
  },

  methods: {
    
  },

  mounted() {
  }
}
</script>

<style lang="css" scoped>
</style>