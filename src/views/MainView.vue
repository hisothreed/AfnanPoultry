<template>
  <div id="mainViewContainer">
    <div class="section-1">
      <el-row>
        <el-col style="overflow:hidden" :xs="24" :sm="24" :md="24" :lg="12" :span="12">
          <parallax>
           <div class="section-1-image">
           </div>
         </parallax>
        </el-col>
        <el-col :xs="24" :sm="24" :md="24" :lg="12"  :span="12">
          <div class="section-1-text">
            <h1 style="font-weight:400;font-size:2rem;">FEEDING THE FUTURE</h1>
            <p style="padding-top:50px;font-weight:300;font-size:1.4rem;">Afnan is a global leader in animal nutrition and aquafeed. <br>
                Our advanced nutritional solutions are at the origin <br> of food for millions of consumers worldwide</p>
            <el-button class="section-1-button">About Us</el-button>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="section-2">
      <el-row>
        <el-col :span="24">
          <div class="section-2-services-banner">
            <parallax>
              <div class="section-2-banner-image">
              </div>
            <div class="section-2-title">
              <h1>Services</h1>
            </div>
         </parallax>
        </div></el-col>

      </el-row>
      <el-row>
        <el-col :span="12">

        </el-col>
        <el-col :span="12">

        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
import brandsComponent from '../components/mainViewComponents/brandsComponent'
import servicesComponent from '../components/mainViewComponents/servicesComponent'
import Parallax from 'vue-parallaxy'
export default {
  name: "mainViewContainer",
  data: () => ({

  }),
  components: {
    BrandsComponent : brandsComponent,
    ServicesComponent : servicesComponent,
    Parallax
  }
}
</script>
<style scoped>

@media (min-width : 715px) {
   /*#mainViewContainer >>> .el-carousel__container {
     min-height: 564px;
   }
   .sliderContainer {
     width: 100%;
     height: auto;
     margin-top: 100px;
    }*/
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
    .container {
      width: 100%;
      max-width: 100%;
    }
   .slideInfo{
     position: absolute;
     z-index: 10;
     margin: auto;
     text-align: center;
     height: 100%;
     width: 100%;
   }
   .topSpan {
     margin: 10% auto;
     margin-bottom: 20px;
     font-size: 40px;
     font-weight: bold;
     color:white;
    }
    .secondSpan {
      font-size: 20px;
      font-weight: 500;
      color:white;
    }
    .button {
      margin-top: 50px;
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
