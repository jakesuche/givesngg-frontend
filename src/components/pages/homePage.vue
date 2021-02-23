<template @click="openCreatePoject()">
  <div class="" >
    <div ref="jumbotron" class="jumbotron jumbotron-fluid">
      <div :class="{overlay:true,overlay2:userExist()}"></div>
      <div class="inner">
        <div class="container">
          <div ref="heading" class="row justify-content-start">
            <h1>Your spare change can change someone's life</h1>
            <div class="row">
              <h5>Change a life</h5>
            </div>
          </div>
          <div class="row justify-content-start">
            <button ref="createbtn" class="btn btn-secondary" @click="openCreatePoject()">
              <h3>Create a project</h3>
            </button>
          </div>

          <!-- <div class="row justify-content-center justify-center-para">
              <p >Help a community get basic amenities, help a patient pay for a surgery or help an individual find purpose in life</p>
            </div> -->

          <div class="row container row-with-para">
            <div class="col-md-12">
              <p>
                Help a community get basic amenities, help a patient pay for a
                surgery or help an individual find purpose in life
              </p>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>

    <div class="container">
      <h2 class="h2-end" id="local-fund-header">Top ongoing projects.</h2>
      <!-- <div class="row">
         <div class="co">
           
         </div>

       </div> -->
      <div class="row row-cols-3">
        <div
          class="col my-col-6"
          data-aos="zoom-in"
         
        >
          <div class="card mb-3">
            <img class="page-image" :src="guyWriting" />

            <h6 style="font-size:20px">
              Help john get fly for his scholarship
            </h6>
            <br />
            <p>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim...
            </p>
            <div class="card-body">
              <div class="progress-container">
                <div class="progress">
                  <div
                    class="progress-bar"
                    role="progressbar"
                    style="width: 25%"
                    aria-valuenow="25"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
                <div class="cash">$48,000</div>
              </div>
              <div>
                <p class="card-title title-amount total-donation">
                  258,032 donated
                </p>
              </div>
            </div>
            <div class="card-footer">
              <button class="btn btn-secondary ">Donate</button>
              <button class="btn  btn-secondary">
                <img src="@/assets/images/share.png" alt="" srcset="" /> Share
              </button>
            </div>
          </div>
        </div>
        <div class="col my-col-6" data-aos="flip-right">
          <div class="card mb-3">
            <img class="page-image" :src="littleGirl" />

            <h6 style="font-size:20px">
              Help john get fly for his scholarship
            </h6>
            <br />
            <p>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim...
            </p>
            <div class="card-body">
              <div class="progress-container">
                <div class="progress">
                  <div
                    class="progress-bar"
                    role="progressbar"
                    style="width: 25%"
                    aria-valuenow="25"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
                <div class="cash">$48,000</div>
              </div>
              <div>
                <p class="card-title title-amount total-donation">
                  258,032 donated
                </p>
              </div>
            </div>
            <div class="card-footer">
              <button class="btn btn-secondary ">Donate</button>
              <button class="btn  btn-secondary">
                <img src="@/assets/images/share.png" alt="" srcset="" /> Share
              </button>
            </div>
          </div>
        </div>
        <div class="col my-col-6 " data-aos="zoom-in">
          <div class="card mb-3">
            <img class="page-image" :src="cheers" />

            <h6 style="font-size:20px">
              Help john get fly for his scholarship
            </h6>
            <br />
            <p>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim...
            </p>
            <div class="card-body">
              <div class="progress-container">
                <div class="progress">
                  <div
                    class="progress-bar"
                    role="progressbar"
                    style="width: 25%"
                    aria-valuenow="25"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
                <div class="cash">$48,000</div>
              </div>
              <div>
                <p class="card-title title-amount total-donation">
                  258,032 donated
                </p>
              </div>
            </div>
            <div class="card-footer">
              <button class="btn btn-secondary ">Donate</button>
              <button class="btn  btn-secondary">
                <img src="@/assets/images/share.png" alt="" srcset="" /> Share
              </button>
            </div>
          </div>
        </div>
        <div class="col my-col-6" data-aos="zoom-in">
          <div class="card mb-3">
            <img class="page-image" :src="cuteKid" />

            <h6 style="font-size:20px">
              Help john get fly for his scholarship
            </h6>
            <br />
            <p>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim...
            </p>
            <div class="card-body">
              <div class="progress-container">
                <div class="progress">
                  <div
                    class="progress-bar"
                    role="progressbar"
                    style="width: 25%"
                    aria-valuenow="25"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
                <div class="cash">$48,000</div>
              </div>
              <div>
                <p class="card-title title-amount total-donation">
                  258,032 donated
                </p>
              </div>
            </div>
            <div class="card-footer">
              <button class="btn btn-secondary ">Donate</button>
              <button class="btn  btn-secondary">
                <img src="@/assets/images/share.png" alt="" srcset="" /> Share
              </button>
            </div>
          </div>
        </div>
        <div class="col my-col-6" data-aos="zoom-in">
          <div class="card mb-3">
            <img class="page-image" :src="kidwater" />

            <h6 style="font-size:20px">
              Help john get fly for his scholarship
            </h6>
            <br />
            <p>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim...
            </p>
            <div class="card-body">
              <div class="progress-container">
                <div class="progress">
                  <div
                    class="progress-bar"
                    role="progressbar"
                    style="width: 25%"
                    aria-valuenow="25"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
                <div class="cash">$48,000</div>
              </div>
              <div>
                <p class="card-title title-amount total-donation">
                  258,032 donated
                </p>
              </div>
            </div>
            <div class="card-footer">
              <button class="btn btn-secondary ">Donate</button>
              <button class="btn  btn-secondary">
                <img src="@/assets/images/share.png" alt="" srcset="" /> Share
              </button>
            </div>
          </div>
        </div>
        <div class="col my-col-6" data-aos="zoom-in">
          <div class="card mb-3">
            <img class="page-image" :src="drinkWater" />

            <h6 style="font-size:20px">
              Help john get fly for his scholarship
            </h6>
            <br />
            <p>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim...
            </p>
            <div class="card-body">
              <div class="progress-container">
                <div class="progress">
                  <div
                    class="progress-bar"
                    role="progressbar"
                    style="width: 25%"
                    aria-valuenow="25"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
                <div class="cash">$48,000</div>
              </div>
              <div>
                <p class="card-title title-amount total-donation">
                  258,032 donated
                </p>
              </div>
            </div>
            <div class="card-footer">
              <button class="btn btn-secondary ">Donate</button>
              <button class="btn  btn-secondary">
                <img src="@/assets/images/share.png" alt="" srcset="" /> Share
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- slider row  -->
      <div class="container">
        <div class="galler-em">
          <h2>Gallery</h2>
          <em>See projects in works and already completed projects. </em>
        </div>
        <div class="row" data-aos="fade-down" data-aos-duration="3000">
          <div class="col-md-6 ">
            <h3 id="h2-topic">
              Operation "help rural farmer access the market"
            </h3>
            <p id="para-end ">
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit animExcepteur s int occaecat cupidatat non
              proident, sunt in culpa qui officia deserunt mollit animExcepteur
              sint occaecat cupidatat non proident, sunt in culpa qui officia
              deserunt mollit anim....Excepteur sint occaecat cupidatat non
              proident, anim....Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim........
            </p>
            <br />

            <em id="italics">
              The project is being carried out by the fresh food for all
              organization
            </em>
          </div>
          <div class="col-md-6">
            <img :src="roadWork" class="roadwork" alt="" srcset="" />
          </div>
          <h3 id="h2-topic" class="h2-topic2">
            Operation "help rural farmer access the market"
          </h3>
        </div>
        <h6 id="italics">
          The project is being carried out by the fresh food for all
          organization
        </h6>
      </div>

      <!-- second row -->
      <h2
        class="h2-end"
        style="margin-top:40px!important"
        id="local-fund-header"
      >
        Fund a project in your locality
      </h2>
      <div class="row row-cols-3">
        <div
          class="col my-col-6"
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
        >
          <div class="card mb-3">
            <img class="page-image" :src="cuteKid" />

            <h6 style="font-size:20px">
              Help john get fly for his scholarship
            </h6>
            <br />
            <p>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim...
            </p>
            <div class="card-body">
              <div class="progress-container">
                <div class="progress">
                  <div
                    class="progress-bar"
                    role="progressbar"
                    style="width: 25%"
                    aria-valuenow="25"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
                <div class="cash">$48,000</div>
              </div>
              <div>
                <p class="card-title title-amount total-donation">
                  258,032 donated
                </p>
              </div>
            </div>
            <div class="card-footer">
              <button class="btn btn-secondary ">Donate</button>
              <button class="btn  btn-secondary">
                <img src="@/assets/images/share.png" alt="" srcset="" /> Share
              </button>
            </div>
          </div>
        </div>
        <div
          class="col my-col-6"
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
        >
          <div class="card mb-3">
            <img class="page-image" :src="kidwater" />

            <h6 style="font-size:20px">
              Help john get fly for his scholarship
            </h6>
            <br />
            <p>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim...
            </p>
            <div class="card-body">
              <div class="progress-container">
                <div class="progress">
                  <div
                    class="progress-bar"
                    role="progressbar"
                    style="width: 25%"
                    aria-valuenow="25"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
                <div class="cash">$48,000</div>
              </div>
              <div>
                <p class="card-title title-amount total-donation">
                  258,032 donated
                </p>
              </div>
            </div>
            <div class="card-footer">
              <button class="btn btn-secondary ">Donate</button>
              <button class="btn  btn-secondary">
                <img src="@/assets/images/share.png" alt="" srcset="" /> Share
              </button>
            </div>
          </div>
        </div>
        <div
          class="col my-col-6"
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
        >
          <div class="card mb-3">
            <img class="page-image" :src="drinkWater" />

            <h6 style="font-size:20px">
              Help john get fly for his scholarship
            </h6>
            <br />
            <p>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim...
            </p>
            <div class="card-body">
              <div class="progress-container">
                <div class="progress">
                  <div
                    class="progress-bar"
                    role="progressbar"
                    style="width: 25%"
                    aria-valuenow="25"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
                <div class="cash">$48,000</div>
              </div>
              <div>
                <p class="card-title title-amount total-donation">
                  258,032 donated
                </p>
              </div>
            </div>
            <div class="card-footer">
              <button class="btn btn-secondary ">Donate</button>
              <button class="btn  btn-secondary">
                <img src="@/assets/images/share.png" alt="" srcset="" /> Share
              </button>
            </div>
          </div>
        </div>
      </div> 
    </div>
    <ProjectCreateModal :testing="testing"  />
  </div>
