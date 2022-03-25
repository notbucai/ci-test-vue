<template>
  <div class="box">
    {{count}}
    <div class="item">
      <router-link to="/">A</router-link>
    </div>
    <div class="item">
      <router-link to="/b">B</router-link>
    </div>
    <div class="item">
      <router-link to="/c">C</router-link>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return {
      count:0
    }
  },
  mounted(){
    setInterval(() => {
      this.count++;
    }, 30);
  }
};
</script>
<style scoped>
.box{
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #3f51b5;
}
</style>