<template>
  <div
    class="row justify-content-md-center"
    style="border-raduis:6px"
    ref="square"
  >
    <div class="card text-center ">
      <div class="card-header">
        <!-- <div class="row">
          <div class="col-md-12">
            <div class="progress">
              <div class="one primary-color"></div>
              <div class="two primary-color"></div>
              <div class="three no-color"></div>
              <div class="progress-bar" style="width: 52%;"></div>
            </div>
          </div>
        </div> -->
        <h1>
          Sign up
        </h1>
      </div>
      <div class="card-body form-contain">
        <form>
          <div class="mb-3">
            <div class="row">
              <div class="col">
                <label
                  for="exampleInputPassword1"
                  style="float:left"
                  class="form-label"
                  >First Name</label
                >
                <input
                  type="text"
                  v-model="form.name"
                  class="form-control input"
                  placeholder="First name"
                  aria-label="First name"
                />
              </div>
              <div class="col">
                <label
                  for="exampleInputPassword1"
                  style="float:left"
                  class="form-label"
                  >Last Name</label
                >
                <input
                  type="text"
                  class="form-control input"
                  placeholder="Last name"
                  aria-label="Last name"
                />
              </div>
            </div>
          </div>
          <div class="mb-3">
            <label
              for="exampleInputPassword1"
              style="float:left"
              class="form-label"
              
              >Email</label
            >
            <input
              type="email"
              class="form-control input"
              id="exampleInputPassword1"
              placeholder="example@gmail.com"
              v-model="form.email"
            />
          </div>
          <div class="mb-3">
            <label
              for="exampleInputPassword1"
              style="float:left"
              class="form-label"
              >Phone Number</label
            >
            <input
              type="number"
              class="form-control input"
              id="exampleInputPassword1"
            />
          </div>
          <div class="mb-3">
            <label
              for="exampleInputPassword1"
              style="float:left"
              class="form-label"
              >Password</label
            >
            <input
              type="password"
              class="form-control input"
              id="exampleInputPassword1"
              v-model="form.password"
              placeholder="********"
            />
          </div>
          <div class="mb-3">
            <label
              for="exampleInputPassword1"
              style="float:left"
              class="form-label"
              >Comfirm Password</label
            >
            <input
              type="password"
              class="form-control input"
              id="exampleInputPassword1"
              placeholder="********"
            />
          </div>

          <button
          @click="registerUser"
            type="button"
            style="width:70%"
            class="btn btn-primary signup"
          >
            <span class="signup-btn">Sign up </span>
          </button>
        </form>
        <br />
        <br />
        <div class="row">
          <div class="col"><hr /></div>
          <div class="col-auto">Or</div>
          <div class="col"><hr /></div>
        </div>
        <br />
        <br />

        <button
          class="btn btn-primary facebook-btn"
          style="width:70%"
          type="button"
        >
          <i class="fab fa-facebook-square"></i> &nbsp;&nbsp;&nbsp;
          <span class="is-text-fade">Continue with facebook</span>
        </button>
        <br />
        <br />
        <button
          class="btn btn-primary google-btn"
          style="width:70%"
          type="button"
        >
          <i class="fab fa-google-plus-g"></i>&nbsp;&nbsp;&nbsp;
          <span class="is-text-fade">Continue with Google</span>
        </button>
      </div>
      <div class="card-footer my-c-footer text-muted">
        Already have an account? <router-link to="/login">Login </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { translate } from "@/animate";
export default {
  data(){
    return {
      form:{
        name:'Chidibere',
        email:'uchechidi9@gmail.com',
        password:'22222222'
        
      },
      showSideBar:false
    }
  },
  mounted() {
    translate(this.$refs.square);
  },
   watch:{
   '$route':function(value){
     if(value.path === "/"){
       this.showSideBar = true
     }
   }
 },
  
  methods:{
    registerUser(){
       this.$vs.loading()
      this.$store.dispatch('auth/registerUser', this.form)
      .then(()=>{
        this.$router.push('/login')
       this.$swal.fire({
            title:'Welcome chief ', 
            text: `You successfully registered your account`,
            icon:'success',
            confirmButtonText: 'OK',

          })
         this.$vs.loading.close()

      })
      .catch((err)=>{
        this.$vs.loading.close()
        
        let statusText = err.response['statusText']
        const statusCode = err.response['status']
        // this.$swal('Hello Vue world!!!');
        
        if(statusCode== 500 || statusText == 'Internal Server Error'){
           this.$swal.fire({
            title:'Oops...', 
            text: `Sorry chief we can't process request because of ${statusText}`,
            icon:'error',
            confirmButtonText: 'Ok, I understand',

          })         
          
        }else{
            this.$swal.fire({
            title:'Oops...', 
            text: `User with this email already exist`,
            icon:'warning',
            confirmButtonText: 'Ok, Thanks',

          })
        }
      })

      
    }
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Londrina+Solid&display=swap");

.facebook-btn {
  background-color: #1f15a7;
  border-style: none;
}
.google-btn {
  background: #ee1616;
  border-style: none;
}
.form-contain {
  flex: 1 1 auto;
  min-height: 1px;
  /* padding: 1.25rem; */
  padding-top: 30px !important;
  padding-left: 70px !important;
  padding-right: 70px !important;
  padding-bottom: 70px !important;
}
.input {
  border: 3px solid #5c5e8b !important;
  border-radius: 7px;
}
input {
  background: #d6d6d654 !important;
}
h1 {
  text-align: center;
  font: normal normal normal 60px/24px Somatic Rounded;

  opacity: 1;
  font-family: "Londrina Solid", cursive;
  padding: 10px;
}
.card-header {
  background: white !important;
}

.is-text-fade {
  color: #f7f7f7;
  opacity: 0.9;
  font-size: 12px;
}

.card {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 40%;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: 1px solid #d6d6d654;
  border-radius: 0.25rem;
  bottom: 100px;
}
.my-c-footer {
  background: none !important;
}
.signup {
  background: #5c5e8b;
  opacity: 1;
  border: none;
  color: rgba(255, 255, 255, 0.242) smoke;
}
.signup-btn {
  opacity: 0.9;
}
button {
  border-radius: 9px;
}

@media  screen  and (max-width:480px){
  .card{
    width:100%!important
  }
}



</style>
