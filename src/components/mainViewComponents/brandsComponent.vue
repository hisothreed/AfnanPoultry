<template>
  <div id="brandsContainer">
    <el-row style="padding-top:10px;">
      <el-col :span="24">
        <p class="title is-2 is-spaced">BRANDS AND PARTNERES</p>
      </el-col>
    </el-row>
    <el-row style="margin-bottom: 20px;">
      <el-col :xs="24" :sm="24" style="margin:5px;" :span="12">
        <el-card style="margin:auto;">
          <div class="trouwDiv">
          </div>
          <div class="content">
            <h2 class="is-large card-title">Trouw Nutrition</h2>
            <p class="is-medium card-par">
              Trouw Nutrition is the global leader in innovative feed specialities,<br>
               premixes and nutritional services for the animal nutrition industry..
            </p>
            <div class="bottom">
              <el-button type="text" class="button">Read More</el-button>
            </div>
          </div>
        </el-card>
      </el-col>
      <el-col :xs="24" :sm="24" style="margin:5px;" :span="12">
        <el-card style="margin:auto;" >
          <div class="trouwDiv2">
          </div>
          <div class="content">
            <h2 class="is-large card-title">nutreco</h2>
            <p class="is-medium card-par">
              Nutreco is a global leader in animal nutrition and aquafeed. Our advanced nutritional solutions are at the origin of food for millions of consumers worldwide.
            </p>
            <div class="bottom">
              <el-button type="text" class="button">Read More</el-button>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <el-row style="margin-bottom: 20px;">
      <el-col :span="24">
        <el-button size="large" >Discover More</el-button>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  name: "brandsContainer",
  data: () => ({

  })
}
</script>
<style scoped>
#brandsContainer {
  max-width: 1400px;
  margin: auto;
}
  .title {
    color: white;
  }
  .trouwDiv {
    background-image: url('http://www.trouwnutrition.com/globalassets/opco-shared/homepage/banners-for-pushbox/animals/nutreco-homepage-animals-cow-european.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    height: 200px;
  }
  .trouwDiv2 {
    background-image: url('http://www.nutreco.com/globalassets/logo1/nutreco.png');
    background-repeat: no-repeat;
    background-size: contain;
    height: 200px;
  }
  .card-title {
    text-align: left;
    margin-top: 10px;
  }
  .card-par {
    text-align: left;
  }
  .el-card {
    max-width: 400px;
  }
</style>