</template>

<script>
import { jumbotron, heading, createBtn } from "@/animate";
import cheers from "@/assets/images/cheers.png";
import cuteKid from "@/assets/images/cute-kid.png";
import drinkWater from "@/assets/images/drink-water.png";
import littleGirl from "@/assets/images/little-girl.png";
import mainpageimg from "@/assets/images/mainpage-img.png";
import roadWork from "@/assets/images/roadwork.png";
import kidwater from "@/assets/images/kid-water.png";
import guyWriting from "@/assets/images/guyWriting.jpg";
// import cheers from '@/assets/images/cheers.png'
// import cheers from '@/assets/images/cheers.png'
// import cheers from '@/assets/images/cheers.png'
// import cheers from '@/assets/images/cheers.png'

export default {
  data() {
    return {
      roadWork,
      mainpageimg,
      littleGirl,
      drinkWater,
      cuteKid,
      cheers,
      kidwater,
      guyWriting,
      testing:false,
      
    };
  },
  
  mounted() {
    jumbotron(this.$refs["jumbotron"]);
    heading(this.$refs["heading"]);
    createBtn(this.$refs["createbtn"]);
    
  //  const  element = document.querySelector('.vs-icon')
  //   element.addEventListener('click', function(){
        
  //       this.testing = false
        
  //   })
    

    // console.log(window.height);
    // this.$refs.jumbotron.css({ height: `${window.height()}px` });
    // window.onresize(() => {
    //   this.$refs.jumbotron.css({ height: `${window.height()}px` });
    // });
  },
  created(){
    //   const  element = document.querySelector('.vs-icon')
    // element.addEventListener('click', function(){
        
    //     this.testing = false
        
    // })
  },
  methods:{
   
    openCreatePoject(){
      this.testing=!this.testing
    },
    userExist(){
      return this.$store.getters['auth/isAuthenticated']
    }
    
     
  }
  
};
</script>

