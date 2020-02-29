<template>
    <span>this is app1 content</span>
</template>

<script>
import { sideMenu } from './side-menu.js'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
   data() {
      return {
      };
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
