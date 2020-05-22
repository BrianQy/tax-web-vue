<template>
   

    <header>
  <!-- Fixed navbar -->
  <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
       <div class="container">
    <a class="navbar-brand"  aria-disabled="true">个税批量计算(企业版)</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarCollapse">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <router-link to="/" class="nav-link" >首页 <span class="sr-only">(current)</span></router-link>
        </li>
        <li class="nav-item ">
          <router-link to="/calculate" class="nav-link" >计算</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/about" class="nav-link "  >关于我们</router-link>
        </li>
      </ul>
      <!-- <form class="form-inline mt-2 mt-md-0">
        <input class="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search"> -->
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit" @click="addRoutes1"  >注册</button>
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit" @click="addRoutes2">登陆</button>
      <!-- </form> -->
    </div>
       </div>
  </nav>
</header>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap/dist/css/bootstrap-theme.min.css'
import 'bootstrap/dist/fonts/glyphicons-halflings-regular.ttf'
export default {
  name:'Header',
  components:[],
  methods:{
    addRoutes1 () {
      this.$router.push('/login')
    },
    addRoutes2 () {
      this.$router.push('./register')
    }

  }
    
}
</script>