<style scoped>
.jumbotron {
  background-image: url("~@/assets/images/mainpage-img.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100vh;
  color: white;
  margin-top: -60px;
}
.jumbotron > .overlay {
  position: absolute;
  top: 100px;
  right: 0;
  bottom: 0;
  left: 0;
  height: 100vh;
  background-color: rgb(92, 94, 139, 0.55);
}



.justify-content-start > h1 {
  font-size: 2.5rem;
  width: 560px;
  text-align: left;
  /* font: normal normal normal 60px/12px Somatic Rounded; */
}
.justify-content-start > .row {
  margin-top: 5px;
  margin-bottom: -40px;
}
.justify-content-start > button {
  background: white;
  border-radius: 50px;
  color: #5c5e8b;
}
.justify-center-para {
  position: relative;
}
.jumbotron > .inner {
  position: relative;
  z-index: 2;
}

.progress {
  width: 90%;
  margin-left: -20px;
  height: 10px;
  border-radius: 15px;
  background: #bcbcbc;
}

.progress-bar {
  background: #5c5e8b;
}
.progress-container {
  display: flex;
}
.card {
  background: none;
  border: none;
}
.card-title {
  text-align: left;
}

.card-footer {
  background: none;
  border: none;
}
.card-footer > button {
  border-radius: 30px;
  margin-left: 10px;
  margin-right: 10px;
  padding-left: 40px;
  padding-right: 40px;
}
.card-footer > button:first-child {
  margin-left: -30px;
  margin-right: 50px;
  background: #5c5e8b;
  color: white;
  /* font-size: 20px; */
  font-family: "Raleway", sans-serif;

  cursor: pointer;
  text-align: center;
  /* position:relative;
    right:30px */
}
.card-footer > button:last-child {
  margin-left: 0px;
  margin-right: 20px;
  padding-bottom: 25px;
  background: white;
  color: #5c5e8b;
  border: none;
  height: 25px;
  font-size: 14px;
  font-family: "Raleway", sans-serif;
  box-shadow: 0 6px 10px 0 rgb(0 0 0 / 20%);
  /* position:relative;
    left:35px */
}
h6 {
  text-align: justify;
  color: #5c5e8b;
  color: #5c5e8b;
  font-weight: bold;
  font-size: 20px;
}
p {
  text-align: justify;
  font-size: 14px;
}

.roadwork {
  width: 100%;
  height: 100%;
}

#h2-topic {
  font-weight: bold;
  font-family: "Raleway", sans-serif;
  font-size: 40px;
  color: #000000;
  line-height: 50pt;
  width: 523px;
  height: 148px;
  padding-top: 0;
  opacity: 1;
  text-align: left;
}

