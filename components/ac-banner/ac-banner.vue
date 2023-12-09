<template>
  <view class="banner">
    <swiper
      class="banner-swiper"
      indicator-dots="true"
      indicator-color="rgba(255,255,255,.5)"
      indicator-active-color="#fff"
      autoplay="true"
      interval="3000"
      circular="true"
    >
      <swiper-item>
        <image :src="$kt.file.byPath('image/banner/invite.png')"
               mode="aspectFill"
               class="banner-image"></image>
      </swiper-item>
      <swiper-item>
        <image
            @click="$refs.followWechatOfficialAccountPopup.open()"
            :src="$kt.file.byPath('image/banner/banner2.png')"
               mode="aspectFill"
               class="banner-image"></image>
      </swiper-item>
    </swiper>

    <follow-wechat-official-account-popup
    ref="followWechatOfficialAccountPopup"
    ></follow-wechat-official-account-popup>

  </view>

</template>

<script>
export default {
  data() {
    return {
    };
  },
  methods: {

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
