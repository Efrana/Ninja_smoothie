<template>
    <div class = "navbar">
        <nav class ="nav-extended  cyan darken-2"> <!--nav bar  -->
            <div class ="nav-content">
                <router-link :to="{name: 'HelloWorld'}">
                    <span class ="nav-title">Ninja Smoothies</span>
                </router-link>
                <a href="" class="btn-floating btn-large halfway-fab  pink "><!--btn  -->
                <router-link :to="{name: 'AddSmoothie'}">
                    <i class="material-icons">add</i>
                    </router-link>
                </a>
            </div>
        </nav>
    </div>
</template>
<script>
export default {
    name: 'Navbar',
    data(){
        return{

        }
    }
}
</script>
<style>
  .navbar nav{
      padding: 0 100px;
  }
</style>