#para-end {
  font-weight: normal;
  font-family: "Raleway", sans-serif;
  font-size: 14px;
  color: #000000;
  line-height: 17pt;
  width: 470px;
  height: 170px;
  padding-top: 0px;
  padding-bottom: 50px;
  opacity: 1;
}

#italics {
  font-weight: normal;
  font-family: "Raleway", sans-serif;
  font-size: 14px;
  color: #000000;
  line-height: 24pt;
  width: 523px;
  height: 22px;
  opacity: 1;
  margin-right: 100px;
}

#local-fund-header {
  line-height: 12pt;
  width: 560px;
  height: 8px;
  opacity: 1;
}

.h2-end {
  font-weight: normal;
  /* font-family: ; */
  font-size: 30px;
  color: #000000;
  padding: 3px 0 0 0;
  margin: 0 0 -50px 30px;
  text-align: left;
}

.galler-em {
  text-align: justify;
  padding-left: 20px;
}

.title-amount {
  margin-left: -20px;
}

.card {
  transform: scale(0.9);
}

html {
  box-sizing: border-box;
}

body {
  margin: 0 auto;
  padding: 0;
  width: 1920px;
  height: 4100px;
  border: 1px solid #f1f1f1;
}

main {
  background-image: url("~@/assets/images/mainpage-img.png");
  background-size: cover;
}

