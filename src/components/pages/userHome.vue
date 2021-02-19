<template>
  <div ref="container" class="container container-custom">
    <div class="row">
      <!-- col of  2 first -->
      <div class="col-md-2 col-md-2-custom">
        <div class=" " style="border-radius:30px">
          <ul class="list-group" style="border-radius:17px">
            <li class="list-group-item">Popuplar Tags</li>
            <li class="list-group-item"># Female empowerment</li>
            <li class="list-group-item"># Ophan</li>
            <li class="list-group-item"># School</li>
            <li class="list-group-item"># Hospital</li>
            <li class="list-group-item"># Education</li>
            <li class="list-group-item"># Contruction</li>
            <li class="list-group-item ">
              Discover more <span><i class="fas fa-angle-down"></i></span>
            </li>
          </ul>
        </div>
      </div>



      <!-- col of 8  -->
      <div class="col-md-8 col-sm-12 col-md-8-custom">
        <div class="row first-row-item">
          <div class="card mb-3">
            <!-- <div class="card-header">
              <small>
                John Doe and two other connection donated
              </small>
            </div> -->

            <div class="card-body">
              <div class="mb-3">
                <i class="far fa-edit"></i>
                <input
                  type="email"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Start a project"
                />
              </div>
            </div>

            <div class="row">
              <div class="col-md-4 icon-bottom">
                <i class="fas fa-image"></i>
                <span style="margin-left:14px">Photo</span>
              </div>
              <div class="col-md-4 icon-bottom">
                <img :src="playButton" alt=""> Video
              </div>
              <div class="col-md-4 icon-bottom">
                <i class="fas fa-file"></i> File
              </div>
            </div>
          </div>
        </div>
        <!-- mobile row first -->
         <div class="row mb-3 first-row-item-mobile justify-content-around" style="margin-top:-40px">
          <div class="col-xs-6">
            <button class="btn btn-secondary">
              <img src="@/assets/svg/upload.svg" alt="" srcset="">
              Create new project
            </button>
          </div>
          <div class="col-xs-6">
              <button class="btn btn-secondary btn-2" style="width:120px">
              $50
            </button>
          </div>
        </div>
        <!-- mobile row end -->
        <div class="row">
          <div class="card mb-3">
            <div class="card-header">
              <small>
                John Doe and two other connection donated
              </small>
            </div>
            <section>
              <section
                class="container-custome"
                style="float:left;display:flex"
              >
                <!-- <i class="fas 7x fa-user-circle" style="font-size:60px" ></i> -->
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="58"
                  height="65"
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
                <p style="margin-top:10px;margin-left:7px">
                  James Doe <br />
                  <span class="time-ago"> 2 days ago </span>
                </p>
              </section>
              <small class="small-text">
                <h6 style="color:#5C5E8B">
                  Help John get fly for his scholarship
                </h6>
                <p class="long-text">
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim Culpa qui officia des
                voluptatem. Culpa qui officia deserunt mollit anim id est
                laborum. Sed ut perspiciatis unde omnis iste natus error sit vol
                ... See more
                </p>
                <br>
                See more
              </small>
            </section>
            <img :src="guyWriting" class="card-img-top" alt="a guy writing" />
            <div class="card-body">
              <div style="display:flex;">
                <h5 class="card-title">Donated-$22,083</h5>
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
              <div class="btn-group1 row justify-content-around" role="group" aria-label="Basic example">
                <button type="button" class="btn btn-primary btn-footer">
                  <span class="text-in-btn"> <img src="@/assets/images/donate.png" alt=""> Donate</span>
                </button>
                <button type="button" class="btn btn-primary btn-footer">
                  <span class="text-in-btn"> <img src="@/assets/images/share.png" alt=""> Share</span>
                </button>
                <button type="button" class="btn btn-primary btn-footer">
                  <span class="text-in-btn">  <img src="@/assets/images/retweet-arrows-symbol.png" alt=""> Repost</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="card mb-3">
            <div class="card-header">
              <small>
                John Doe and two other connection donated
              </small>
            </div>
            <section>
              <section
                class="container-custome"
                style="float:left;display:flex"
              >
                <!-- <i class="fas 7x fa-user-circle" style="font-size:60px" ></i> -->
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="58"
                  height="65"
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
                <p style="margin-top:10px;margin-left:7px">
                  James Doe <br />
                  <span class="time-ago"> 2 days ago </span>
                </p>
              </section>
              <small class="small-text">
                <h6>Help John get fly for his scholarship</h6>
                <p class="long-text">
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim Culpa qui officia des
                voluptatem. Culpa qui officia deserunt mollit anim id est
                laborum. Sed ut perspiciatis unde omnis iste natus error sit vol
                ... See more
                </p>
                <br>
                See more
              </small>
            </section>
            <img :src="child1" class="card-img-top" alt="child1" />
            <div class="card-body">
              <div style="display:flex;">
                <h5 class="card-title">Donated-$22,083</h5>
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
               <button type="button" class="btn btn-primary btn-footer">
                  <span class="text-in-btn"> <img src="@/assets/images/donate.png" alt=""> Donate</span>
                </button>
                <button type="button" class="btn btn-primary btn-footer">
                  <span class="text-in-btn"> <img src="@/assets/images/share.png" alt=""> Share</span>
                </button>
                <button type="button" class="btn btn-primary btn-footer">
                  <span class="text-in-btn">  <img src="@/assets/images/retweet-arrows-symbol.png" alt=""> Repost</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="card mb-3">
            <div class="card-header">
              <small>
                John Doe and two other connection donated
              </small>
            </div>
            <section>
              <section
                class="container-custome"
                style="float:left;display:flex"
              >
                <!-- <i class="fas 7x fa-user-circle" style="font-size:60px" ></i> -->
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="58"
                  height="65"
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
                <p style="margin-top:10px;margin-left:7px">
                  James Doe <br />
                  <span class="time-ago"> 2 days ago </span>
                </p>
              </section>
              <small class="small-text">
                <h6>Help John get fly for his scholarship</h6>
                <p class="long-text">
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim Culpa qui officia des
                voluptatem. Culpa qui officia deserunt mollit anim id est
                laborum. Sed ut perspiciatis unde omnis iste natus error sit vol
                ... 
                </p>
                <br>
                See more
              </small>
            </section>
            <img :src="childDrinking" class="card-img-top" alt="..." />
            <div class="card-body">
              <div style="display:flex;">
                <h5 class="card-title">Donated-$22,083</h5>
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
                <button type="button" class="btn btn-primary btn-footer">
                  <span class="text-in-btn"> <img src="@/assets/images/donate.png" alt=""> Donate</span>
                </button>
                <button type="button" class="btn btn-primary btn-footer">
                  <span class="text-in-btn"> <img src="@/assets/images/share.png" alt=""> Share</span>
                </button>
                <button type="button" class="btn btn-primary btn-footer">
                  <span class="text-in-btn">  <img src="@/assets/images/retweet-arrows-symbol.png" alt=""> Repost</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="row mb-3">
          <!-- clear space for downn -->
        </div>
        <br>
        <br>

      </div>





