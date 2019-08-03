<template>
  <div class="box">
    <header>
      <h1>header</h1>
    </header>
    <main>
      <h1>body</h1>
      <p>
        <router-link to="/a">A</router-link>
      </p>
      <div class="item"><a href="">aefd</a></div>
      <div class="item"><a href="">aefd</a></div>
      <div class="item"><a href="">aefd</a></div>
      <div class="item"><a href="">aefd</a></div>
    </main>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scope>
.box {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #3f51b5;
  color: #fff;
  text-align: center;
  header {
    height: 60px;
    background-color: #9c27b0;
    overflow: hidden;
  }
  main {
    background-color: #27b0a9;
    overflow: hidden;
    height: -webkit-fill-available;
  }
}
</style>