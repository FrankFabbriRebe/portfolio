<script>

import Intro from './components/Intro.vue'
import NavBar from './components/NavBar.vue'
import Profile from './components/Profile.vue'

export default {

  components: {
    Intro,
    NavBar,
    Profile
  }

}

</script>

<template>

  <NavBar />
  <Intro />
  <Profile />

</template>

<style lang="scss" scoped></style>
