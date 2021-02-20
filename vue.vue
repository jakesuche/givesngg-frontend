<template>
  <div>
    <div class="row justify-content-md-center">
          <h1 class="header">
                login
            </h1>
          
      <div class="form-design">
          <div class="nothing">
              &nbsp;
          </div>
        <form action="">
           
          <div class="form-group">
            <p class="align-left">Email</p>
            <input
              type="email"
              class="form-control input"
              id="email"
              placeholder="Enter email"
              name="email"
            />
          </div>
          <div class="form-group">
            <p class="align-left">password</p>
            <input
              type="password"
              class="form-control input"
              id="pwd"
              placeholder="Enter password"
              name="pswd"
            />
          </div>

          <button class="btn btn-primary" style="width:120%" type="button">
            Button
          </button>
        </form>
        <br>
        <br>
        
        <div class="row">
          <div class="col"><hr /></div>
          <div class="col-auto">or</div>
          <div class="col"><hr /></div>
        </div>
        <br>
        <br>
        <!-- OR -->
        <button class="btn btn-primary facebook-btn" style="width:120%" type="button">
            <span class="is-text-fade">Continue with facebook</span>
          </button>
          <br/>
           <br/>
          <button class="btn btn-primary google-btn" style="width:120%" type="button">
            <span class="is-text-fade">Continue with Google</span>
          </button>

      
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.form-design {
  background: white;
  padding-right: 100px;
  padding-left:60px;
  padding-top:60px;
  padding-bottom: 60px;
  position: absolute;
  top: 100px;
}
.align-left {
  text-align: left;
  letter-spacing: 0px;

  margin-bottom: 0.5rem;
}
.facebook-btn{
     background-color:#1F15A7;
     border-style: none;
     
}
.google-btn{
    background: #EE1616;
    border-style: none;
}
.is-text-fade{
    color:#f7f7f7;
    opacity: 0.9;
}
.input{
    width:120%!important
    
}
.header{
     font-size: 2.5rem;
    position: absolute;
    z-index: 100;
    top: 110px;
}
.nothing{
    border: 1px solid black;
    content:"ddd";
    width:120
}
label{
    margin-bottom:0!important
}
/* .form-label{
    text-align: left!important;;
} */
</style>




