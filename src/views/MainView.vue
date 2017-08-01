<template>
  <div id="mainViewContainer">
    <div class="sliderContainer">
      <el-row class="container">
        <el-col :span="24">
          <div>
            <div class="slideInfo">
              <div class="topSpan">
                <h1>FEEDING THE FUTURE</h1>
              </div>
              <div class="secondSpan">
                <h1>Afnan is a global leader in animal nutrition and aquafeed. <br>
                Our advanced nutritional solutions are at the origin <br> of food for millions of consumers worldwide.</h1>
              </div>
              <div class="buttonSpan">
                <a class="button is-primary is-inverted is-outlined">About Us</a>
              </div>
            </div>
            <el-carousel indicator-position="inside">
              <el-carousel-item style="-webkit-filter: brightness(50%);" v-for="img in imgs" :key="img">
                <div :style="{ 'background-image': 'url(' + img + ')'
                                ,'height':'100%'
                                ,'width':'100%'
                                ,'background-repeat':'no-repeat'
                                ,'background-size':'cover',
                                '-webkit-filter': 'blur(1px)',
                                '-moz-filter': 'blur(1px)',
                                '-ms-filter': 'blur(1px)' }">


                </div>
              </el-carousel-item>
            </el-carousel>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="brandsContainer">
      <el-row class="container">
        <el-col :span="24">
          <brands-component></brands-component>
        </el-col>
      </el-row>
    </div>
    <div class="servicesContainer">
      <el-row class="container">
        <el-col :span="24">
          <services-component></services-component>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
import brandsComponent from '../components/mainViewComponents/brandsComponent'
import servicesComponent from '../components/mainViewComponents/servicesComponent'

export default {
  name: "mainViewContainer",
  data: () => ({
    imgs: ['https://mobile-cuisine.com/wp-content/uploads/2013/03/poultry-fun-facts-1.jpg','http://www.synthite.com/synthite/our-products/Industrial-Products-By-Application/Agriculture-And-Livestock/Poultry/myTextBlock/0/textBlock_files/file/poultry-feed-1.png']
  }),
  components: {
    BrandsComponent : brandsComponent,
    ServicesComponent : servicesComponent
  },
  computed: {
    carousel (img) {
      return {
        backgroundImage : `url(${img})`,
        height:'100%',
        widht:'100%'
      }
    }
  }
}
</script>
<style scoped>

@media (min-width : 715px) {
   #mainViewContainer >>> .el-carousel__container {
     min-height: 564px;
   }
   .sliderContainer {
     width: 100%;
     height: auto;
     margin-top: 100px;
    }
   .brandsContainer {
     margin: auto;
     width: 100%;
     height: auto;
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
    .sliderContainer {
      width: 100%;
      height: auto;
      margin-top: 50px;
      background-color: #9BC53D;
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
      font-size: 30px;
      font-weight: bold;
      color:white;
     }
     .secondSpan {
       font-size: 15px;
       font-weight: 500;
       color:white;
     }
     .button {
       margin-top: 10px;
     }
     #mainViewContainer >>> .el-carousel__container {
       min-height: 300px;
     }
  }

</style>
