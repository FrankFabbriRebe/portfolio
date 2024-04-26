<script>

import Intro from './components/Intro.vue'
import Profile from './components/Profile.vue'
import Skills from './components/Skills.vue'
import Progetti from './components/Progetti.vue'
import Contatti from './components/Contatti.vue'

export default {

  components: {
    Intro,
    Profile,
    Skills,
    Progetti,
    Contatti
  }

}

</script>

<template>

  <Intro />
  <Profile />
  <Skills />
  <Progetti />
  <Contatti />

</template>

<style lang="scss" scoped></style>