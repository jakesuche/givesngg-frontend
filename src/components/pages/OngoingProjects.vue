<template>
  <div class="container">
    <div class="row">
      <div class="col-md-7">
        <div class="row row-cols-2" style="width:125%;">
          <!-- coloumn start -->
          <div class="col column-card" ref="card-col">
            <div class="card mb-3">
              <section>
                <section
                  class="container-custome"
                  style="float:left;display:flex"
                >
                  <!-- <i class="fas 7x fa-user-circle" style="font-size:60px" ></i> -->
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 38 38"
                  >
                    <g
                      id="Group_33"
                      data-name="Group 33"
                      transform="translate(-1312.431 -672.431)"
                    >
                      <g id="Avatar" transform="translate(1311.938 671.938)">
                        <circle
                          id="Ellipse_40"
                          data-name="Ellipse 40"
                          cx="19"
                          cy="19"
                          r="19"
                          transform="translate(0.494 0.494)"
                          fill="rgba(92,94,139,0.33)"
                        />
                        <path
                          id="Union_12"
                          data-name="Union 12"
                          d="M0,19V16.625c0-2.612,4.275-4.75,9.5-4.75s9.5,2.138,9.5,4.75V19ZM4.75,4.75A4.75,4.75,0,1,1,9.5,9.5,4.75,4.75,0,0,1,4.75,4.75Z"
                          transform="translate(10.494 10.494)"
                          fill="#5c5e8b"
                        />
                      </g>
                    </g>
                  </svg>
                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                  <p class="name-tag" style="margin-top:10px;margin-left:7px">
                    James Doe <br />
                    <span class="time-ago"> 2 days ago </span>
                  </p>
                </section>
              </section>
              <h6 class="header">Help John get fly for his scholarship</h6>
              <p class="card-text card-text1">
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim Culpa qui officia des
                voluptatem. Culpa qui officia deserunt
              </p>
              <img :src="guyWriting" class="card-img-top" alt="a guy writing" />
              <div class="card-body">
                <div style="display:flex;">
                  <h5 class="card-title donated-amount">Donated-$22,083</h5>
                  <p class="card-title p ">Donated-$22,083</p>
                </div>
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
                <p class="card-text">
                  <small class="text-muted">902 donations</small>
                </p>
              </div>
              <div class="card-footer">
                <div class="btn-group1" role="group" aria-label="Basic example">
                  <button class="btn btn-primary">
                    <span class=""></span>
                    <object :data="upload" type=""></object> Update Gallery
                  </button>

                  <button style="margin-left:20%;" class="btn btn-primary">
                    <span class=""></span>
                    <object :data="shareIcon" type=""></object> Share
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="col column-card" ref="card-col">
            <div class="card mb-3">
              <section>
                <section
                  class="container-custome"
                  style="float:left;display:flex"
                >
                  <!-- <i class="fas 7x fa-user-circle" style="font-size:60px" ></i> -->
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 38 38"
                  >
                    <g
                      id="Group_33"
                      data-name="Group 33"
                      transform="translate(-1312.431 -672.431)"
                    >
                      <g id="Avatar" transform="translate(1311.938 671.938)">
                        <circle
                          id="Ellipse_40"
                          data-name="Ellipse 40"
                          cx="19"
                          cy="19"
                          r="19"
                          transform="translate(0.494 0.494)"
                          fill="rgba(92,94,139,0.33)"
                        />
                        <path
                          id="Union_12"
                          data-name="Union 12"
                          d="M0,19V16.625c0-2.612,4.275-4.75,9.5-4.75s9.5,2.138,9.5,4.75V19ZM4.75,4.75A4.75,4.75,0,1,1,9.5,9.5,4.75,4.75,0,0,1,4.75,4.75Z"
                          transform="translate(10.494 10.494)"
                          fill="#5c5e8b"
                        />
                      </g>
                    </g>
                  </svg>
                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                  <p class="name-tag" style="margin-top:10px;margin-left:7px">
                    James Doe <br />
                    <span class="time-ago"> 2 days ago </span>
                  </p>
                </section>
              </section>
              <h6 class="header">Help John get fly for his scholarship</h6>
              <p class="card-text card-text1">
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim Culpa qui officia des
                voluptatem. Culpa qui officia deserunt
              </p>
              <img :src="child1" class="card-img-top" alt="a guy writing" />
              <div class="card-body">
                <div style="display:flex;">
                  <h5 class="card-title donated-amount">Donated-$22,083</h5>
                  <p class="card-title p ">Donated-$22,083</p>
                </div>
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
                <p class="card-text">
                  <small class="text-muted">902 donations</small>
                </p>
              </div>
              <div class="card-footer">
                <div class="btn-group1" role="group" aria-label="Basic example">
                  <button class="btn btn-primary">
                    <span class=""></span>
                    <object :data="upload" type=""></object> Update Gallery
                  </button>

                  <button style="margin-left:20%;" class="btn btn-primary">
                    <span class=""></span>
                    <object :data="shareIcon" type=""></object> Share
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="col column-card">
            <div class="card mb-3">
              <section>
                <section
                  class="container-custome"
                  style="float:left;display:flex"
                >
                  <!-- <i class="fas 7x fa-user-circle" style="font-size:60px" ></i> -->
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 38 38"
                  >
                    <g
                      id="Group_33"
                      data-name="Group 33"
                      transform="translate(-1312.431 -672.431)"
                    >
                      <g id="Avatar" transform="translate(1311.938 671.938)">
                        <circle
                          id="Ellipse_40"
                          data-name="Ellipse 40"
                          cx="19"
                          cy="19"
                          r="19"
                          transform="translate(0.494 0.494)"
                          fill="rgba(92,94,139,0.33)"
                        />
                        <path
                          id="Union_12"
                          data-name="Union 12"
                          d="M0,19V16.625c0-2.612,4.275-4.75,9.5-4.75s9.5,2.138,9.5,4.75V19ZM4.75,4.75A4.75,4.75,0,1,1,9.5,9.5,4.75,4.75,0,0,1,4.75,4.75Z"
                          transform="translate(10.494 10.494)"
                          fill="#5c5e8b"
                        />
                      </g>
                    </g>
                  </svg>
                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                  <p class="name-tag" style="margin-top:10px;margin-left:7px">
                    James Doe <br />
                    <span class="time-ago"> 2 days ago </span>
                  </p>
                </section>
              </section>
              <h6 class="header">Help John get fly for his scholarship</h6>
              <p class="card-text card-text1">
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim Culpa qui officia des
                voluptatem. Culpa qui officia deserunt
              </p>
              <img
                :src="childDrinking"
                class="card-img-top"
                alt="a guy writing"
              />
              <div class="card-body">
                <div style="display:flex;">
                  <h5 class="card-title donated-amount">Donated-$22,083</h5>
                  <p class="card-title p ">Donated-$22,083</p>
                </div>
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
                <p class="card-text">
                  <small class="text-muted">902 donations</small>
                </p>
              </div>
              <div class="card-footer">
                <div class="btn-group1" role="group" aria-label="Basic example">
                  <button class="btn btn-primary">
                    <span class=""></span>
                    <object :data="upload" type=""></object> Update Gallery
                  </button>

                  <button style="margin-left:20%;" class="btn btn-primary">
                    <span class=""></span>
                    <object :data="shareIcon" type=""></object> Share
                  </button>
                </div>
              </div>
            </div>
          </div>

          <!-- column end -->

          <!-- column end -->
        </div>
      </div>

      <div class="col-md-1"></div>
      <div class="col-md-4" ref="class-of-4">
        <div class="row mb-3">
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
                  <h6 >
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
          <div class="col" id="approved-project" >
            Approved project
          </div>
        </div>
        <div class="row mb-3">
           <br>
          <div class="col"><hr /></div>
          <div class="col-auto"><span style="letter-spacing: 0px;
