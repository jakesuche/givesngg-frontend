<template>
  <div>
    <nav class="navbar fixed navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <!-- mobile nav bar start -->
        <button
          v-show="!userExist() && onlyLogo"
          @click.prevent="active = !active"
          class="navbar-toggler"
          type="button"
        >
          <span><img :src="menuBugger" alt="" srcset="" /> </span>
        </button>
        <button v-show="!userExist()" class="navbar-toggler" type="button">
          <router-link to="/">
            <img class="thumbnail animate-img" :src="logo" alt="" srcset=""
          /></router-link>
        </button>
        <input
          v-show="!userExist() && onlyLogo"
          class="form-control me-2 border-right "
          type="search"
          placeholder="Search"
          aria-label="Search"
        />

        <!-- ====================================================================

        NOT AUTHENTICATED
    ======================================================================= -->
        <button v-show="userExist()" class="navbar-toggler" type="button">
          <span><img src="@/assets/images/home.png" alt="" srcset="" /> </span>
        </button>
        <button v-show="userExist()" class="navbar-toggler" type="button">
          <span
            ><img src="@/assets/images/notification.png" alt="" srcset="" />
          </span>
        </button>
        <button v-show="userExist()" class="navbar-toggler" type="button">
          <span
            ><img src="@/assets/images/usermobile.png" alt="" srcset="" />
          </span>
        </button>
        <button v-show="userExist()" class="navbar-toggler" type="button">
          <span
            ><img src="@/assets/images/envelope.png" alt="" srcset="" />
          </span>
        </button>
        <button v-show="userExist()" class="navbar-toggler" type="button">
          <span
            ><img src="@/assets/images/magnifying-glass.png" alt="" srcset="" />
          </span>
        </button>
        <button
          v-show="userExist()"
          @click.prevent="active = !active"
          class="navbar-toggler"
          type="button"
        >
          <span
            ><img src="@/assets/images/usermobileround.png" alt="" srcset="" />
          </span>
        </button>

        <!-- mobile nav bar end  -->
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li
              class="nav-item dropdown border-right nav-item-style"
              v-if="!userExist() && onlyLogo"
            >
              <a
                class="nav-link dropdown-toggle nav-item-style "
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Discover 
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li><hr class="dropdown-divider" /></li>
                <li>
                  <a class="dropdown-item" href="#">Something else here</a>
                </li>
              </ul>
            </li>
            <li
              class="nav-item dropdown border-right nav-item-style"
              v-if="!userExist() && onlyLogo"
            >
              <a
                class="nav-link nav-item-style dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Project for
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li><hr class="dropdown-divider" /></li>
                <li>
                  <a class="dropdown-item" href="#">Something else here</a>
                </li>
              </ul>
            </li>
            <li class="nav-item " v-if="!userExist() && onlyLogo">
              <a class="nav-link  nav-item-style" aria-current="page" href="#"
                >Gallery</a
              >
            </li>

            <!-- Logo image -->
            <li class="nav-item">
              <router-link to="/">
                <img
                  ref="img-logo"
                  :class="{
                    thumbnail: true,
                    'animate-img': true,
                    'image-left': userExist(),
                  }"
                  :src="logo"
                  alt=""
                  srcset=""
              /></router-link>
            </li>
            <li class="nav-item">
              <input
                v-show="userExist()"
                :class="'form-control me-2 m-2 border-right'"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
            </li>
          </ul>

          <ul
            ref="sign"
            class="navbar-nav ml-auto"
            v-if="!userExist() && onlyLogo"
          >
            <li class="nav-item">
              <router-link
                to="/login"
                style="border-style:unset"
                class="btn btn-router"
              >
                Login</router-link
              >
            </li>
            <li class="nav-item">
              <router-link
                to="/register"
                style="border-style:unset"
                class="btn btn-router"
              >
                Sign up</router-link
              >
            </li>
            <li class="nav-item">
              <button class="btn btn-secondary create-project" @click="openModal">
                Create a project
              </button>
            </li>
          </ul>
          <ul ref="sign" class="navbar-nav nav-user ml-auto" v-if="userExist()">
            <li class="nav-item nav-user-exist">
              <router-link
                to="/register"
                style="border-style:unset"
                class="btn btn-router"
              >
                <img src="@/assets/images2/Group 46.png" alt="" />
                <p>Home</p>
              </router-link>
            </li>
            <li class="nav-item nav-user-exist">
              <router-link
                to="/login"
                style="border-style:unset"
                class="btn btn-router"
              >
                <img src="@/assets/images2/bell-musical-tool.png" alt="" />
                <p>Notifications</p>
              </router-link>
            </li>
            <li class="nav-item nav-user-exist">
              <router-link
                to="/register"
                style="border-style:unset"
                class="btn btn-router"
              >
                <img src="@/assets/images2/user-shape.png" alt="" />
                <p>connections</p>
              </router-link>
            </li>
            <li class="nav-item nav-user-exist">
              <router-link
                to="/register"
                style="border-style:unset"
                class="btn btn-router"
              >
                <img src="@/assets/images2/envelope.png" alt="" />
                <p>Messages</p></router-link
              >
            </li>

            <li class="nav-item nav-user-exist">
              <router-link
                to="/register"
                style="border-style:unset"
                class="btn btn-router"
              >
                <img src="@/assets/images2/Group 49.png" alt="" />
                <p>Me</p>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div id="parentx" v-show="userExist()">
      <vs-sidebar
        parent="body"
        default-index="1"
        color="primary"
        class="sidebarx"
        spacer
        v-model="active"
        :position-right="userExist()"
      >
        <div class="header-sidebar" slot="header" v-if="userExist()">
          <vs-avatar
            size="70px"
            src="https://randomuser.me/api/portraits/men/85.jpg"
          />

          <h4>
            <!-- {{userName}} -->
            <vs-button
              color="primary"
              icon="more_horiz"
              type="flat"
            ></vs-button>
          </h4>
        </div>
        <ul class="list-group">
          <router-link to="/register"
            ><li class="list-group-item">Sign up</li></router-link
          >

          <router-link to="/login"
            ><li class="list-group-item">Login</li></router-link
          >

          <li class="list-group-item">Create a project</li>
        </ul>
        <ul class="list-group">
          <li @click="logOut()" class="list-group-item">Logout</li>
        </ul>

        <div class="footer-sidebar" slot="footer">
          <vs-button
            icon="reply"
            color="danger"
            type="flat"
            @click="$router.push('/')"
            >log out</vs-button
          >
          <vs-button icon="settings" color="primary" type="border"></vs-button>
        </div>
      </vs-sidebar>
    </div>


