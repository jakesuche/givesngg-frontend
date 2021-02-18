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
       <div class="row">
           <div class="col-md-12">
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
        
        </p>
           </div>
       </div>

       <div class="row">
           <div class="col-md-12">
                <botton class="btn btn-custom ">
            View progress
        </botton>
           </div>

       </div>
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
.paragraph {
  width: 100%;
  height: 250px;
  text-align: left;
  font: normal normal normal 16px/24px Raleway;
  letter-spacing: 0px;
  color: #000000;
  opacity: 1;
  justify-content: center;
}
.btn-custom {
  width: 276px;
  /* height: 55px; */
  background: #5c5e8b 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #00000033;
  border-radius: 44px;
  opacity: 1;
  color: white;
}

.space-within{
    margin-top:30px
}

@media (min-width: 768px){
    .space-within{
    margin-top:50px;

}
}

/* media query */
/* 
@media screen and (max-width:575px){
img {
 
  margin-bottom:22px;
   margin-left:22px;
  
  top: 308px;
left: 140px;
width: 10000px;
box-shadow: 0px 3px 6px #00000029;

 
}
.btn-custome{
     margin-bottom:22px;
}
.paragraph{
    margin-bottom:1030px;
    max-height: 20px;
    text-overflow: ellipsis;
    
}

} */
</style>
