<template>
  <div id="app">
    <div id="nav">
      <router-link to="/app1">App1</router-link> |
      <router-link to="/app2">App2</router-link>
    </div>
    <div class="sidebar" :class="{'expand':sidebarExpanded}">
      <header class="header">
        <a href="" class="icon"></a>
      </header>
      <div style="display:flex;flex-direction: column;flex-grow: 1;justify-content: space-between;">
        <el-menu
          default-active="2"
          background-color="#121C30"
          text-color="#9FA7AF"
          active-text-color="#9FA7AF"
          :unique-opened="true"
          :router="false"
          ref="menu"
          hide-timeout="0"
          @select="handleSelect"
          :collapse="!sidebarExpanded"
          class="sidebar_menu">

            <template v-for="(menu,index) in sideMenu">
            <el-menu-item :index="`${index}`" :route="menu.route" v-if="!menu.subMenu" :key="index" :class="{isActive:activePath==index}">
              <mis-icon :type="menu.icon"></mis-icon>
              <span slot="title">{{menu.title}}</span>
            </el-menu-item>

              <el-submenu :index="`${index}`" v-if="menu.subMenu"  :key="index+'sub'" :hide-timeout="0">
              <template slot="title">
                <mis-icon :type="menu.icon"></mis-icon>

                <span>{{menu.title}}</span>
              </template>

              <template v-for="(sub_menu,sub_index) in menu.subMenu">
                <el-menu-item :index="`${index}-${sub_index}`" :route="sub_menu.route" v-if="!sub_menu.subMenu" :key="sub_index" :class="{isActive:activePath==`${index}-${sub_index}`}">
                  <span slot="title">
                    <span style="display:inline-flex">
                      {{sub_menu.title}}  
                    </span>
                  </span>
                </el-menu-item>

                <el-submenu :index="`${index}-${sub_index}`" v-if="sub_menu.subMenu"  :key="sub_index" :hide-timeout="0">
                  <template slot="title">
                    <span class="sub-menu-item">{{sub_menu.title}}</span>
                  </template>

                  <el-menu-item :index="`${index}-${sub_index}-${sub_i}`" :route="sub_sub.route" v-for="(sub_sub,sub_i) in sub_menu.subMenu" :key="sub_i" :class="['sub_sub-menu-item', {isActive:activePath==`${index}-${sub_index}-${sub_i}`}]">
                    {{sub_sub.title}}
                  </el-menu-item>

                </el-submenu>

              </template> 
            </el-submenu>
          </template> 
        </el-menu>
         
        <div class="sidebar-footer">
          <span @click="sidebarExpanded=!sidebarExpanded">
            <mis-icon :type="sidebarExpanded?'arrow-left-double':'arrow-right-double'"></mis-icon>
          </span>
        </div>
      </div>
      
    </div>
  </div>
</template>

<script>
import { sideMenu } from './components/side-menu.js'
import MisIcon from './components/misIcon'
export default {
  name: 'app',
  components:{
    MisIcon
  },
  data() {
    return {
      sidebarExpanded: true,
      sideMenu:sideMenu,
      activePath:1
    };
  },
  methods:{
    handleSelect(index){
      let pathArr = index.split('-')
      console.log(this.sideMenu, pathArr)
      let path = this.getRoute(this.sideMenu,pathArr)
      console.log(path)
      // location.href = `/p2#/${path}`
      this.$router.push(path)
    },
    getRoute(menu,pathArr){
      let path = pathArr.shift();
      let menuObj = menu[path];
      return pathArr.length>0 ? this.getRoute(menuObj.subMenu,pathArr) :menuObj.route.name
    }
  }
}
</script>

