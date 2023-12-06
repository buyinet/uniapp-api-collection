<template>
  <view>
    <view
        class="box"
        v-if="keyboardHeight>0"
        :style="'height:'+keyboardHeight+'px'">
      <image
          class="keyboard"
          :src="$kt.file.byPath('kantboot/icon/keyboard.svg')"></image>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      keyboardHeight: 0
    };
  },
  mounted() {
    uni.onKeyboardHeightChange((res)=>{
      this.keyboardHeight = res.height;
    });
  }
}
</script>

<style lang="scss" scoped>
.box{
  position: relative;
  .keyboard{
    position: absolute;
    width: 70rpx;
    height: 70rpx;
    top:50%;
    left: 50%;
    transform: translate(-50%,-50%);
  }
}
</style>
