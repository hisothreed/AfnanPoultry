<template>
  <div id="headerContainer">
    <vulma-navbar @menu-clicked='menuClicked'>
      <vulma-navitem slot='left' :is-tab='false' class='is-hidden-desktop is-hidden-tablet menuIcon'>
        <div >
          <i @click="$refs.drawer.open()" class="fa fa-bars" aria-hidden="true"></i>
        </div>
      </vulma-navitem>
      <vulma-navitem slot='left' :is-tab='false'>
        <div id="logo"><img src="../assets/afLogo.png" height="50" width="90"></div>
      </vulma-navitem>
      <!-- DESKTOP MENU -->
      <vulma-navitem slot='right' :is-tab='false' class='is-hidden-mobile'>
        <el-menu
          align="middle"
          :default-active="activeIndex2"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect">
          <div class="right_menu_container">
            <el-menu-item index="home">HOME</el-menu-item>
            <el-menu-item index="about">ABOUT</el-menu-item>
            <el-menu-item index="signUp">NEWS</el-menu-item>
            <el-menu-item index="contact">CONTACT</el-menu-item>
            <el-menu-item index="brands">BRANDS</el-menu-item>
            <el-menu-item index="goals">GOALS AND AIMS</el-menu-item>
          </div>
        </el-menu>
      </vulma-navitem>
      <!-- MOBILE NAV MENU -->
    </vulma-navbar>
    <vulma-drawer ref='drawer'>
      <vulma-navitem>
        <div id="logo"><img src="../assets/afLogo.png" height="60" width="60"></div>
      </vulma-navitem>
      <el-menu
        align="middle"
        :default-active="activeIndex2"
        class="el-menu-drawer"
        mode="vertical"
        theme="dark"
        @select="handleSelect">
        <div class="">
          <el-menu-item index="home">HOME</el-menu-item>
          <el-menu-item index="about">ABOUT</el-menu-item>
          <el-menu-item index="signUp">NEWS</el-menu-item>
          <el-menu-item index="contact">CONTACT</el-menu-item>
          <el-menu-item index="brands">BRANDS</el-menu-item>
          <el-menu-item index="goals">GOALS AND AIMS</el-menu-item>
        </div>
      </el-menu>
    </vulma-drawer>
  </div>
</template>
<script>
export default {
  name: "headerContainer",
  data: () => ({

  }),
  methods: {
    open() {
    }
  }
}
</script>
<style scoped>
#headerContainer >>> .fa-bars{
  font-size:20px;
  color: white;
}
#headerContainer[data-v-2e8dced4] .nav-item:hover {
  border-bottom: none;
}
#headerContainer >>> .nav-item img {
  max-height: 80px;
}
#headerContainer >>> .nav-item {
  padding-top: 0;
  padding-bottom: 0;
}
.menuIcon {
  color:white;
  background-color: #9BC53D;
}
.el-menu-drawer {
  background-color: #9BC53D;
  color: white;
  height: 100%;
}
.el-menu-drawer li {
  color: white;
  width: 100%;
  background-color: #9BC53D;

}
@media (min-width:900px) {
  #headerContainer {
    margin: auto;
    max-width: 1400px;
  }
  #headerContainer >>> .nav {
    min-height: 50px;
    max-width: 1400px;
    margin: auto;
    height:80px;
    z-index :999;
  }
  #headerContainer >>> .navbar-link:hover {
    background-color: white;
  }
  #headerContainer >>> .navbar-end {
    -webkit-box-pack: end;
    -ms-flex-pack: end;
    justify-content: flex-end;
    margin-left: auto;
    -webkit-box-align: stretch;
    -ms-flex-align: stretch;
    align-items: stretch;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
  }
  #headerContainer >>> .navbar-burger {
    display: none;
  }
  #headerContainer >>> .navbar {
    min-height: 100px;
    box-shadow: 1px 1px 10px rgba(0,0,0,0.2);
  }
  #headerContainer >>> .navbar-item img {
    max-height: 400px;
  }
  .logo {
    height: 100px;
    width: 100px;
  }
  .el-menu-demo {
    margin: auto;
    background: transparent;
  }
  .right_menu_container {
    float:right;
  }
  #headerContainer  >>> .el-menu--horizontal .el-menu-item {
    border-radius: 20px;
    height: 30px;
    line-height: 30px;
    background: transparent;
    font-size: 13px;
    color: grey;
    padding: 0 15px 0 15px;
  }
  #headerContainer >>> .el-menu-item.is-active, .el-menu-item:hover {
    color:black;
  }
  #headerContainer >>> .nav-item:hover {
    border-bottom: 1px solid black;
  }
}
@media (min-width: 550px) and (max-width:1098px) {
  #headerContainer >>> .nav {
    z-index: 999;
  }
  #headerContainer >>> .nav-item img {
    height:60px;
    width: 60px;
  }
  .logo  img{
    height: 80px;
    width: 80px;
  }
  .el-menu-demo {
    margin: auto;
    background: transparent;
  }
  .right_menu_container {
    float:right;
  }
  #headerContainer  >>> .el-menu--horizontal .el-menu-item {
    border-radius: 20px;
    height: 30px;
    line-height: 30px;
    background: transparent;
    font-size: 13px;
    color: grey;
    padding: 0 15px 0 15px;
  }
  #headerContainer >>> .el-menu-item.is-active, .el-menu-item:hover {
    color:black;
  }
  #headerContainer >>> .nav-item:hover {
    border-bottom: 1px solid black;
  }
}
@media (max-width : 550px) {
  #headerContainer >>> .nav {
    z-index: 999;
  }
  #headerContainer >>> .navbar-link:hover {
    background-color: white;
  }
  #headerContainer >>> .navbar-brand .navbar-item {
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
  }
  .el-menu-demo {
    display: none;
  }
  #headerContainer >>> .nav-item img {
    height:50px;
    width: 50px;
  }
  .logo {
    height: 50px;
    width: auto;
  }
  #headerContainer >>> .navbar-burger {
    margin-top: auto;
    margin-bottom: auto;
  }
  #headerContainer >>> .navbar {
    max-height: 60px;
    overflow: hidden;
    box-shadow: 1px 1px 10px rgba(0,0,0,0.2);
  }
}
</style>
