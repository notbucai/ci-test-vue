<template>
  <div class="App">
    <canvas ref="canvas"></canvas>
  </div>
</template>
<script>
import QRCode from 'qrcode'
export default {
  data () {
    return {

    };
  },
  mounted () {
    // console.log('QRCode',QRCode);
    QRCode.toCanvas(this.$refs.canvas, 'sample text', function (error) {
      if (error) console.error(error)
      console.log('success!');
    })
  },
  methods: {
  }
}
</script>
<style lang="scss" scoped>
.App {
}
</style>