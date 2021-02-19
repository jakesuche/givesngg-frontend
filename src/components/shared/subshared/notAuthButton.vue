<template>
<div>


  <button
          @click.prevent="active = !active"
          class="navbar-toggler"
          type="button"
        >
          <span><img :src="menuBugger" alt="" srcset="" /> </span>
        </button>
        
        <button class="navbar-toggler" type="button">
          <router-link to="/">
            <img class="thumbnail animate-img" :src="logo" alt="" srcset=""
          /></router-link>
        </button>
        <input
          class="form-control me-2 border-right "
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        
</template>

<script>
export default {

}
</script>

<style>

</style>