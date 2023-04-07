<template>
  
 <div>
  <shop-header v-if="!isMainPage"/>
  <RouterView></RouterView>

 </div>
</template>

<script>
import ShopHeader from '@/components/shop-header.vue'

export default {
  name: 'App',
  components: {
   ShopHeader
  },
  computed:{
    isMainPage(){
      return this.$route.name==='main'
    }
  }
}
</script>

<style>

</style>