.clear {
  clear: both;
}

#topbar {
  width: 1920px;
  margin: 0 auto;
  height: 140px;
  background-color: #ffffff;
  border: 1px solid #7070707a;
  position: fixed;
  z-index: 2;
}

#topbar-image {
  position: relative;
  top: -108px;
  left: 862px;
  width: 196px;
  height: 64px;
}

.topbar-menu {
  font-weight: normal;
  font-size: 20px;
  padding: 61px 0 61px 0;
  width: 40%;
  height: 24px;
  color: #5c5e8b;
  margin: 0;
}

.topbar-menu a {
  text-decoration: none;
  border-right: 1px solid #bb4545;
  position: relative;
  left: 140px;
  padding: 0 20px;
}

.topbar-menu a:hover {
  text-decoration: none;
}

#search {
  width: 16px;
  height: 18px;
}

#topbar-right {
  width: 40%;
  text-align: center;
  height: 60px;
  float: right;
  position: relative;
  top: -110px;
}

#topbar-right-text {
  display: inline-block;
  margin-right: 20px;
  margin-left: 50px;
  /* float: left; */
  font-weight: normal;
  font-size: 20px;
  position: relative;
  top: -5px;
}

#topbar-right-text a {
  text-decoration: none;
}

.button {
  display: inline-block;
  border: 2px solid #5c5e8b;
  border-radius: 40px;
  width: 173px;
  height: 30px;
  padding-top: 10px;
  text-align: center;
  font-size: 20px;
  line-height: 12pt;
}

.topmenu-button a {
  text-decoration: none;
}

.topmenu-button a:hover {
  text-decoration: none;
}

.create-button {
  display: inline-block;
  border: 2px solid #ffffff;
  border-radius: 40px;
  width: 345px;
  height: 60px;
  font-size: 40px;
  background-color: #ffffff;
  padding-top: 20px;
  line-height: 24pt;
  text-align: center;
  position: relative;
  left: 140px;
  top: 230px;
  opacity: 1;
  transition: 0.35s;
}

.create-button a,
active {
  text-decoration: none;
}

.create-button:hover a {
  text-decoration: none;
  color: black;
}

p {
  position: relative;
  top: -8px;
}

#main-page {
  width: 100%;
  height: 1000px;
  border-bottom: 1px solid #707070;
  background-color: rgb(92, 94, 139, 0.55);
}

#mainpage-text {
  width: 864px;
  font-family: "Raleway", sans-serif;
  font-weight: Regular;
  font-size: 58px;
  position: relative;
  left: 140px;
  top: 260px;
  color: #ffffff;
  opacity: 1;
}

#mini-text {
  position: relative;
  left: 140px;
  top: 225px;
  width: 190px;
  font-family: "Raleway", sans-serif;
  font-weight: normal;
  font-size: 30px;
  color: #ffffff;
}

#mainpage-para2 {
  margin-left: 140px;
  margin-top: 80px;
  font-stretch: ultra-condensed;
  font-family: "Raleway", sans-serif;
  font-weight: normal;
  font-size: 30px;
  width: 1600px;
  letter-spacing: 0;
  color: #ffffff;
}

#mid-section {
  background-color: #f1f1f1;
}

#page-container {
  width: 1178px;
  height: 2900px;
  margin: 0 auto;
  margin-left: 366px;
  margin-right: 372px;
}

h2 {
  font-weight: normal;
  /* font-family: ; */
  font-size: 40px;
  color: #000000;
  width: 384px;
  margin-top: 0px;
  padding-top: 44px;
}

