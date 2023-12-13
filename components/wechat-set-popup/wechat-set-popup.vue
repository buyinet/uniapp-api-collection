<template>
  <u-popup :show="show" round="30rpx" mode="center" @close="close" @open="open">
    <view class="box">
      <view style="height: 10rpx"></view>
      <view
      style="font-size: 38rpx;"
      >设置微信号</view>
      <view style="height: 30rpx"></view>
      <view
      style="color: #666666;font-size: 28rpx;"
      >
        设置微信号后，方便粉丝与您联系，进一步加强关系，提升业绩
      </view>
      <view style="height: 30rpx"></view>
      <view>
        <input
            class="wechat-input"
            maxlength="100"
            v-model="wechat"
            placeholder="输入微信号"></input>
      </view>

      <view style="height: 30rpx"></view>

      <view>
        <u-grid :col="2">
          <u-grid-item>
            <view class="btn-box">
              <button
                  @click="close()"
                  class="cancel-btn">取消</button>
            </view>
          </u-grid-item>
          <u-grid-item>
            <view class="btn-box">
              <button
                  @click="submit()"
                  class="submit-btn">确定</button>
            </view>
          </u-grid-item>
        </u-grid>
      </view>

      <view style="height: 30rpx"></view>

    </view>
  </u-popup>
</template>

<script>
import userStore from "@/store/modules/user";
export default {
  data() {
    return {
      wechat: "",
      show: false,
      userStore
    };
  },
  methods: {
    open() {
      this.show = true;
    },
    close() {
      this.show = false;
    },
    submit() {
      uni.showLoading({
        title: "提交中",
        mask: true
      });

      this.$request({
        url: "/system-user-web/user/setWechat",
        method: "POST",
        data: {
          wechat: this.wechat
        },
        stateSuccess: res => {
          this.userStore.setSelfInfo(res.data);
          uni.hideLoading();
          this.close();
        },
        stateFail: res => {
          uni.hideLoading();
          uni.showToast({
            title: res.errMsg,
            icon: "none"
          });
        }
      });
    }
  }
}
</script>

<style lang="scss" scoped>

.box{
  padding: 30rpx;
  width: 80vw;
  box-sizing: border-box;
  // 文字间距
  letter-spacing: 2rpx;
}

.wechat-input{
  background-color: #f0f0f0;
  padding: 15rpx;
  border-radius: 10rpx;
  font-size: 35rpx;
}

.btn-box{
  width: 100%;
  padding: 10rpx;
  box-sizing: border-box;
  .cancel-btn{
    width: 100%;
    background-color: #FFFFFF;
    border-radius: 10rpx;
    font-size: 30rpx;
    border: 1rpx solid #f0f0f0;
  }
  .submit-btn{
    width: 100%;
    background-color: #333333;
    border-radius: 10rpx;
    font-size: 30rpx;
    border: 1rpx solid #333333;
    color: #f0f0f0;
  }
}

</style>