<template>
  <div class="container">
    <div class="row">
      <div class="col-md-8 ">
        <div>
          <img :src="maskGoup" class="img-fluid" alt="Responsive image" />
        </div>
      </div>
      <div class="col-md-4">
        <div class="card text-center" id="card">
          <!-- <div class="card-header">
    Featured
  </div> -->
          <div class="card-body">
            <label for="progress"
              >$22,606 <small>donated out of $48,000</small></label
            >
            <div class="progress" style="height: 7px;">
              <div
                class="progress-bar"
                role="progressbar"
                style="width: 25%;"
                aria-valuenow="25"
                aria-valuemin=""
                aria-valuemax="100"
              ></div>
            </div>
            <br />
            <button class="btn btn-primary">Donate</button>
            <div class="row" style="margin-top:20px">
              <div class="col-md-12">
                <button class="btn btn-primary btn-share">
                  <svg
                    id="share"
                    xmlns="http://www.w3.org/2000/svg"
                    width="35.045"
                    height="34.381"
                    viewBox="0 0 35.045 37.381"
                  >
                    <g
                      id="Group_10"
                      data-name="Group 10"
                      transform="translate(0)"
                    >
                      <path
                        id="Path_198"
                        data-name="Path 198"
                        d="M44.474,24.24a6.566,6.566,0,0,0-5.284,2.67L28.876,21.639a6.571,6.571,0,0,0-.214-4.317l10.81-6.495a6.544,6.544,0,1,0-1.124-1.88L27.511,15.458a6.57,6.57,0,1,0,.4,8.149L38.2,28.862a6.571,6.571,0,1,0,6.276-4.623Zm0-22.049a4.381,4.381,0,1,1-4.381,4.381A4.386,4.386,0,0,1,44.474,2.19Zm-21.9,21.976a4.381,4.381,0,1,1,4.381-4.381A4.386,4.386,0,0,1,22.571,24.167Zm21.9,11.025a4.381,4.381,0,1,1,4.381-4.381A4.386,4.386,0,0,1,44.474,35.191Z"
                        transform="translate(-16)"
                        fill="#5c5e8b"
                      />
                    </g>
                  </svg>
                  &nbsp; Share
                </button>
              </div>
              <div class="row" style="margin-top:20px">
                <div class="col-md-12">
                  <ul class="list-group list-group-flush" style="width:120%;">
                    <li class="list-group-item">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="62"
                        height="40"
                        viewBox="0 0 62 62"
                      >
                        <g
                          id="Group_39"
                          data-name="Group 39"
                          transform="translate(-1312.187 -672.187)"
                        >
                          <g id="Avatar" transform="translate(1312 672)">
                            <circle
                              id="Ellipse_40"
                              data-name="Ellipse 40"
                              cx="31"
                              cy="31"
                              r="31"
                              transform="translate(0.187 0.187)"
                              fill="rgba(92,94,139,0.33)"
                            />
                            <path
                              id="Union_12"
                              data-name="Union 12"
                              d="M0,31V27.125c0-4.262,6.975-7.75,15.5-7.75S31,22.862,31,27.125V31ZM7.75,7.75A7.75,7.75,0,1,1,15.5,15.5,7.75,7.75,0,0,1,7.75,7.75Z"
                              transform="translate(16.187 16.187)"
                              fill="#5c5e8b"
                            />
                          </g>
                        </g>
                      </svg>
                      &nbsp; Cras justo odio
                    </li>
                    <li class="list-group-item">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="62"
                        height="40"
                        viewBox="0 0 62 62"
                      >
                        <g
                          id="Group_39"
                          data-name="Group 39"
                          transform="translate(-1312.187 -672.187)"
                        >
                          <g id="Avatar" transform="translate(1312 672)">
                            <circle
                              id="Ellipse_40"
                              data-name="Ellipse 40"
                              cx="31"
                              cy="31"
                              r="31"
                              transform="translate(0.187 0.187)"
                              fill="rgba(92,94,139,0.33)"
                            />
                            <path
                              id="Union_12"
                              data-name="Union 12"
                              d="M0,31V27.125c0-4.262,6.975-7.75,15.5-7.75S31,22.862,31,27.125V31ZM7.75,7.75A7.75,7.75,0,1,1,15.5,15.5,7.75,7.75,0,0,1,7.75,7.75Z"
                              transform="translate(16.187 16.187)"
                              fill="#5c5e8b"
                            />
                          </g>
                        </g></svg
                      >Dapibus ac facilisis in
                    </li>
                    <li class="list-group-item">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="62"
                        height="40"
                        viewBox="0 0 62 62"
                      >
                        <g
                          id="Group_39"
                          data-name="Group 39"
                          transform="translate(-1312.187 -672.187)"
                        >
                          <g id="Avatar" transform="translate(1312 672)">
                            <circle
                              id="Ellipse_40"
                              data-name="Ellipse 40"
                              cx="31"
                              cy="31"
                              r="31"
                              transform="translate(0.187 0.187)"
                              fill="rgba(92,94,139,0.33)"
                            />
                            <path
                              id="Union_12"
                              data-name="Union 12"
                              d="M0,31V27.125c0-4.262,6.975-7.75,15.5-7.75S31,22.862,31,27.125V31ZM7.75,7.75A7.75,7.75,0,1,1,15.5,15.5,7.75,7.75,0,0,1,7.75,7.75Z"
                              transform="translate(16.187 16.187)"
                              fill="#5c5e8b"
                            />
                          </g>
                        </g></svg
                      >Morbi leo risus
                    </li>
                    <li class="list-group-item">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="62"
                        height="40"
                        viewBox="0 0 62 62"
                      >
                        <g
                          id="Group_39"
                          data-name="Group 39"
                          transform="translate(-1312.187 -672.187)"
                        >
                          <g id="Avatar" transform="translate(1312 672)">
                            <circle
                              id="Ellipse_40"
                              data-name="Ellipse 40"
                              cx="31"
                              cy="31"
                              r="31"
                              transform="translate(0.187 0.187)"
                              fill="rgba(92,94,139,0.33)"
                            />
                            <path
                              id="Union_12"
                              data-name="Union 12"
                              d="M0,31V27.125c0-4.262,6.975-7.75,15.5-7.75S31,22.862,31,27.125V31ZM7.75,7.75A7.75,7.75,0,1,1,15.5,15.5,7.75,7.75,0,0,1,7.75,7.75Z"
                              transform="translate(16.187 16.187)"
                              fill="#5c5e8b"
                            />
                          </g>
                        </g></svg
                      >Porta ac consectetur ac
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row" style="margin-top:30px">
      <div class="col-md-8">
        <p class="paragraph">
          Culpa qui officia deserunt mollit anim id est laborum. Sed ut
          perspiciatis unde omnis iste natus error sit voluptartem accusantium
          doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
          inventore veritatis et quasi ropeior architecto beatae vitae dicta
          sunt explicabo. Nemo eniem ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
          eosep quiklop ratione voluptatem sequi nesciunt. Neque porro quisquam
          est, quepi dolorem ipsum quia dolor srit amet, consectetur adipisci
          velit, seid quia non numquam eiuris modi tempora incidunt ut labore et
          dolore magnam aliquam quaerat iope voluptatem. Lorem ipsum dolor sit
          amet, consectetur adipisifwcing elit, sed do eiusmod tempor incididunt
          ut labore et dolore roipi magna aliqua. Ut enim ad minim veeniam, quis
          nostruklad exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in tufpoy voluptate
          velit esse cillum dolore eu fugiat nulla parieratur. Excepteur sint
          occaecat cupidatat. Culpa qui officia deserunt mollit anim id est
          laborum. Sed ut perspiciatis unde omnis iste natus error sit
          voluptartem accusantium doloremque laudantium, totam rem aperiam,
          eaque ipsa quae ab illo inventore veritatis et quasi ropeior
          architecto beatae vitae dicta sunt explicabo. Nemo eniem ipsam
          voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
          consequuntur magni dolores eosep quiklop ratione voluptatem sequi
          nesciunt. Neque porro quisquam est, quepi dolorem ipsum quia dolor
          srit amet, consectetur adipisci velit, seid quia non numquam eiuris
          modi tempora incidunt ut labore et dolore magnam aliquam quaerat iope
          voluptatem. Lorem ipsum dolor sit amet, consectetur adipisifwcing
          elit, sed do eiusmod tempor incididunt ut labore et dolore roipi magna
          aliqua. Ut enim ad minim veeniam, quis nostruklad exercitation ullamco
          laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
          in reprehenderit in tufpoy voluptate velit esse cillum dolore eu
          fugiat nulla parieratur. Excepteur sint occaecat cupidatat.
        </p>

        <botton class="btn btn-custome ">
            View progress
        </botton>
      </div>
      <div class="col-md-4">
           <div class="card text-center" id="card">
          <!-- <div class="card-header">
    Featured
  </div> -->
          <div class="card-body">
           
            
            
            <br />
            
            
              <div class="row" style="margin-top:20px;width:45vh" >
                <div class="col-md-12">
                  <ul class="list-group list-group-flush" style="width:120%;">
                    <li class="list-group-item">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="62"
                        height="40"
                        viewBox="0 0 62 62"
                      >
                        <g
                          id="Group_39"
                          data-name="Group 39"
                          transform="translate(-1312.187 -672.187)"
                        >
                          <g id="Avatar" transform="translate(1312 672)">
                            <circle
                              id="Ellipse_40"
                              data-name="Ellipse 40"
                              cx="31"
                              cy="31"
                              r="31"
                              transform="translate(0.187 0.187)"
                              fill="rgba(92,94,139,0.33)"
                            />
                            <path
                              id="Union_12"
                              data-name="Union 12"
                              d="M0,31V27.125c0-4.262,6.975-7.75,15.5-7.75S31,22.862,31,27.125V31ZM7.75,7.75A7.75,7.75,0,1,1,15.5,15.5,7.75,7.75,0,0,1,7.75,7.75Z"
                              transform="translate(16.187 16.187)"
                              fill="#5c5e8b"
                            />
                          </g>
                        </g>
                      </svg>
                      &nbsp; Cras justo odio
                    </li>
                    <li class="list-group-item">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="62"
                        height="40"
                        viewBox="0 0 62 62"
                      >
                        <g
                          id="Group_39"
                          data-name="Group 39"
                          transform="translate(-1312.187 -672.187)"
                        >
                          <g id="Avatar" transform="translate(1312 672)">
                            <circle
                              id="Ellipse_40"
                              data-name="Ellipse 40"
                              cx="31"
                              cy="31"
                              r="31"
                              transform="translate(0.187 0.187)"
                              fill="rgba(92,94,139,0.33)"
                            />
                            <path
                              id="Union_12"
                              data-name="Union 12"
                              d="M0,31V27.125c0-4.262,6.975-7.75,15.5-7.75S31,22.862,31,27.125V31ZM7.75,7.75A7.75,7.75,0,1,1,15.5,15.5,7.75,7.75,0,0,1,7.75,7.75Z"
                              transform="translate(16.187 16.187)"
                              fill="#5c5e8b"
                            />
                          </g>
                        </g></svg
                      >Dapibus ac facilisis in
                    </li>
                    <li class="list-group-item">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="62"
                        height="40"
                        viewBox="0 0 62 62"
                      >
                        <g
                          id="Group_39"
                          data-name="Group 39"
                          transform="translate(-1312.187 -672.187)"
                        >
                          <g id="Avatar" transform="translate(1312 672)">
                            <circle
                              id="Ellipse_40"
                              data-name="Ellipse 40"
                              cx="31"
                              cy="31"
                              r="31"
                              transform="translate(0.187 0.187)"
                              fill="rgba(92,94,139,0.33)"
                            />
                            <path
                              id="Union_12"
                              data-name="Union 12"
                              d="M0,31V27.125c0-4.262,6.975-7.75,15.5-7.75S31,22.862,31,27.125V31ZM7.75,7.75A7.75,7.75,0,1,1,15.5,15.5,7.75,7.75,0,0,1,7.75,7.75Z"
                              transform="translate(16.187 16.187)"
                              fill="#5c5e8b"
                            />
                          </g>
                        </g></svg
                      >Morbi leo risus
                    </li>
                    <li class="list-group-item">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="62"
                        height="40"
                        viewBox="0 0 62 62"
                      >
                        <g
                          id="Group_39"
                          data-name="Group 39"
                          transform="translate(-1312.187 -672.187)"
                        >
                          <g id="Avatar" transform="translate(1312 672)">
                            <circle
                              id="Ellipse_40"
                              data-name="Ellipse 40"
                              cx="31"
                              cy="31"
                              r="31"
                              transform="translate(0.187 0.187)"
                              fill="rgba(92,94,139,0.33)"
                            />
                            <path
                              id="Union_12"
                              data-name="Union 12"
                              d="M0,31V27.125c0-4.262,6.975-7.75,15.5-7.75S31,22.862,31,27.125V31ZM7.75,7.75A7.75,7.75,0,1,1,15.5,15.5,7.75,7.75,0,0,1,7.75,7.75Z"
                              transform="translate(16.187 16.187)"
                              fill="#5c5e8b"
                            />
                          </g>
                        </g></svg
                      >Porta ac consectetur ac
                    </li>
                  </ul>
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import maskGoup from "@/assets/images/child1.jpg";
export default {
  data() {
    return {
      maskGoup,
    };
  },
};
</script>

