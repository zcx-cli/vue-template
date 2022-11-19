<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
    // Tailwind,
    // PxToVw,
    // LazyLoad,
    // MovieClip
  },
  data() {
    const imgArr = [];
    for (let index = 0; index < 16; index += 1) {
      imgArr.push(require(`@/assets/gif/${index}.png`));
    }
    return {
      imgArr
    }
  }
}
</script>

<style>
</style>
