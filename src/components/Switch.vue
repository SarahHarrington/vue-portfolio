<template>
  <img :src="sun" alt="light color mode">
  <label class="switch">
    <input true-value="light" false-value="dark" v-model="colorMode" type="checkbox">
    <span @click="coloreModeChange" class="slider round"></span>
  </label>
  <img :src="moon" alt="dark color mode">
</template>

<script>
import moon from '../assets/images/brightness_2-black-18dp.svg'
import sun from '../assets/images/wb_sunny-black-18dp.svg'
export default {
  name: 'Switch',
  data() {
    return {
      colorMode: true,
      moon: moon,
      sun: sun
    }
  },
  methods: {
    coloreModeChange() {
      console.log('color switch clicked')
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    /* The switch - the box around the slider */
.switch {
  position: relative;
  display: inline-block;
  width: 50px;
  height: 28px;
}

/* Hide default HTML checkbox */
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

/* The slider */
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: .4s;
  transition: .4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 21px;
  width: 21px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
}

input:checked + .slider {
  background-color: var(--lt-teal-hex);
}

input:focus + .slider {
  box-shadow: 0 0 1px var(--lt-teal-hex);
}

input:checked + .slider:before {
  -webkit-transform: translateX(22px);
  -ms-transform: translateX(22px);
  transform: translateX(22px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 28px;
}

.slider.round:before {
  border-radius: 50%;
}
</style>