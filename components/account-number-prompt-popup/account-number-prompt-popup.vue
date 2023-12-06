<template>
  <u-popup :show="show" position="bottom"
           round="30rpx"
           @close="close"
           >
    <view class="box">
      <view style="height: 30rpx"></view>
      <view class="title">查看电费户号的方式</view>
      <view
      style="
      position: relative;
      box-sizing: border-box;
      padding: 0 30rpx 30rpx 30rpx;
      color: #333;
      font-size: 28rpx;
"
      >
        <view>1、支付宝缴费过电费可以查到户号</view>
        <view style="height: 20rpx"></view>
        <view>2、微信缴费过电费可以查到户号</view>
        <view style="height: 20rpx"></view>
        <view>3、电费发票中查看</view>
        <view style="height: 20rpx"></view>
        <view>4、拨打电网电话<text style="font-weight: bold;" @click="toPhone('95598')">95598</text>转人工服务查询户号</view>
        <view style="height: 20rpx"></view>
        <view>5、去供电局营业厅查询户号</view>
      </view>
      <view style="height: 30rpx"></view>
    </view>
  </u-popup>
</template>

<script>
export default {
  data() {
    return {
      show: false,
    };
  },
  methods: {
    open() {
      this.show = true;
    },
    close() {
      this.show = false;
    },
    toPhone(phone) {
      uni.makePhoneCall({
        phoneNumber: phone,
      });
    },
  },
}
</script>

<style lang="scss" scoped>

.title{
  font-size: 32rpx;
  color: #333;
  text-align: center;
  margin-bottom: 30rpx;
  font-weight: bold;
}

</style>