#ongoing-projects {
  width: 1178px;
  height: 880px;
  margin-top: 30px;
}

.row {
  display: inline-flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  margin: 60px -48px 0 0;
  width: calc(100% + 60px);
}

.column {
  display: inline-flex;
  flex-direction: column;
  flex-basis: 100%;
  flex: 1;
}

.page-image {
  width: 360px;
  height: 200px;
  margin-bottom: 19px;
  opacity: 1;
}

.page-image-link {
  text-decoration: none;
  color: #5c5e8b;
  font-weight: bold;
  font-size: 20px;
  width: 360px;
  height: 23px;
  line-height: 30pt;
  text-align: left;
}

.project-text {
  font-size: 14px;
  line-height: 24pt;
  font-family: "Raleway", sans-serif;
  text-align: left;
  color: #000000;
  width: 360px;
  height: 40px;
  margin-bottom: 22px;
}

.project-prog-bar {
  margin-right: 11px;
  width: 329px;
  height: 16px;
}

.prog-bar {
  height: 10px;
  width: 264px;
  border: 1px solid #7070707a;
  border-radius: 5px;
  background-color: #7070707a;
}

.inner-bar1 {
  height: 10px;
  width: 132px;
  background-color: #5c5e8b;
  border-radius: 5px;
}

.inner-bar2 {
  height: 10px;
  width: 90px;
  background-color: #5c5e8b;
  border-radius: 5px;
}

.inner-bar3 {
  height: 10px;
  width: 238px;
  background-color: #5c5e8b;
  border-radius: 5px;
}

.cash {
  width: 54px;
  height: 16px;
  font-size: 14px;
  font-weight: bold;
  font-family: "Raleway", sans-serif;
  line-height: 24pt;
  margin-left: 9px;
  position: relative;
  left: 20px;
  top: -10px;
}

.total-donation {
  color: #5c5e8b;
  font-size: 14px;
  font-weight: bold;
  font-family: "Raleway", sans-serif;
  line-height: 24pt;
  position: relative;
  left: 0px;
}

.donate-button {
  background-color: #5c5e8b;
  border: 1px solid #5c5e8b;
  border-radius: 19px;
  color: #ffffff;
  padding: 5px 10px;
  text-align: center;
  display: inline-block;
  font-size: 20px;
  font-family: "Raleway", sans-serif;
  margin: 35px 0px;
  width: 188px;
  height: 38px;
  cursor: pointer;
}

.share-button {
  background-color: #ffffff;
  border: 1px solid #ffffff;
  border-radius: 19px;
  color: #5c5e8b;
  padding: 5px 10px;
  text-align: right;
  display: inline-block;
  font-size: 14px;
  font-family: "Raleway", sans-serif;
  box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.2);
  margin: 35px 45px;
  width: 130px;
  height: 30px;
  cursor: pointer;
}

#mid-section-end {
  width: 1178px;
  margin-right: 372px;
  margin-top: 140px;
  float: left;
}

#gallery {
  width: 136px;
  padding-top: 79px;
  opacity: 1;
}

.mid-section-article {
  height: 450px;
}

#mid-sect-img {
  width: 720px;
  height: 480px;
  opacity: 1;
  position: relative;
  top: -480px;
  left: 500px;
}

.share-button1 {
  background-color: #ffffff;
  border: 1px solid #5c5e8b;
  border-radius: 19px;
  color: #5c5e8b;
  padding: 5px 10px;
  text-align: right;
  display: inline-block;
  font-size: 14px;
  font-family: "Raleway", sans-serif;
  margin: 35px 45px;
  width: 130px;
  height: 30px;
  cursor: pointer;
}

#local-fund {
  position: relative;
  top: -510px;
}

#end-section {
  width: 1920px;
  margin: 0 auto;
  margin-left: 300px;
}

#last-section {
  display: inline-flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 70px;
}

.end-section-h3 {
  font-family: Arial;
  font-weight: Regular;
  font-size: 10px;
  color: #5c5e8b;
}