color: #707070;
opacity: 1;" >Sort by:</span><span style="letter-spacing: 0px;
color: #707070;
opacity: 1;">Newest</span></div>
          
      
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
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import guyWriting from "@/assets/images/guyWriting.jpg";
import childDrinking from "@/assets/images/childDrinking.jpg";
import child1 from "@/assets/images/child1.jpg";
import userIcon from "@/assets/images/userIcon.png";
import icon_add_user from "@/assets/images/icon_add-user.svg";
import playButton from "@/assets/svg/playbutton.svg";
import usericon from "@/assets/svg/userIcon.svg";
import uploadIcon from "@/assets/svg/uploadIcon.svg";
import shareIcon from "@/assets/svg/share.svg";
import upload from "@/assets/svg/upload.svg";
import { col4md, createBtn } from "@/animate"
export default {
  data() {
    return {
      guyWriting,
      child1,
      childDrinking,
      userIcon,
      icon_add_user,
      playButton,
      usericon,
      uploadIcon,
      shareIcon,
      upload,
    };
  },
  mounted(){
    
    var elements = document.querySelectorAll('.column-card');
    console.log(elements)
    col4md(this.$refs['class-of-4'])
    createBtn(elements)
    
  }
};
</script>

<style scoped>

#approved-project{
 