<style scoped>
img {
  top: 308px;
  left: 140px;
  width: 995px;
  max-height: 500px;
  opacity: 1;
  padding-right: 40px;
}
#card {
  max-width: 700px;
  height: 500px;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #00000029;
  opacity: 1;
  border-style: none;
  border-radius: 10px;
}

button {
  border-radius: 44px;
  background: #5c5e8b;
  width: 90%;
  border: none;
  box-shadow: 0px 3px 6px #00000029;
}
button:hover {
  background: #5c5e8b !important ;
}
.progress-bar {
  background: #5c5e8b !important ;
}
label {
  margin-right: 110px;
}

.btn-share {
  width: 100%;
  height: 63px;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 50px;
  opacity: 1;
  color: #5c5e8b !important;
  font-size: 20px;
  font-weight: bold;
}
.list-group-item {
  text-align: left;
}
.paragraph{
width: 100%;
height: 506px;
text-align: left;
font: normal normal normal 16px/24px Raleway;
letter-spacing: 0px;
color: #000000;
opacity: 1;
justify-content:center
}
.btn-custome{
    width: 276px;
/* height: 55px; */
background: #5C5E8B 0% 0% no-repeat padding-box;
box-shadow: 0px 3px 6px #00000033;
border-radius: 44px;
opacity: 1;
color:white
}




