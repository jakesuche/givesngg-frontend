<template>
  <div>
      <div class="progresses py-4">
        <ul class="d-flex align-items-center justify-content-between">
            <li id="step-1" class="blue"></li>
            <li id="step-2"></li>
            <li id="step-3"></li>
        </ul>
        <div class="progress">
            <div class="progress-bar" role="progressbar" style="width: 70%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
    </div>
    <div class="container">
      <div class="row">
         
        <div class="col-md-6">
          <div class="card text-center  " ref="card">
            
            <div class="card-body form-contain">
              <form>
                <div class="mb-3">
                  <label
                    for="exampleInputPassword1"
                    style="float:left"
                    class="form-label"
                    >NGO Name</label
                  >
                  <input
                    type="text"
                    class="form-control input"
                    id="exampleInputPassword1"
                    placeholder="example@gmail.com"
                  />
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
                    >Address</label
                  >
                  <input
                    type="text"
                    class="form-control input"
                    id="exampleInputPassword1"
                    placeholder=""
                  />
                </div>
                <div class="mb-3">
                  <label
                    for="exampleInputPassword1"
                    style="float:left"
                    class="form-label"
                    >Local Goverment Area</label
                  >
                  <input
                    type="text"
                    class="form-control input"
                    id="exampleInputPassword1"
                    placeholder=""
                  />
                </div>
                 <div class="mb-3">
                  <label
                    for="exampleInputPassword1"
                    style="float:left"
                    class="form-label"
                    >C.A.C Number</label
                  >
                  <input
                    type="text"
                    class="form-control input"
                    id="exampleInputPassword1"
                    placeholder=""
                  />
                </div>
                 <div class="mb-3">
                  <label
                    for="exampleInputPassword1"
                    style="float:left"
                    class="form-label"
                    >Upload C.A.C Document</label
                  >
                  <input
                    type="file"
                    class="form-control input"
                    id="exampleInputPassword1"
                    placeholder=""
                  />
                </div>
                <div class="mb-3">
                  <label
                    for="exampleInputPassword1"
                    style="float:left"
                    class="form-label"
                    >Upload C.A.C Document</label
                  >
                 
                  <textarea  class="form-control input" name="" id="" cols="30" rows="10"></textarea>
                </div>

                <button
                  type="submit"
                  style="width:70%"
                  class="btn btn-primary signup"
                >
                  <span class="signup-btn">Finish </span>
                </button>
              </form>
             
            </div>
            
          </div>
        </div>

        <!-- second column -->
        <div class="col-md-"></div> 
        <div   class="col-md-6 col-md-6-custom" ref="class-of-4">
          <div  class="row mb-3">
            <div class="col-md-12">
              <button type="button" class="btn btn-primary btn-block">
                <object :data="upload" type=""></object> Create a new project
              </button>
            </div>
          </div>
          <div class="row mb-3">
            <div class="col-md-12">
              <div class="">
                <button type="button" class=" price-wallet btn btn-primary">
                  <span style="display:block">
                    <h6>
                      Project Allocation
                    </h6>
                    <p class="price">$2,000</p>
                  </span>
                </button>
                <button type="button" class=" price-wallet btn btn-primary">
                  <span style="display:block">
                    <h6>
                      Wallet
                    </h6>
                    <p class="price">$500</p>
                  </span>
                </button>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col" id="approved-project">
              Approved project
            </div>
          </div>
          <div class="row mb-3">
            <br />
            <div class="col"><hr /></div>
            <div class="col-auto">
              <span
                style="letter-spacing: 0px;
color: #707070;
opacity: 1;"
                >Sort by:</span
              ><span
                style="letter-spacing: 0px;
color: #707070;
opacity: 1;"
                >Newest</span
              >
            </div>
          </div>
          <div class="row mb-3">
            <div class="col-md-12 ">
              <ul class="list-group">
                <li class="list-group-item list-item">
                  <span style="display:flex">
                    <img :src="userIcon" alt="" />
                    <p>
                      Help rural schools get books. <br /><span
                        class="list-group-item-small"
                        >Ebose Ailenotor
                      </span>
                    </p></span
                  >
                </li>
                <li class="list-group-item list-item">
                  <span style="display:flex">
                    <img :src="userIcon" alt="" />
                    <p>
                      Help rural schools get books. <br /><span
                        class="list-group-item-small"
                        >Ebose Ailenotor
                      </span>
                    </p></span
                  >
                </li>
                <li class="list-group-item list-item">
                  <span style="display:flex">
                    <img :src="userIcon" alt="" />
                    <p>
                      Help rural schools get books. <br /><span
                        class="list-group-item-small"
                        >Ebose Ailenotor
                      </span>
                    </p></span
                  >
                </li>
                <li class="list-group-item list-item">
                  <span style="display:flex">
                    <img :src="userIcon" alt="" />
                    <p>
                      Help rural schools get books. <br /><span
                        class="list-group-item-small"
                        >Ebose Ailenotor
                      </span>
                    </p></span
                  >
                </li>
                <li class="list-group-item list-item">
                  <span style="display:flex">
                    <img :src="userIcon" alt="" />
                    <p>
                      Help rural schools get books. <br /><span
                        class="list-group-item-small"
                        >Ebose Ailenotor
                      </span>
                    </p></span
                  >
                </li>
                <li class="list-group-item list-item">
                  <span style="display:flex">
                    <img :src="userIcon" alt="" />
                    <p>
                      Help rural schools get books. <br /><span
                        class="list-group-item-small"
                        >Ebose Ailenotor
                      </span>
                    </p></span
                  >
                </li>
                <li class="list-group-item list-item">
                  <span style="display:flex">
                    <img :src="userIcon" alt="" />
                    <p>
                      Help rural schools get books. <br /><span
                        class="list-group-item-small"
                        >Ebose Ailenotor
                      </span>
                    </p></span
                  >
                </li>

                <li class="list-group-item">See more</li>
                <file-pond 
                  name="test"
                  ref="pond"
                  label-idle="Drop file here"
                />
              </ul>
            </div>
          </div>
        </div>
      
      </div>
    </div>
  </div>
