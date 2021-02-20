<template>
  <div>
    <h2>{{ project.name }}</h2>
  </div>
</template>

<script>
  export default {
    name: 'Project',
    props: {
      project: Object,
    },
  }
</script>

<style>

</style>