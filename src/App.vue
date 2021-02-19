<template>
  <div id="app">
    
    <nav-bar/>
      
   <router-view @event="myEvent"/> 
    
    <!-- <br>
    <br>
    <br>
    <br> -->
  
    <footer>
      <h1 style="color:black!important"></h1>
      <Footer/>
    </footer>
    <vs-popup
      style="color:rgb(255,255,255)"
      background-color="rgba(255,255,255,.6)"
      :background-color-popup="colorx" title="background" :active.sync="popupActivo5">
      <h5>All the pages cant be view using mobile pls. Ensure you used your desktop</h5>
    </vs-popup>
    
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    
  </div>
</template>

<script>



import NavBar from './components/shared/NavBar.vue'
import Footer from "./components/shared/Footer.vue";
export default {
  data(){
    return{
      colorx:"#4a5153",
      popupActivo5:false,
      showSideBar:false
    }
  },
  name: 'App',
  mounted(){
   
    // this.checkUserAgent()
    
  }, 
  created(){
    this.getAuthUser()
    
  },


  methods:{
    myEvent(res){
      console.log(res)
    },
    
    getAuthUser(){
      
      this.$store.dispatch('auth/getAuthUser')
    }
    
    // logout(){
    //   this.$store.dispatch('auth/logOutUser')
    //   .then(res=>{
    //     console.log(res)
    //   }).catch(err=>{
    //     console.log(err)
    //   })
    // }
    // checkUserAgent(){
    //    const { userAgent } = window.navigator;
        
    //     if(userAgent.includes('Mobi')){
    //       this.popupActivo5 = true
    //       return this.$router.push('/login')
    //     }else{
    //       return true
    //     }
    // }
  },
  components: {
   
   NavBar,
   Footer
    
  }
}
</script>

<style >


@media only screen and (max-width: 576px) {
   body{
  overflow-x: hidden;
}
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  height: 100%;
  background: #F1F1F1!important;;
  
  
}

/* width */
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px #43425D; 
  border-radius: 10px;
  padding-top:400px;
  padding-bottom:600px
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: #43425D; 
  border-radius: 10px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #43425D; 
}


</style>