</template>

<script>
import upload from "@/assets/svg/upload.svg";
import vueFilepond from 'vue-filepond';
import 'filepond/dist/filepond.min.css';



// import { col4md, createBtn } from "@/animate"
import userIcon from "@/assets/images/userIcon.png";
import { cardAnime } from "@/animate"
const FilePond = vueFilepond()
export default {
    data(){
        return {
            userIcon,
            upload
        }
    },
    components:{
      FilePond
    },
    mounted(){
        cardAnime(this.$refs['card'])
    }
};
</script>

<style scoped>

/* progress section */
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');

.progress-bar{
    background:#0AAE0F
}
.progresses {
    position: relative;
    max-width: 70%;
    margin: auto
}

.progresses ul {
    list-style: none;
    padding: 0
}

.progresses ul li {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: #0AAE0F;
    z-index: 200;
    position: relative
}

.progresses ul li.blue {
    color: #0AAE0F;
    background-color: #0AAE0F
}

.progresses ul li::after {
    position: absolute;
    top: 35px;
    left: -15px;
    font-size: 0.8rem;
    width: 90px
}

#step-1::after {
    /* content: "Review order" */
}

#step-2::after {
    /* content: "Sign In"; */
    left: -5px
}

#step-3::after {
    /* content: "Payment" */
}

.progresses .progress {
    height: 0.8rem;
    width: 100%;
    top: 33px;
    position: absolute;
    background-color: #7070707A;
    border-radius: 10px
}
/* progress section end */

textarea.form-control{
    height: 150px!important;
    background: #d6d6d654 !important;
}

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
  width: 100%;
    transform:scale(0.8) translateY(80px);
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

#approved-project {
  text-align: left;
  font: normal normal bold 20px/30px Raleway;
  letter-spacing: 0px;
  color: #5c5e8b;
  opacity: 1;
}
.btn-block {
  top: 243px;
  left: 1354px;
  width: 100%;
  height: 44px;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #0000000a;
  border-radius: 10px;
  opacity: 1;
  color: #5c5e8b;
}
h6 {
  width: 113px;
  height: 16px;
  text-align: left;
  font: normal normal normal 14px/12px Raleway;
  letter-spacing: 0px;
  color: #5c5e8b;
  opacity: 1;
}
.price-wallet {
  height: 70px;
  background: none;
  width: 45%;
  height: 67px;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 2px 6px #0000000a;
  border-radius: 10px;
  opacity: 1;
}
.price-wallet:first-child {
  margin-right: 30px;
}

.price {
  height: 24px;
  text-align: center;
  font: normal normal bold 20px/24px Raleway;
  letter-spacing: 0px;
  color: #0aae0f;
  opacity: 1;
}
img {
  height: 51%;
}
.btn-group1 {
  display: flex;
  align-content: space-between;
}

.btn {
  border-style: none;
  border: none;
}

.donated-amount {
  top: 620px;
  left: 154px;
  width: 104px;
  height: 12px;
  text-align: left;
  font: normal normal bold 12px/30px Raleway;
  letter-spacing: 0px;
  color: #707070;
  opacity: 1;
}

.list-item {
  text-align: justify;
}
.list-group-item-small {
  font: normal normal bold 14px/30px Raleway;
  line-height: 100% !important;
  letter-spacing: 0px;
  color: #707070;
  opacity: 1;
  font-size: 11px;
}
.list-group-item {
  line-height: 100% !important;
  font: normal normal bold 14px/30px Raleway;
  letter-spacing: 0px;
  color: #5c5e8b;
  opacity: 1;
}
.list-group {
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #0000000a;
  border-radius: 10px;
  opacity: 1;
}
.list-item p {
  margin: 4px 0 0 4px;
}

.col-md-6-custom{
    transform: translate(-10px, -100px) scale(0.7);
}



@media screen and (max-width: 480px) {
  .card {
    width: 100% !important;
  }
}

@media (min-width:961px)  {
    .progresses{
        position: relative;
    max-width: 50%;
    margin: auto;
    transform: translateX(-250px);
    }
    .col-md-6-custom{
    transform: translate(-10px, -20px) scale(0.8,0.9);
}
}
@media (min-width:1025px) { /* big landscape tablets, laptops, and desktops */ }
@media (min-width:1281px) { /* hi-res laptops and desktops */ }
</style>
