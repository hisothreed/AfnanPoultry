<template>
  <div id="mainViewContainer">
    <div class="section-1">
      <el-row>
        <el-col style="overflow:hidden" :xs="24" :sm="24" :md="24" :lg="24" :span="24">
           <div class="section-1-image">
             <div class="section-1-text">
               <h1 style="font-weight:400;font-size:2.5rem;">FEEDING THE FUTURE</h1>
               <p style="padding-top:50px;font-weight:300;font-size:1.4rem;">Afnan is a global leader in animal nutrition and aquafeed. <br>
                   Our advanced nutritional solutions are at the origin <br> of food for millions of consumers worldwide</p>
               <el-button class="section-1-button">About Us</el-button>
             </div>
           </div>
        </el-col>
      </el-row>
    </div>
    <div class="section-2">
      <el-row>
        <el-col :span="24">
          <div class="section-2-services-banner">
            <div class="pipe">
            </div>
            <div class="section-2-title">
              <h1>Services</h1>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
    <div style="background-color:#028090;" class="section-3">
      <el-row style="max-width:1400px;margin:auto;max-height:550px;">
        <el-col :xs="24" :sm="12" :md="12" :lg="6" :span="6">
          <el-card class="card" :body-style="{ padding: '0px',position: 'relative'  }">
            <div  class="cardImage1 cardImage">
            </div>
            <transition name="fade">
              <div class="card-info" style="padding: 14px;">
                <h3 class="card-title">Feed and Feed Additives</h3>
                <p class="card-p">Trouwnutrition & Hendrix MaxCare Premixes , Profsh , ChickCare & Hendrix Concentrates</p>
                <el-button class="card-button">Learn More</el-button>
              </div>
            </transition>
          </el-card>
        </el-col>
        <el-col :xs="24" :sm="12" :md="12" :lg="6" :span="6">
          <el-card class="card" :body-style="{ padding: '0px',position: 'relative' }">
            <div  class="cardImage2 cardImage">
            </div>
            <transition name="fade">
              <div class="card-info" style="padding: 14px;">
                <h3 class="card-title">Feed and Feed Additives</h3>
                <p class="card-p">Trouwnutrition & Hendrix MaxCare Premixes , Profsh , ChickCare & Hendrix Concentrates</p>
                <el-button class="card-button">Learn More</el-button>
              </div>
            </transition>
          </el-card>
        </el-col>
        <el-col :xs="24" :sm="12" :md="12" :lg="6" :span="6">
          <el-card class="card" :body-style="{ padding: '0px',position: 'relative' }">
            <div  class="cardImage3 cardImage">
            </div>
            <transition name="fade">
              <div class="card-info" style="padding: 14px;">
                <h3 class="card-title">Feed and Feed Additives</h3>
                <p class="card-p">Trouwnutrition & Hendrix MaxCare Premixes , Profsh , ChickCare & Hendrix Concentrates</p>
                <el-button class="card-button">Learn More</el-button>
              </div>
            </transition>
          </el-card>
        </el-col>
        <el-col  :xs="24" :sm="12" :md="12" :lg="6" :span="6">
          <el-card class="card" :body-style="{ padding: '0px',position: 'relative' }">
            <div  class="cardImage4 cardImage">
            </div>
            <transition name="fade">
              <div class="card-info" style="padding: 14px;">
                <h3 class="card-title">Feed and Feed Additives</h3>
                <p class="card-p">Trouwnutrition & Hendrix MaxCare Premixes , Profsh , ChickCare & Hendrix Concentrates</p>
                <el-button class="card-button">Learn More</el-button>
              </div>
            </transition>
          </el-card>
        </el-col>
      </el-row>
    </div>
    <div class="section-4">
      <el-row>
        <el-col :span="24">
          <div class="section-3-news-banner">
            <div class="pipe">
            </div>
            <div class="section-3-title">
              <h1>Latest News</h1>
            </div>
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24">
          <news-component></news-component>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
import NewsComponent from '../components/mainViewComponents/NewsComponent'
import Parallax from 'vue-parallaxy'
export default {
  name: "mainViewContainer",
  data: () => ({

  }),
  components: {
    Parallax,
    NewsComponent
  }
}
</script>
<style scoped>

