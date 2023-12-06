<template>
  <view>
          <image :src="$kt.file.byPath('image/banner/invite.png')"
                 mode="aspectFill"
                 class="banner-image"></image>
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
.banner{
  height: 200rpx;
  border-radius: 30rpx;
  .banner-swiper{
    border-radius: 30rpx;
    height: 200rpx;
  }

}
.banner-image{
  width: 100%;
  height: 200rpx;
  border-radius: 30rpx;
}
</style>
