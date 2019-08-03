<template>
  <div id="app">
    
    <router-view></router-view>

  </div>
</template>

<script>

export default {
  name: "app",
  components: {}
};
</script>

<style lang="scss">
#app {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #03a9f4;
  .item{
    height: 60px;
    border-radius: 4px;
    box-shadow: 0 0 6px #f6f6f6;
    background-color: #fff;
    margin: 10px;
    box-sizing: border-box;
    line-height: 60px;
    padding:0 20px;
    >a{
      display: block;
    }
  }
}
</style>