<!-- col of 2 -->
<!-- this will show display none on mobile -->
      <div class="col-md-2 col-md-2-custom">
        <div class="row mb-3" style="border-radius:30px">
          <ul class="list-group list-group2" style="border-radius:20px">
            <li class="list-group-item list-group-item1 ">Ongoing projects</li>
            <li class="list-group-item list-group-item1">
              Help rural schools get book
            </li>
            <li class="list-group-item list-group-item1">
              Food for the orphanage
            </li>
            <li class="list-group-item list-group-item1">
              Help Martins battle cancer
            </li>
            <li class="list-group-item list-group-item1">
              Help Florence keep her home
            </li>
            <li class="list-group-item list-group-item1">
              Help rural schools get books
            </li>
            <li class="list-group-item  list-group-item1">
              Discover more <span><i class="fas fa-angle-down"></i></span>
            </li>
          </ul>
        </div>
        <div class="row mb-3" style="border-radius:30px">
          <ul class="list-group list-group2" style="border-radius:20px">
            <li class="list-group-item list-group-item1 ">Gallery</li>
            <li class="list-group-item list-group-item1"></li>
            <li class="list-group-item list-group-item1"></li>
            <li class="list-group-item list-group-item1"></li>
            <li class="list-group-item list-group-item1"></li>
            <li class="list-group-item list-group-item1"></li>
            <li class="list-group-item  list-group-item1">
              Discover more <span><i class="fas fa-angle-down"></i></span>
            </li>
          </ul>
        </div>
        <div class="row mb-3" style="border-radius:30px">
          <ul class="list-group list-group2" style="border-radius:20px">
            <li class="list-group-item list-group-item1 ">Connections</li>
            <li class="list-group-item list-group-item1 list-group-item3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="38"
                height="38"
                viewBox="0 0 38 38"
              >
                <g
                  id="Group_107"
                  data-name="Group 107"
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
              Ebose Alilenotor
              
             <img class="svg-img" src="@/assets/images/icon_add-user.svg" alt="" srcset="">

            </li>
            <li class="list-group-item list-group-item1 list-group-item3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="38"
                height="38"
                viewBox="0 0 38 38"
              >
                <g
                  id="Group_107"
                  data-name="Group 107"
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
              Emmnuella Chidimma
              <img class="svg-img" src="@/assets/images/icon_add-user.svg" alt="" srcset="">
            </li>
            <li class="list-group-item list-group-item1 list-group-item3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="38"
                height="38"
                viewBox="0 0 38 38"
              >
                <g
                  id="Group_107"
                  data-name="Group 107"
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
              Akindele Ogutuga
               <img class="svg-img" src="@/assets/images/icon_add-user.svg" alt="" srcset="">
            </li>
            <li class="list-group-item list-group-item1 list-group-item3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="38"
                height="38"
                viewBox="0 0 38 38"
              >
                <g
                  id="Group_107"
                  data-name="Group 107"
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
              Onyishi ifeanyi
               <img class="svg-img" src="@/assets/images/icon_add-user.svg" alt="" srcset="">
            </li>
            <li class="list-group-item list-group-item1 list-group-item3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="38"
                height="38"
                viewBox="0 0 38 38"
              >
                <g
                  id="Group_107"
                  data-name="Group 107"
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
              </svg>Vivian Chinenye
              <img class="svg-img" src="@/assets/images/icon_add-user.svg" alt="" srcset="">
              
            </li>
            <li class="list-group-item  list-group-item1">
              Discover more <span><i class="fas fa-angle-down"></i></span>
            </li>
          </ul>
        </div>
        <!-- <div>
          <ul :style="{ backgroundImage: `url(${childDrinking})` }">
            <li>
              jsjsjsjjdjd
            </li>
          </ul>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
