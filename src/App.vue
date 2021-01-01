<template>
  <HelloWorld msg="Welcome to Your Vue.js App"/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #F21DB9;
    margin-top: 60px;
  }

  /* Color Theme Swatches in Hex */
.bright-portfolio-idea-1-hex { color: #F21DB9; }
.bright-portfolio-idea-2-hex { color: #5E308C; }
.bright-portfolio-idea-3-hex { color: #0388A6; }
.bright-portfolio-idea-4-hex { color: #04D9D9; }
.bright-portfolio-idea-5-hex { color: #05F2DB; }

/* Color Theme Swatches in RGBA */
.bright-portfolio-idea-1-rgba { color: rgba(242, 29, 185, 1); }
.bright-portfolio-idea-2-rgba { color: rgba(94, 48, 140, 1); }
.bright-portfolio-idea-3-rgba { color: rgba(3, 136, 166, 1); }
.bright-portfolio-idea-4-rgba { color: rgba(4, 217, 217, 1); }
.bright-portfolio-idea-5-rgba { color: rgba(5, 242, 219, 1); }

/* Color Theme Swatches in HSLA */
.bright-portfolio-idea-1-hsla { color: hsla(316, 89, 53, 1); }
.bright-portfolio-idea-2-hsla { color: hsla(270, 48, 36, 1); }
.bright-portfolio-idea-3-hsla { color: hsla(191, 96, 33, 1); }
.bright-portfolio-idea-4-hsla { color: hsla(180, 96, 43, 1); }
.bright-portfolio-idea-5-hsla { color: hsla(174, 95, 48, 1); }
</style>