<!-- ========================================================================================
    modal for create project
    ====================================================================================== -->

      <ProjectCreateModal :testing="testing" />
      
<!-- Modal -->

  </div>
</template>

<script>
// import "@/assets/css/custom.css"
import homePage from "@/assets/images2/Group 286.png";
import logo from "@/assets/images/logo_dark.png";
import { logoAnime, authAnime } from "@/animate.js";
import menuBugger from "@/assets/images/Menu.png";
export default {
  data() {
    return {
      logo,
      menuBugger,
      active: false,
      showHideAuth: false,
      showHideNotAuth: true,
      homePage,
      onlyLogo: true,
      popupActivo5:false,
      testing:false
    };
  },
  watch: {
    '$route': function(value) {
      if (value.path === "/login" || value.path === "/register") {
        this.onlyLogo = false;
      } else {
        this.onlyLogo = true;
      }
    },
    testing:{
      handler:function(val){
        console.log(val)
        
      }
    }
    
    
  },
  mounted() {
    authAnime(this.$refs["sign"]);
    logoAnime(this.$refs["img-logo"]);
  },
  computed: {
    userName() {
      const userData = this.authUser().data["doc"];
      return userData || {};
    },
  },

  methods: {
    openModal(){
      this.testing = !this.testing
    },
    authUser() {
      return this.$store.getters["auth/authUser"];
    },
    userExist() {
      return this.$store.getters["auth/isAuthenticated"];
    },

    logOut() {
      this.active = false;
      this.$store.dispatch("auth/logOutUser").then(() => {
        setTimeout(() => {
          window.location.pathname = "/";
        }, 1000);
      });
    },
  },
};
</script>

<style scoped>
@import url('~@/assets/fonts/raleway/fonts.css');


.image-left {
  margin-left: -4px !important;
}
.m-2 {
  border-radius: 20px !important;
  background: #f1f1f1 0% 0% no-repeat padding-box;
  border-radius: 19px;
  opacity: 1;
  width: 100% !important;
}
.nav-user-exist {
  margin-left: 20px;
  margin-right: 20px;
}
.nav-user-exist img {
  height: 20px;
}
.nav-user-exist p {
  text-align: center;
  font: normal normal normal 12px/24px Raleway;
  letter-spacing: 0px;
  color: #5c5e8b;
  opacity: 1;
}
.nav-user {
  margin-bottom: -50px !important;
}
@media only screen and (max-width: 576px) {
  .list-group-item {
    border: none !important;
    text-align: center;
    color: #5c5e8b;
  }
  router-link:last-child {
    background-color: #5c5e8b !important;
    color: white;
  }
}
.nav-item-style {
  text-align: center;
  /* font: normal normal normal 20px/12px Raleway; */
  letter-spacing: 0px;
  color: #5c5e8b !important;
  opacity: 1;
}

.fixed {
  padding: 30px;
  position: inherit;
  position: relative;
  top: -60px;
  /* max-height: 1114vh; */
  /* position: relative;
    top:-60px */
}

.thumbnail {
  height: 40px;
  width: 109px;
  margin-left: 200px;
  transform: scale(1.3);
}

.nav-item .create-project {
  background: none;
  border-radius: 20px;
  color: #5c5e8b;
  border: 1px solid #5c5e8b;
}
.nav-item .btn {
  color: #5c5e8b;
}
.bg-light {
  background: white !important;
}

.form-control {
  border: none;

  width: 10%;
  background-image: url("~@/assets/images/Search.png");
  background-repeat: no-repeat;
  background-position: 10px 10px;
  padding: 12px 20px 12px 40px;
  border-radius: 0%;
}

/* side bar */
/* .swal2-container.swal2-grow-column.swal2-top-start {
    align-items: flex-start;
    padding-bottom: 44px;
    margin-left: -20px!important;
    margin-top: -20px!important;
} */

@media only screen and (max-width: 576px) {
  .thumbnail {
    height: 30px;
    width: 109px;
    margin: 0;
    border: none;
  }
  .navbar-light .navbar-toggler {
    border: none !important;
  }
  .fixed {
    height: 100px;
  }
}

.header-sidebar {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
}
.header-sidebar > h4 {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
}
.header-sidebar > h4 > button {
  margin-left: 10px;
}

.footer-sidebar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}
.footer-sidebar > button {
  border: 0px solid rgba(0, 0, 0, 0) !important;
  border-left: 1px solid rgba(0, 0, 0, 0.07) !important;
  border-radius: 0px !important;
}
</style>
