<template>
  <view class="location-box">
    <view class="location-icon">
      <u-icon name="map-fill" size="40rpx"
      ></u-icon>
    </view>
    <view class="location-text">南昌</view>
  </view>
</template>

<script>
export default {
  data() {
    return {};
  }
}
</script>

<style lang="scss" scoped>
.location-box{
  position: relative;
  display: inline-block;
  margin: 0;
  padding: 0;
  .location-text{
    position: relative;
    font-size: 32rpx;
    color: #333;
    padding-left: 50rpx;
    vertical-align: top;
  }

  .location-icon{
    color: #333;
    position: absolute;
    left:0;
    top:0;
  }
}
</style>