@media (min-width : 715px) {
    .section-1 {
      max-width: 1400px;
      min-height: 500px;
      width: 100%;
      overflow: hidden;
      margin-top: 100px;
      margin-left: auto;
      margin-right: auto;
      margin-bottom: 0;
    }
    .section-1-image {
      background-image: url('../assets/chickHead.jpg');
      height: 502px;
      width: 105%;
      background-size: cover;
      background-repeat: no-repeat;
    }
    .section-1-text {
      color: white;
      background-color: rgba(0,0,0,0.4);
      height: 100%;
      text-align: left;
      padding: 50px;
    }
    .section-1-button {
      height:50px;
      width:150px;
      margin-top: 100px;
      border : 2px solid black;
      background-color: none;
      font-weight: 500;
    }
    .section-1-button:hover {
      border : 2px solid black;
      background-color: black;
      color: white;
      font-weight: 500;
    }
    .section-2 {
      position: relative;
      max-width: 1400px;
      height: 100px;
      width: 100%;
      overflow: hidden;
      margin-top: 40px;
      margin-left: auto;
      margin-right: auto;
      margin-bottom: 0;
    }
    .section-2-title  {
      z-index: 100;
      float: left;
      font-size: 3.3rem;
      margin-left: 5px;
      display: inline-block;
      color: black;
    }
    .section-2-title h1 {
      font-weight: 100;
    }
    .section-4 {
      position: relative;
      max-width: 1400px;
      height: 100px;
      width: 100%;
      overflow: hidden;
      margin-top: 40px;
      margin-left: auto;
      margin-right: auto;
      margin-bottom: 0;
    }
    .section-3-title  {
      z-index: 100;
      float: left;
      font-size: 3.3rem;
      margin-left: 5px;
      display: inline-block;
      color: black;
    }
    .section-2-title h1 {
      font-weight: 100;
    }
    .pipe {
      height: 80px;
      display: inline-block;
      width: 5px;
      float: left;
      background-color: black;
    }
    .service-container {
      height: 550px;
      width: 100%;
    }
    .cardImage1 {
      background-image: url('../assets/service1image.jpg');
      height: 550px;
      background-repeat: no-repeat;
      background-size: cover;
      width: 100%;
      filter: blur(1px) brightness(80%);
    }
    .cardImage2 {
      background-image: url('../assets/service2image.jpg');
      height: 550px;
      background-repeat: no-repeat;
      background-size: cover;
      width: 100%;
      filter: blur(1px) brightness(80%);
    }
    .cardImage3 {
      background-image: url('../assets/service3image.jpg');
      height: 550px;
      background-repeat: no-repeat;
      background-size: cover;
      width: 100%;
      filter: blur(1px) brightness(80%);
    }
    .cardImage4 {
      background-image: url('../assets/service4image.jpg');
      height: 550px;
      background-repeat: no-repeat;
      background-size: cover;
      width: 100%;
      filter: blur(1px) brightness(80%);
    }
    .card-info {
      position: absolute;
      top: 0;
      width: 100%;
      background-color: rgba(0,0,0,0.3);
      height: 100%;
    }
    .card{
      border: none;
    }

    .card-title {
      color: white;
      font-size: 2rem;
      margin-top: 100px;
      text-align: center;
    }
    .card-p {
      color: white;
      margin-top: 20px;
      text-align: center;
      font-size: 1.4rem;
      opacity: 0.6;
    }
    .card-button {
      background-color: rgba(0,0,0,0);
      color:white;
      font-size: 1.1rem;
      padding: 20px;
      border-radius: 100px;
      margin-top: 100px;
      width: 250px;
    }
    .card-button:hover {
      background-color: white;
      color: black;
      border: none;
    }
  }
  @media (max-width: 715px) {
    .section-1 {
      max-width: 1400px;
      min-height: 500px;
      width: 100%;
      overflow: hidden;

      margin-left: auto;
      margin-right: auto;
      margin-bottom: 0;
    }
    .section-1-image {
      background-image: url('http://www.synthite.com/synthite/our-products/Industrial-Products-By-Application/Agriculture-And-Livestock/Poultry/myTextBlock/0/textBlock_files/file/poultry-feed-1.png');
      height: 502px;
      width: 105%;
      background-size: cover;
      filter:brightness(70%) blur(1px);
      background-repeat: no-repeat;
    }
    .section-1-text {
      padding: 50px;
    }
    .section-1-button {
      height:50px;
      width:150px;
      margin-top: 100px;
      border : 2px solid black;
      font-weight: 500;
    }
    .section-1-button:hover {
      border : 2px solid black;
      background-color: black;
      color: white;
      font-weight: 500;
    }
    .section-2 {
      position: relative;
      max-width: 1400px;
      height: 400px;
      width: 100%;
      overflow: hidden;
      margin-top: 100px;
      margin-left: auto;
      margin-right: auto;
      margin-bottom: 0;
    }
    .section-2-banner-image {
      width: 100%;
      height: 400px;
      background-color: #044B67;
      filter:brightness(50%) blur(1px);
      background-repeat: no-repeat;
      background-position:bottom;
      background-size: cover;
      background-image: url('https://mobile-cuisine.com/wp-content/uploads/2013/03/poultry-fun-facts-1.jpg');
    }
    .section-2-title  {
      z-index: 100;
      position: absolute;
      font-size: 40px;
      width: 100%;
      font-size: 5rem;
      top: 10%;
      color: white;
    }
  }

</style>
