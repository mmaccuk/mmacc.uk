<template>
  <div id="app">
    <Menu />
    <router-view/>
  </div>
</template>

<style lang="scss">
@import '@/assets/sass/main.scss';
</style>

<script>
import Menu from '@/components/Menu.vue'; // eslint-disable-line

export default {
  name: 'App',
  components: {
    Menu,
  },
  mounted() {
    breakpoints(); // eslint-disable-line
  },
};
</script>