#h3-end {
  font-family: Arial;
  font-weight: Regular;
  font-size: 10px;
  font-weight: normal;
  line-height: 12pt;
  color: #5c5e8b;
}

.p-end {
  font-size: 14px;
  font-family: Arial;
  font-weight: Regular;
  line-height: 24pt;
  color: #5c5e8b;
  width: 198px;
  height: 40px;
}

#socials {
  width: 96px;
  height: 14px;
}

.social {
  width: 14px;
  height: 14px;
}

.row-with-para {
  margin-top: 260px;
}

@media only screen and (max-width: 1340px) {
  .row-with-para {
    position: relative;
    bottom: 130px;
  }
}

@media only screen and (max-width: 576px) {
  .my-col-6 {
    flex: 0 0 50%;
    max-width: 50%;
    padding-left: 0px;
    padding-right: 10px;
    margin-left: -17px;
    height: 240px;
  }
  .page-image {
    width: 100%;
    height: 100%;
    margin-bottom: 19px;
    opacity: 1;
  }
  p {
    display: none;
  }
  .card-footer > button {
    display: none;
  }

  /* jumbotron section start */

  .justify-content-start > h1 {
    font-size: 1.5rem !important;
    width: 560px !important;
    text-align: left !important;
  }
  .jumbotron {
    height: 50vh;
  }
  .justify-content-start > button {
    transform: scale(0.7) translateX(-40px) !important;
    /* max-height: 200px; */
  }
  .jumbotron > .overlay {
    height: 50vh;
  }

  /* jumbotron section ends */
  .card > h6 {
    font-size: 16px !important;
    letter-spacing: 0px;
  }
  .total-donation {
    display: block;
    text-align: left;

    letter-spacing: 0px;
    font-size: 14px;
    color: #5c5e8b;
    opacity: 4;
    margin-top: -20px;
  }
  .cash {
    display: none;
  }

  .progress {
    width: 100vw;
    margin-left: -20px;
    height: 6px;
    border-radius: 15px;
    background: #bcbcbc;
    margin-top: -30px;
  }

  /* Gallery design */
  .galler-em {
    text-align: justify;
    padding-left: 20px;
    float: right;
    margin-right: -20px;
    height: 20px;
  }
  .galler-em > h2 {
    font: normal normal normal 14px/12px Somatic Rounded;
    letter-spacing: 0px;
    color: #000000;
    opacity: 1;
    font-weight: bolder;
    font-size: x-large;
  }

  #h2-topic {
    font-weight: bold;
    font-family: "Raleway", sans-serif;
    font-size: 20px;
    color: #000000;
    line-height: 20pt;
    width: 400px;
    height: 148px;
    padding-top: 0;
    opacity: 1;
    text-align: left;
    float: right;
    display: none;
  }
  .h2-topic2 {
    display: block !important;
    height: 50px !important;
  }
  .roadwork {
    /* vertical-align: middle;
    border-style: none;
    transform: translateY(-125%) translateX(-10%);
    width: 110%!important; */
    width: 110%;
    height: 100%;
    margin-left: -50px;
  }
  em#italics {
    display: none;
  }
  h6#italics {
    width: 100%;
    line-height: 15px;
    text-align: left;
    font: italic normal normal 9px/14px Segoe UI;
    letter-spacing: 0px;
    color: #000000;
    opacity: 1;
    font-size: 12px;
  }
  #local-fund-header {
    line-height: 12pt;
    width: 100%;
    height: 8px;
    opacity: 1;
    text-align: left;

    font-size: 18px;
    margin-left: -5px;
  }
}

@media only screen and (min-width: 676px) {
  .h2-topic2 {
    font-weight: bold;
    font-family: "Raleway", sans-serif;
    font-size: 20px;
    color: #000000;
    line-height: 20pt;
    width: 400px;
    height: 148px;
    padding-top: 0;
    opacity: 1;
    text-align: left;
    float: right;
    display: none;
  }
  .jumbotron > .overlay2{
  top:113px!important;
}
}
</style>
