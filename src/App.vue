<template>
  <Welcome />
  <Header />
</template>

<script>
import Header from './components/Header.vue'
import Welcome from './components/Welcome.vue'

export default {
  name: 'App',
  components: {
    Header,
    Welcome
  }
}
</script>

<style>
  @font-face {
    font-family: 'Flottflott';
    src: local('Flottflott'),
    url(./fonts/Flottflott.ttf) format('truetype');
  }

  :root {
    --white-hex: #f5f5f5;
    --black-hex: #1d152a;
    --pink-hex: #F21DB9;
    --purple-hex: #5E308C;
    --dk-teal-hex: #0388A6;
    --med-teal-hex: #04D9D9;
    --lt-teal-hex: #05F2DB;
  }

  body {
    background-color: var(--black-hex);
  }
  #app {
    font-family: Flottflott, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 2rem;
    color: var(--lt-teal-hex);
    margin-top: 60px;
  }

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
