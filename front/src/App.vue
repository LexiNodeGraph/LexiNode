<template>
  <Navbar/>
  <router-view></router-view>
  <Footer/>
</template>

<script>
import Navbar from "./components/Navbar.vue"
import Footer from "./components/Footer.vue"
export default {
  data(){
    return{}
  },
  components:{
    Navbar,
    Footer
}
}
</script>

<style>

</style>