<style scoped lang="less">
  * {
    box-sizing: border-box;
    font-family: "PingFang SC-Regular", "Helvetica Neue", "Hiragino Sans GB", "Arial", "Helvetica", "Microsoft Yahei UI", "Microsoft Yahei", "Simsun", "Sans-serif", "bcfont";
  }
  #app{
    height:100vh;
    position: fixed;
    left: 0;
    top: 0;
  }
  .sidebar {
    float: left;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    background: #121c30;
    width: 60px;

    .header{
      height: 48px;
      padding: 0;
      line-height: 48px;
      background: #1f3252;
      .icon{
        background:url(./assets/icon.svg) no-repeat;
        background-size: auto;
        background-position: 27px center;
        display:block;
        height: 48px;
        width:50px;
      }
    }

    &.expand{
      width: 184px;
      overflow-y: auto;
      overflow-x:hidden;
      .icon{
        width:100%;
      }
    }
    .bcui-sidebar-child .bcui-sidebar-content {
      padding-right: 0;
    }
    .sidebar_menu{
      .bcui-icon{
        margin-right: 14px;
        width: 24px;
        text-align: center;
        font-size: 18px;
        vertical-align: middle;
      }
      &.el-menu--collapse{
        width: 60px;
        & > .el-submenu.is-active .el-submenu__title{
          background: #1F3252 !important;
        }

        & > .el-submenu.is-opened > .el-submenu__title {
          background: #2D77EE !important;
        }

      }
      border-right:none;
    }

    .el-submenu {
      .el-submenu {
        margin: 0px 0;
      }
      margin: 20px 0;
    }

    .el-submenu .el-menu-item, .sub-menu-item{
      min-width: 184px;
      font-size: 12px;
    }

    .el-submenu .el-menu-item::before, .sub-menu-item::before{
      content: "";
      width: 10px;
      height: 100%;
      display: inline-block;
      background: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTBweCIgaGVpZ2h0PSIxMHB4IiB2aWV3Qm94PSIwIDAgMTAgMTAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDQ5LjMgKDUxMTY3KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGRlZnM+CiAgICAgICAgPHJlY3QgaWQ9InBhdGgtMSIgeD0iOSIgeT0iOSIgd2lkdGg9IjEwIiBoZWlnaHQ9IjEwIiByeD0iNSI+PC9yZWN0PgogICAgPC9kZWZzPgogICAgPGcgaWQ9Iui0puaIt+euoeeQhiIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTQwLjAwMDAwMCwgLTEyNy4wMDAwMDApIiBpZD0iaWNvbiI+CiAgICAgICAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDMxLjAwMDAwMCwgMTE4LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgPGcgaWQ9IlJlY3RhbmdsZS02LUNvcHkiPgogICAgICAgICAgICAgICAgICAgIDx1c2UgZmlsbC1vcGFjaXR5PSIwIiBmaWxsPSIjMjEyNDJEIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHhsaW5rOmhyZWY9IiNwYXRoLTEiPjwvdXNlPgogICAgICAgICAgICAgICAgICAgIDxyZWN0IHN0cm9rZT0iI0ZGRkZGRiIgc3Ryb2tlLXdpZHRoPSIyIiB4PSIxMCIgeT0iMTAiIHdpZHRoPSI4IiBoZWlnaHQ9IjgiIHJ4PSI0Ij48L3JlY3Q+CiAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==) center center no-repeat;
      vertical-align: middle;
      opacity: 0.5;
      margin-right: 12px;
    }
    /deep/ .el-submenu .sub_sub-menu-item {
      font-size: 12px;
      padding-left: 70px !important;
    }
    .el-submenu .sub_sub-menu-item::before {
      display: none;
    }

    // .el-submenu .el-menu-item.is-active::before,
    .el-menu-item:hover::before,.el-menu-item.isActive::before{
      opacity: 1;
    }

    .el-submenu:hover > .el-submenu__title,.el-menu-item:hover,.el-menu-item.isActive {
      color: white !important;
    }
    .el-submenu:hover >.el-submenu__title, .el-menu-item:hover{
      background: #1F3252 !important;
    }

    .el-submenu.is-opened > .el-submenu__title {
      background: #2D77EE !important;
      color: white !important;
    }

    .el-submenu.is-opened .el-submenu.is-opened .el-submenu__title{
      background: #1f3252 !important;
    }
    

    .el-submenu:hover .bcui-icon,.el-submenu.is-opened .bcui-icon,.el-menu-item:hover .bcui-icon{
      color: #fff;
    }
    .el-submenu.is-opened .el-submenu__title i{
      color: #fff;
    }
    /deep/ .el-menu-item, 
    /deep/ .el-submenu__title{
      height: 40px;
      line-height: 40px;
    }
    .el-submenu .el-submenu .bcui-icon{
      margin-left: -5px;
    }
    .sidebar-footer{
      height: 30px;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      margin-bottom: 10px;
      .bcui-icon{
        font-size: 18px;
        color: #fff;
      }
    }
    .menu .el-badge__content{
      border-width: 0px;
      top: 10px;
      right: 5px;
    }
    /deep/ .el-submenu__icon-arrow{
      font-weight: 700;
    }
  }

</style>

<style>
  body {
    margin:0px;
  }
</style>
