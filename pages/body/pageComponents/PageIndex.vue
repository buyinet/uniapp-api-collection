<template>
  <view>
    <view class="back"></view>
    <view class="nav-bar-box">
      <kt-nav-bar title="首页"
                  ref="navBarIndex"
                  :icon="$kt.file.byPath('icon/indexFill.svg')"
      ></kt-nav-bar>
    </view>
    <view :style="'height: '+ktNavBarHeight+'px'"></view>

    <view class="content">

      <view class="box">
        <view style="height: 20rpx"></view>
        <ac-banner></ac-banner>
      </view>


      <view class="box">
        <ac-grid
        @toRecharge="toRecharge"
        ></ac-grid>
      </view>


      <ac-movie-front></ac-movie-front>

    </view>

    <button open-type="contact"
            session-from="sessionFrom"
            style="position: fixed;
            bottom: 400rpx;
            right: 30rpx;
            width: 100rpx;
            height: 100rpx;
            text-align: center;
            border-radius: 50%;
            background-color: #fff;
            z-index: 999;
            background-color: rgba(0,0,0,0.8);
"
            >
        <image :src="$kt.file.byPath('icon/customer.svg')" style="
        position: absolute;
            filter: invert(100%);
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
        width: 80rpx;height: 80rpx;"></image>
    </button>


    <view
        v-if="isShowBottomTip"
        class="bottom-tip">
      <image
          @click="isShowBottomTip = false"
          style="
          width: 45rpx;
          height: 45rpx;
"
      :src="$kt.file.byPath('kantboot/icon/error.svg')"
      ></image>

      <view style="display: inline-block;vertical-align: top;margin-left: 15rpx;font-size: 28rpx;">
        <view style="height: 10rpx"></view>
        关注公众号，及时获取最新优惠信息
      </view>
      <view style="display: inline-block;vertical-align: top;margin-left: 18rpx;font-size: 28rpx;">
        <u-button
        type="primary"
        size="small"
        color="#000000"
        :custom-style="{
          'border': '2px solid #fff',
          'border-radius': '50rpx',
        }"
        @click="$refs.followWechatOfficialAccountPopup.open()"
        >立即关注</u-button>
      </view>
    </view>


    <follow-wechat-official-account-popup
    ref="followWechatOfficialAccountPopup"
    ></follow-wechat-official-account-popup>


  </view>
</template>

<script>
export default {
  data() {
    return {
      ktNavBarHeight: 0,
      isShowBottomTip: true,
    };
  },
  mounted() {
    this.ktNavBarHeight = this.$refs.navBarIndex.getHeight();
  },
  methods: {
    toRecharge(){
      this.$emit('toRecharge');
    }
  },
}
</script>

<style lang="scss" scoped>

.back{
  background-color: #f0f0f0;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: -1;
}

.nav-bar-box {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
  width: 100vw;
}

.content{
}

.box{
  background-color: #fff;
  padding: 0 30rpx 30rpx 30rpx;
}

.bottom-tip{
  position: fixed;
  bottom:160rpx;
  background-color: rgba(0,0,0,0.6);
  color:#FFFFFF;
  width: 700rpx;
  left: 50%;
  transform: translateX(-50%);
  padding: 20rpx;
  box-sizing: border-box;
  border-radius: 30rpx;
}

</style>
