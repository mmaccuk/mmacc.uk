<template>
  <!-- Header -->
  <header id="header">

    <!-- Logo -->
    <router-link class="logo" to="/home"><strong>MMACC</strong> <span> UK</span></router-link>

    <!-- Nav -->
    <nav id="nav">
      <ul>
        <li>
          <router-link to="/home" active-class="active">Home</router-link>
        </li>
        <li>
          <a>Anaesthetics</a>
          <ul>
            <li>
              <router-link to="/nwanaesthesia">North West</router-link>
            </li>
            <li>
              <router-link to="/manaesthesia">Mersey</router-link>
            </li>
          </ul>
        </li>
        <li>
          <a>Intensive Care</a>
          <ul>
            <li>
              <router-link to="/nwicm">North West</router-link>
            </li>
            <li>
              <router-link to="/micm">Mersey</router-link>
            </li>
          </ul>
        </li>
        <li>
          <router-link to="/about" active-class="active">About</router-link>
        </li>
        <!-- <li>
          <router-link to="/components" active-class="active">Components</router-link>
        </li> -->
      </ul>
    </nav>
    <a href="#navPanel" class="navPanelToggle" v-on:click="openPanel()"><span class="label">Menu</span></a>
    <nav id="navPanel" v-bind:class="toggle" v-on:click="closePanel()">
      <router-link class="link depth-0" to="/"><span class="indent-0"></span>Home</router-link>
      <router-link class="link depth-0" to="#/home#"><span class="indent-0"></span>Anaesthetics
      </router-link>
      <router-link class="link depth-1" to="/nwanaesthesia"><span class="indent-1"></span>&raquo; North West
      </router-link>
      <router-link class="link depth-1" to="/manaesthesia"><span class="indent-1"></span>&raquo; Mersey</router-link>
      <router-link class="link depth-1" to="#/home#"><span class="indent-0"></span>Intensive Care</router-link>
      <router-link class="link depth-1" to="/nwicm"><span class="indent-1"></span>&raquo; North West
      </router-link>
      <router-link class="link depth-2" to="/micm"><span class="indent-1"></span>&raquo; Mersey
      </router-link>
      <router-link class="link depth-0" to="/about"><span class="indent-0"></span>About
      </router-link>
      <!-- <router-link class="link depth-0" to="#/components"><span class="indent-0"></span>Components
      </router-link> -->
      <a href="#" class="close" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></a>
    </nav>
  </header>
</template>

<script>
/* global $ */
export default {
  name: 'Menu',
  mounted() {
    // Dropdowns.
    $('#nav > ul')
      .dropotron({
        hideDelay: 350,
      });
  },
  methods: {
    openPanel() {
      this.$store.state.toggler = 'visible';
      setTimeout(() => document.addEventListener('click', this.closePanel), 0);
    },
    closePanel() {
      this.$store.state.toggler = '';
      document.removeEventListener('click', this.closePanel);
    },
  },
  computed: {
    toggle() {
      return this.$store.state.toggler;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
