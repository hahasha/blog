<template>
  <div id="app">
    <router-view>
      <Home></Home>
    </router-view>
  </div>
</template>

<script>
import Home from '@/pages/home/home'
export default {
  components: {
    Home
  }
}
</script>>