import guyWriting from "@/assets/images/guyWriting.jpg";
import childDrinking from "@/assets/images/childDrinking.jpg";
import child1 from "@/assets/images/child1.jpg";
import userIcon from "@/assets/images/userIcon.png";
import icon_add_user from "@/assets/images/icon_add-user.svg"
import playButton from "@/assets/svg/playbutton.svg";

export default {

  data() {
    return {
      guyWriting,
      child1,
      childDrinking,
      userIcon,
      icon_add_user,
      playButton
    };
  },
  created(){
    this.emit()
  },
  methods:{
    emit(){
      this.$emit('ref', this.$refs.container)
    }
  },
 
};
</script>

<style scoped>
small {
  float: left;
}
.card-header {
  background: none !important;
}
.card {
  border-radius: 15px;
}
.small-text {
  text-align: left;
  padding: 0 12px 3px 12px;
}
.container-custome {
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  padding-top: 15px;
  padding-bottom: 15px;
  margin-right: auto;
  margin-left: 40px;
}
h6 {
  top: 438px;
  left: 476px;
  width: 360px;
  height: 23px;
  text-align: left;
  font: normal normal bold 20px/30px Raleway;
  letter-spacing: 0px;
  color: #5c5e8b;
  opacity: 1;
}
.time-ago {
  top: 406px;
  left: 569px;
  width: 70px;
  height: 16px;
  text-align: center;
  font: normal normal normal 14px/24px Raleway;
  letter-spacing: 0px;
  color: #707070;
  opacity: 1;
  margin-right: 8px;
}
.mb-3,
.my-3 {
  margin-bottom: 1rem !important;
  width: 100%;
}
.form-control {
  border-radius: 2.25rem !important;
}
.fas {
  top: 281px;
  left: 558px;
  width: 20px;
  height: 13px;
  font-size: 25px;
  opacity: 0.7;
}
.icon-bottom {
  margin-bottom: 10px;
}
/* // icon btn inside the input */
.far {
  position: relative;
  top: 0;

  right: 290px;
  z-index: 2;
  border: none;
  top: 40px;
  height: 30px;
  cursor: pointer;
}
input::placeholder {
  position: relative;
  left: 70px;
}
.card-body .p {
  margin-left: 70%;
}
.card-title {
  top: 2011px;
  left: 474px;
  width: 169px;
  height: 17px;
  text-align: left;
  font: normal normal bold 14px/30px Raleway;
  letter-spacing: 0px;
  color: #707070;
  opacity: 1;
}
.progress-bar {
  background: #5c5e8b !important;
  border-radius: 40px;
}
.progress {
  border-radius: 40px !important;
  width: 94%;
}

.btn-footer {
  margin: 0px 30px 0px 30px;

  padding: 0px 30px 0px 30px;
  background: none;
  width: 107px;
  height: 27px;
  border: 1px solid #5c5e8b;
  border-radius: 14px;
  opacity: 0.7;
}
.btn-group1 {
  float: left;
}

.text-in-btn {
  top: 2107px;
  left: 700px;
  width: 37px;
  height: 13px;
  text-align: left;
  font: normal normal normal 14px/30px Raleway;
  letter-spacing: 0px;
  color: #5c5e8b;
  opacity: 0.8;
}

.card-footer {
  background: none;
}

