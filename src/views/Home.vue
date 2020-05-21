<template>
  <index />
</template>

<script>
// @ is an alias to /src
import index from '@/components/index.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap/dist/css/bootstrap-theme.min.css'
import 'bootstrap/dist/fonts/glyphicons-halflings-regular.ttf'

export default {
  name: 'Home',
  components: {
    index
  }
}
</script>
