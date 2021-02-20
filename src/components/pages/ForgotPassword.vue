<template>
  <div class="row justify-content-md-center" ref="square">
    <div class="card text-center ">
      <div class="card-header">
        <h1>
         Forgot Password
        </h1>
      </div>
      <div class="card-body form-contain">
        <form>
          <div class="mb-3">
            <label
              for="exampleInputEmail1"
              style="float:left"
              class="form-label"
              >Password
            </label>
            <input
              v-model="form.email"
              type="password"
              class="form-control input"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div class="mb-3">
            <label
              for="exampleInputPassword1"
              style="float:left"
              class="form-label"
              >Confirm Password</label
            >
            <input
              type="password"
              class="form-control input"
              id="exampleInputPassword1"
              v-model="form.password"
            />
          </div>

          <button
            
            type="button"
            style="width:100%;background:#5c5e88;color:white"
            class="btn"
          >
          <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true" v-if="showLoginSpin"></span>
            <span v-if="showLoginText">Set Password</span>
          </button>
          
        </form>
      </div>
      
    </div>
  </div>
</template>

<script>
import { translate } from "@/animate";
export default {
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
      showLoginSpin:false,
        showLoginText:true
      
    };
  },
  mounted() {
    translate(this.$refs.square);
  },
  
 
};
</script>

            
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Londrina+Solid&display=swap");

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
  border: 2px solid #5c5e8b !important;
  border-radius: 7px;
}
input[type="email"] {
  background: white !important;
}
h1 {
  text-align: center;
  font: normal normal normal 60px/24px Somatic Rounded;
font-size: 34px;
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
  width: 30%;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.25rem;
  bottom: 80px;
}
.my-c-footer {
  background: none !important;
}
.row{
    margin-top:80px
}

/* media  query mobile  */

@media screen and (max-width: 480px) {
  .card {
    width: 100% !important;
  }
}
</style>
