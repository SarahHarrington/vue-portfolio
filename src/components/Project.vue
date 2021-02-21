<template>
  <div>
    <h2>{{ project.name }}</h2>
    <Image 
      v-for="image in project.images" 
      :image="image"
      :key="image.img"/>
  </div>
</template>

<script>
  import Image from './Image'
  export default {
    name: 'Project',
    components: {
      Image
    },
    props: {
      project: Object,
    },
  }
</script>

<style>

</style>