/* design for col */
.col-md-8-custom {
  position: relative;
  width: 100%;
  padding-right: 53px !important;
  padding-left: 52px !important;
}
.col-md-2-custom {
  position: relative;
  width: 100%;
  padding-right: 0px !important;
  padding-left: 0px !important;
}
.container-custom {
  padding: 0px 0px 0px 0px !important;
}
/* @media (min-width: 1200px){

.container, .container-lg, .container-md, .container-sm, .container-xl {
    max-width: 1500px;
}
} */

/* @media (min-width:1200px) {
  .container{
    max-width: 1400px;
    padding: 0px 30px 0px 80px;
  }
  
} */
.list-group-item {
  text-align: left;

  width: 192px;
  /* height: 16px; */
  border: none;
  font-size: 11px;
  padding-right: 32px;
  color: #707070;
  opacity: 1;
  line-height: 70%;
}
.list-group-item1{
  line-height: 50%;
}
.list-group-item3{
      padding-top: 0px;
    padding-bottom: 22px;
    font: normal normal bold 20px/10px Raleway;
letter-spacing: 0px;
color: #707070;
opacity: 1;
/* width: 152px; */
height: 40px;
font-size:12px
}
.list-group-item:first-child {
  /* width: 122px;
height: 24px; */
  text-align: left;
  font: normal normal bold 20px/24px Raleway;
  letter-spacing: 0px;
  color: #4f3b3b;
  opacity: 1;
  font-size: 16px;
  padding-top: 28px;
}
.list-group-item:last-child {
  padding-bottom: 38px;

  /* width: 100px; */
  height: 16px;
  text-align: center;
  font: normal normal bold 14px/24px Raleway;
  letter-spacing: 0px;
  color: #707070;
  opacity: 1;
  border-top: 1px solid #7745458c;
}
.list-group {
  box-shadow: -18px 10px 52px -1px rgba(212, 182, 212, 0.43);
}

.list-group-item:last-child .fas {
  font-size: unset !important;
}
.list-group-item1 {
  width: 250px;
}
.list-group-item1:first-child {
  letter-spacing: 0px;
  color: #000000;
  opacity: 1;
}
.list-group-item1:last-child .icon {
  background: none;
}

.list-group2 {
  box-shadow: none;
}

.icon {
  background: url("~@/assets/images/userIcon.png");
  height: 38px;
  width: 38px;
  display: inline-flex;
}
.svg-img{
  float:right;
  top: 1121px;
left: 1724px;
width: 15px;
height: 15px;

opacity: 1;
margin-top: 12px;
  
}


/* mobile responsive ness */

@media  screen  and (max-width:480px){
  .card{
    width:100%!important
  }
}

@media only screen and (max-width: 576px) {
   .col-md-2{
     display:none
   }
   .first-row-item{
     display:none!important
   }
   .first-row-item-mobile .btn{
      
      background: #FFFFFF 0% 0% no-repeat padding-box!important;
box-shadow: 0px 3px 6px #0000000A;
border-radius: 5px;
border:none;
opacity: 1;

font: normal normal bold 14px/30px Raleway;
letter-spacing: 0px;
color: #5C5E8B;
opacity: 1;
    }
    .first-row-item-mobile .btn-2{
      
font: normal normal bold 16px/19px Raleway;
letter-spacing: 0px;
color: #0AAE0F;
opacity: 1;
height: 40px;
    }
    .btn-footer {
    margin: 0px 7px 0px 1px;
    padding: 0px 30px 0px 30px;
    background: none;
    width: 90px;
    height: 27px;
    border:none ;
    border-radius: 14px;
    opacity: 0.7;
    font-size: 9px;
    padding: 0 12px 0 12px;
}
.btn-footer img {
  height:15px
}


.text-in-btn[data-v-8ecad676] {
    top: 2107px;
    left: 700px;
    width: 37px;
    height: 13px;
    text-align: left;
    font: normal normal normal 14px/30px Raleway;
    letter-spacing: 0px;
    color: #5c5e8b;
    opacity: 1;
    font-size: small;
    padding: 0 -119px 0 -128px;
    
}
.progress {
   
    height: 0.4rem;
    
    /* width: 12px; */
}
.card-body .p {
    
    display: none;
}
.long-text{
  font-size: 11px;
    width: 300px;
    height: 18px;
    padding-bottom: 10px;
    overflow: hidden;
    position: relative;
    display: inline-block;
    
    text-align: left;
    text-decoration: none;
    text-overflow: ellipsis;
    white-space: nowrap;
    text-align: left;
    letter-spacing: 0px;
    opacity: 1;
    margin: 0 5px -9px 5px;
}
.row{
  width: 114%;
  margin-left: -24px;
}
/* .card-text1[data-v-3ed1cbca] {
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
} */
    
}


@media only screen and (min-width: 576px) {
    .first-row-item-mobile{
      display:none;
      
    }
}
</style>

