<template>
  <div class="row justify-content-md-center" ref="square">
    <div class="card text-center ">
      <div class="card-header">
        <h1>
          Log in
        </h1>
      </div>
      <div class="card-body form-contain">
        <form>
          <div class="mb-3">
            <label
              for="exampleInputEmail1"
              style="float:left"
              class="form-label"
              >Email
            </label>
            <input
              v-model="form.email"
              type="email"
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
              >Password</label
            >
            <input
              type="password"
              class="form-control input"
              id="exampleInputPassword1"
              v-model="form.password"
            />
          </div>

          <button
            @click="loginUser"
            type="button"
            style="width:100%;background:#5c5e88;color:white"
            class="btn"
          >
            <span
              class="spinner-grow spinner-grow-sm"
              role="status"
              aria-hidden="true"
              v-if="showLoginSpin"
            ></span>
            <span v-if="showLoginText">Login</span>
          </button>
          <a href="#" type="button" @click="OpenForGotPass">Forgot password</a>
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
          style="width:100%"
          type="button"
        >
          <i class="fab fa-facebook-square"></i> &nbsp;&nbsp;&nbsp;
          <span class="is-text-fade">Continue with facebook</span>
        </button>
        <br />
        <br />
        <button
          class="btn btn-primary google-btn"
          style="width:100%"
          type="button"
        >
          <i class="fab fa-google-plus-g"></i>&nbsp;&nbsp;&nbsp;
          <span class="is-text-fade">Continue with Google</span>
        </button>
      </div>
      <div class="card-footer my-c-footer text-muted">
        Don't have an account?
        <a href="#">Sign up </a>
      </div>
    </div>
    <div class="centerx">
      <vs-popup
        style="color:#5c5e8b"
        background-color="#5c5e8b"
        :background-color-popup="colorx"
        title="Enter Your Email to Reset your Password"
        :active.sync="popupActivo5"
      >
        <vs-row class="vs-row">
          <vs-row>
            <div
              v-if="ShowAlertWaring"
              class="alert alert-warning alert-dismissible fade show"
              role="alert"
            >
              <strong>Holy guacamole!</strong> You should check in on some of
              those fields below.
              <button
              @click="ShowAlertWaring = !ShowAlertWaring"
                type="button"
                class="close"
                data-dismiss="alert"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div
              v-if="ShowAlertSuccess"
              class="alert alert-success alert-dismissible fade show"
              role="alert"
            >
              <strong>Holy guacamole!</strong> You should check in on some of
              those fields below.
              <button
                @click="ShowAlertSuccess = !ShowAlertSuccess"
                type="button"
                class="close"
                data-dismiss="alert"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <vs-col
              class="vs-col"
              vs-type="flex"
              vs-justify="center"
              vs-align="center"
              vs-w="6"
              vs-xs="12"
            >
              <vs-input v-model="email" class="inputx" placeholder="Email" />
            </vs-col>
            <vs-col
              vs-type="flex"
              vs-justify="center"
              vs-align="center"
              vs-w="6"
              vs-xs="12"
            >
              <vs-button @click="ForgoutPass()"  color="#5c5e8b" type="filled"
                >Send Email Comfirmation</vs-button
              >
            </vs-col>
          </vs-row>
        </vs-row>
      </vs-popup>
    </div>
  </div>
</template>

<script>
import { translate } from "@/animate";
export default {
  data() {
    return {
      form: {
        email: "dajukee@gmail.com",
        password: "pass1234",
      },
      showLoginSpin: false,
      showLoginText: true,
      colorx: "white",
      popupActivo5: false,
      email: "",
      ShowAlertWaring: false,
      ShowAlertSuccess: false,
      EmailResetError: "",
      EmailResetSuccess: "",
    };
  },
  mounted() {
    translate(this.$refs.square);
  },
  created() {},
  methods: {
    loginUser() {
      this.showLoginSpin = true;
      this.showLoginText = false;
      this.$store
        .dispatch("auth/loginUser", this.form)
        .then((res) => {
          this.showLoginSpin = false;
          this.showLoginText = true;
          this.$swal.fire({
            icon: "success",
            text: "Welcome chief",
            target: "#custom-target",
            confirmButtonText: null,
            confirmButtonColor: "white",
            // customClass: {
            //   container: 'position-absolute'
            // },
            toast: true,
            position: "top-right",
            timer: 5000,
          });
          console.log(res, "hhjdj");
          this.$router.push("/user");
        })
        .catch(() => {
          this.showLoginSpin = false;
          this.showLoginText = true;
          this.$swal.fire({
            title: "Oops...",
            text: `An error occured`,
            icon: "warning",
            confirmButtonText: "Ok, Thanks",
          });
        });
    },

    ForgoutPass() {
      this.$store
        .dispatch("auth/UserForgotPassword", this.email)
        .then((res) => {
          this.ShowAlertSuccess = true
          this.ShowAlertWaring = false
          this.EmailResetSuccess = res.data;
        })
        .catch((err) => {
          this.emailResetError = err.response;
          this.ShowAlertSuccess = false
          this.ShowAlertWaring = true
        });
    },
    OpenForGotPass() {
      this.popupActivo5 = true;
      // this.$swal
      //   .fire({
      //     title: "Enter Your Email",
      //     input: "text",
      //     inputAttributes: {
      //       autocapitalize: "off",
      //     },
      //     showCancelButton: true,
      //     confirmButtonText: "Confirm",
      //     showLoaderOnConfirm: true,
      //     preConfirm: (login) => {
      //       return this.$store
      //         .dispatch("auth/UserForgotPassword", login)

      //         .then((response) => {
      //           if (!response.ok) {
      //             throw new Error(response.statusText);
      //           }
      //           return response.json();
      //         })
      //         .catch((error) => {
      //           console.log(error);
      //           this.$swal.showValidationMessage(`Request failed: ${error}`);
      //         });
      //     },
      //     allowOutsideClick: () => !this.$swal.isLoading(),
      //   })
      //   .then((result) => {
      //     if (result.isConfirmed) {
      //       this.$swal.fire({
      //         title: `${result.value.login}'s avatar`,
      //         imageUrl: result.value.avatar_url,
      //       });
      //     }
      //   });
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Londrina+Solid&display=swap");

.facebook-btn {
  background-color: #1f15a7;
  border-style: none;
  border-radius: 0px;
}
.google-btn {
  background: #ee1616;
  border-style: none;
  border-radius: 0px;
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
  border: 2px solid #5c5e8b !important;
  border-radius: 7px;
}
input[type="email"] {
  background: white !important;
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

/* media  query mobile  */

@media screen and (max-width: 480px) {
  .card {
    width: 100% !important;
  }
  .vs-col {
    margin-bottom: 14px;
  }
}
</style>