text-align: left;
font: normal normal bold 20px/30px Raleway;
letter-spacing: 0px;
color: #5C5E8B;
opacity: 1;
}
.btn-block{
  top: 243px;
left: 1354px;
width: 100%;
height: 44px;
background: #FFFFFF 0% 0% no-repeat padding-box;
box-shadow: 0px 3px 6px #0000000A;
border-radius: 10px;
opacity: 1;
color: #5C5E8B;
}
h6{
  width: 113px;
height: 16px;
text-align: left;
font: normal normal normal 14px/12px Raleway;
letter-spacing: 0px;
color: #5C5E8B;
opacity: 1;
}
.price-wallet{
  height:70px;
  background:none;
 width: 150px;
height: 67px;
background: #FFFFFF 0% 0% no-repeat padding-box;
box-shadow: 0px 2px 6px #0000000A;
border-radius: 10px;
opacity: 1;
 
}
.price-wallet:first-child{
    margin-right:30px
}

.price{

height: 24px;
text-align: center;
font: normal normal bold 20px/24px Raleway;
letter-spacing: 0px;
color: #0AAE0F;
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

.p {
  top: 620px;
  left: 5650px;
  width: 100px;
  height: 11px;
  margin-left: 40%;
  font: normal normal bold 12px/30px Raleway;
  letter-spacing: 0px;
  color: #5c5e8b;
  opacity: 1;
}
small {
  float: left;
}

.card-body {
  padding-bottom: 1.25rem;
  padding-left: 0.9rem;
  padding-right: 1.25rem;
}
.card-text1 {
  font-size: 11px;
  width: 340px;
  height: 18px;
  padding-bottom: 10px;
  overflow: hidden;
  position: relative;
  display: inline-block;
  margin: 0 5px 0 5px;
  text-align: left;
  text-decoration: none;
  text-overflow: ellipsis;
  white-space: nowrap;

  text-align: left;
  letter-spacing: 0px;
  opacity: 1;
}
.card-footer {
  background: none;
}

.container-custome {
  width: 80%;
  padding-right: 15px;
  padding-left: 15px;
  padding-top: 5px;
  padding-bottom: 0px;
  margin-right: auto;
  margin-left: 0px;
}

.card-footer button {
  background: none;
  border-style: none;
  border: none;
  border-radius: 30px;
  color: #5c5e8b;
}
.header {
  top: 292px;

  left: 152px;
  padding-left: 5px;
  width: 299px;
  height: 19px;
  text-align: left;
  font: normal normal bold 16px/30px Raleway;
  letter-spacing: 0px;
  color: #5c5e8b;
  opacity: 1;
}

.name-tag {
  top: 259px;
  left: 179px;
  width: 52px;
  height: 11px;
  text-align: center;
  font: normal normal bold 10px/10px Raleway;
  letter-spacing: 0px;
  color: #707070;
  opacity: 1;
}

.time-ago {
  top: 273px;
  left: 179px;
  width: 120px;
  height: 11px;
  text-align: center;
  font: normal normal normal 10px/10px Raleway;
  letter-spacing: 0px;
  color: #707070;
  opacity: 1;
}

.card {
  width: 100%;
  height: 450px;
  background: #ffffff 0% 0% no-repeat padding-box;
  border-radius: 20px;
  opacity: 1;
  border: none;
  border-radius: 17px;
}

/* .progress {
    display: flex;
    height: 1rem;
    overflow: hidden;
    line-height: 0;
    font-size: .75rem;
    background-color: #e9ecef;
    border-radius: .25rem;
    border-radius: 40px !important;
    width: 94%;
} */
.progress {
  width: 100%;
  height: 7px;
  background: #7070707a 0% 0% no-repeat padding-box;
  border-radius: 8px;
  opacity: 1;
}

.progress-bar {
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  color: #fff;
  text-align: center;
  white-space: nowrap;
  background: #5c5e8b !important;
  transition: width 0.6s ease;
  border-radius: 40px;
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
</style>
