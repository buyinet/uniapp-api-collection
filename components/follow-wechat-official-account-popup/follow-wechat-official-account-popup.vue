<template>
  <u-popup
      :show="show"
      position="center"
      @close="show = false"
      round="30rpx"
      :style="{height: 'auto'}">
    <view style="text-align: center">
      <view style="padding: 20rpx;"></view>
      <view>关注公众号</view>
      <view style="height: 20rpx;"></view>
      <view
      style="color: #666666;font-size: 28rpx"
      >解锁更多特权</view>
      <view style="height: 20rpx;"></view>
      <view>
        <image
            :show-menu-by-longpress="true"
            :src="$kt.file.byPath('image/QRcodeOfWechatOfficialAccount.png')"
               mode="aspectFill"
               class="image"></image>
      </view>
      <view style="height: 20rpx;"></view>
      <view
      style="color: #666666;font-size: 28rpx;"
      >长按识别二维码</view>
      <view style="height: 60rpx;"></view>
    </view>
  </u-popup>
</template>

<script>
export default {
  data() {
    return {
      show: false
    };
  },
  methods: {
    open() {
      this.show = true;
    },
    close() {
      this.show = false;
    },

  }
}
</script>

<style lang="scss" scoped>

.image{
  width: 300rpx;
  height: 300rpx;
}

</style>