/* media query */

@media screen and (max-width:575px){
img {
  /* width: 120%; */
  margin-bottom:22px;
  border:5px solid rgb(235, 223, 223);
  top: 308px;
left: 140px;
width: 1px;

 
}

}
</style>

<style type="text/css">

		/*
			In order to see how the BROWSER ZOOM affects the screen width, we're going to
			change the background color / text color as the screen width changes.
		*/
		body {
			background-color: #000000!important  ;
			color: #ffffff ;
		}
		/*
			As the screen dimensions get larger, the background of the screen will get
			lighter. Then, as we ZOOM IN, and the dimensions get smaller, the background
			of the screen should get darker.
		*/
		@media screen and ( min-width: 200px ) {
			body {
				background-color: #111111!important ;
			}
		}
		@media screen and ( min-width: 300px ) {
			body {
				background-color: #222222 !important  ;
			}
		}
		@media screen and ( min-width: 400px ) {
			body {
				background-color: #444444 !important ;
			}
		}
		@media screen and ( min-width: 500px ) {
			body {
				background-color: #666666 !important  ;
			}
		}
		@media screen and ( min-width: 600px ) {
			body {
				background-color: #888888!important  ;
			}
		}
		@media screen and ( min-width: 700px ) {
			body {
				background-color: #aaaaaa!important  ;
				color: #000000 ;
			}
		}
		@media screen and ( min-width: 800px ) {
			body {
				background-color: #cccccc !important ;
			}
		}
		@media screen and ( min-width: 900px ) {
			body {
				background-color: #dddddd !important ;
			}
		}
		@media screen and ( min-width: 1000px ) {
			body {
				background-color: #ffffff !important ;
			}
		}

	</style>
<template>
  
  
</template>

<script>
export default {

}
</script>

<style>

</style>

