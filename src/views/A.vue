<template>
  <div class="box">
    <div class="item">
      <router-link to="/a">A</router-link>
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
export default {};
</script>
<style scope>
.box{
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #3f51b5;
}
</style>