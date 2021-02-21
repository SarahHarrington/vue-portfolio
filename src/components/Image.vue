<template>
  <img :src="src" :alt="altText">
</template>

<script>
  export default {
    props: {
      image: Object
    },
    data() {
      return {
        src: '/assets/' + this.image.img,
        altText: this.image.displayText
      }
    }
  }
</script>

<style scoped>

</style>