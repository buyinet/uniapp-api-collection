<template>
  <u-popup :show="show"
           mode="top"
           round="30rpx"
           @close="close" @open="open">
    <view style="width: 100%;">
      <view style="height: 40rpx"></view>
      <user-info-card
      :user-info="userInfo"
      ></user-info-card>
      <view style="height: 40rpx"></view>
    </view>
  </u-popup>
</template>

<script>
export default {
  props: {
    userInfo: {
      type: Object,
      default: () => {
        return {
          phone: '13155908637',
          wechat: '',
          directCode: ''
        }
      }
    }
  },
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
    }
  }
}
</script>

<style lang="scss">

</style>
