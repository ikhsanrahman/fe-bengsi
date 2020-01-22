<template>
  <div class="home">
    <navbar/>
    <common/>
    <service/>
    <hr>
    <contact></contact>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import Navbar from './homePage/Navbar.vue'
import Common from './homePage/common.vue'
import Service from './homePage/service.vue'
import Contact from './homePage/contact.vue'
// import Navbar from '../homePage/navbar.vue'
// import Navbar from '../homePage/navbar.vue'
// import Navbar from '../homePage/navbar.vue'
// import Navbar from '../homePage/navbar.vue'
// import Navbar from '../homePage/navbar.vue'

export default {
  name: 'home',
  components: {
    Common,
    Service,
    Contact,
    Navbar
  }
}
</script>
