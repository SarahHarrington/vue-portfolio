<template>
  <section class="projects">
    <Project
      v-for="project in projects"
      :key="project.name"
      :project="project"
    />
  </section>
</template>

<script>
  import Project from './Project'
  import projectList from '../assets/ProjectList'

  export default {
    name: 'Projects',
    mixins: [projectList],
    components: {
      Project
    },
    data() {
      return {
      }
    }
  }
</script>

<style scoped> 
  .projects {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    border: 1px solid var(--pink-hex);
  }
</style>