<template>
  <vs-popup
    style="color:rgb(255,255,255)"
    color="#5C5E8B"
    background-color="rgb(177 177 177)"
    :background-color-popup="colorx"
    title="Create a project"
    :active.sync="popupActivo5"
  >
    <div class="centerx">
    
    <vs-alert
    :color="changeColor()"
    :active.sync="active1"
    closable
    close-icon="close">
     <div v-if="errorMessage">
       {{errorMessage}}, <router-link :to="'/login'">Click to login</router-link>
     </div>
     <div v-if="successMessage">
       {{successMessage}}
     </div>
    </vs-alert>
  </div>
    <div class="j-row mb-3">
      <div>
        <img src="@/assets/images/userIcon.png" alt="" />
      </div>
      <div class="j-col-2">
        <h4>Godwin A</h4>
      </div>
    </div>
    <form>
      <div class="form-group">
        <label for="exampleInputEmail1">Project Title</label>
        <input
          type="text"
          v-model="form.project"
          class="form-control project-title"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Project title"
        />
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Project description</label>
        <textarea
          class="form-control"
          v-model="form.description"
          name=""
          placeholder="Describe the project ?"
          id=""
          cols="30"
          rows="10"
        ></textarea>
      </div>
      <div class="form-group">
        <input
          type="text"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Enter email"
        />
      </div>

      <div class="d-flex justify-content-center">
        <button type="button" @click="createProject()" class="btn  btn-default">
          <span v-if="showSpin" class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
          <span v-if="showButtonText">Create a project</span>

        </button>
      </div>
    </form>
  </vs-popup>
</template>

<script>
// import { create } from 'filepond'
import "@/assets/css/custom.css";
export default {
  props: {
    testing: {
      type: Boolean,
    },
  },
  watch: {
    testing: function(data) {
      this.popupActivo5 = data;
      console.log(data);
    },
    '$route': function(value) {
      if (value.path === "/login" || value.path === "/register") {
        this.testing = false;
        this.active1=false
      } else {
        this.testing = true;
      }
    },
  },
  data() {
    return {
      popupActivo5: null,
      colorx: "white",
      form: {
        project: null,
        description: null,
      },
      errorMessage:null,
      successMessage:null,
      showButtonText:true,
      active1:false,
      showSpin:false
    };
  },
  created() {},
  methods: {
    //  buttonClick:true,
      
    //   showSpin:false
    createProject() {
      this.showButtonText=false
      this.showSpin=true
      this.$store
        .dispatch("project/createProject", this.form)
        .then((res) => {
          this.showButtonText=true
      this.showSpin=false
          console.log(res);
          this.successMessage = res.data.message
        })
        .catch((err) => {
          this.active1 =true
           this.showButtonText=true
      this.showSpin=false
          this.errorMessage = err.response.data.message
          console.log(err.response.data.message);
        });
    },
    changeColor(){
      return (this.errorMessage) ? 'danger' : 'primary'
    }
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Raleway:wght@700&display=swap");
.j-col-2 {
  margin-left: 10px;
}
.j-row {
  display: flex;
}
.j-row h4 {
  color: #5c5e8b;

  font: normal normal bold 15px/30px Raleway;
  letter-spacing: 0px;
  color: #5c5e8b;
  opacity: 1;
}
label {
  text-align: left;
  font: normal normal bold 25px/30px Raleway;
  letter-spacing: 0px;
  color: #5c5e8b;
  opacity: 1;
}
.project-title {
  width: 70%;
  border-radius: 9px;
}
.form-control {
  border-radius: 9px;
}
textarea.form-control {
  /* height: auto; */
  height: 100px;
}
.btn {
  /* width: 50%!important; */
  width: 264px;
  height: 43px;
  background: var(--unnamed-color-5c5e8b) 0% 0% no-repeat padding-box;
  background: #5c5e8b 0% 0% no-repeat padding-box;
  border-radius: 22px;
  opacity: 1;
  color: white;
  font: normal normal bold 20px/30px Raleway;
}
</style>
