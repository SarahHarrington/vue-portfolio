<template>
  <div class="welcome">
    Hi! I'm Sarah!
    <img id="me-img" :src="me" alt="">
  </div>
</template>

<script>
import me from '../assets/images/me.svg'

export default {
  name: 'Welcome',
  data() {
    return {
      me: me
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #me-img {
    height: 30vh;
  }
</style>