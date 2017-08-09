<template>
  <div id="newsContainer">
    <el-row>
      <el-col :span="8">
        <el-card>
          <div class="news-image">
          </div>
          <div style="padding: 14px;">
            <span>Yummy hamburger</span>
            <div class="bottom clearfix">
              <time class="time">{{ currentDate }}</time>
              <el-button type="text" class="button">Operating button</el-button>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  name: "newsContainer",
  data: () => ({

  })
}
</script>
<style scoped>

</style>
