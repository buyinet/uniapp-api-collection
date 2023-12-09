<template>
  <view>
    <view class="back"></view>
    <view class="nav-bar-box"
    style="box-shadow: 0 0 100rpx rgb(255,0,0);"
    >
      <kt-nav-bar title="邀请"
                  ref="navBar"
                  :highlight="true"
                  background-color="#f56c6c"
                  :icon="$kt.file.byPath('icon/yaoqingFillWrite.svg')"
      ></kt-nav-bar>
    </view>
    <view :style="'height: '+ktNavBarHeight+'px'"></view>
    <view style="position: relative">

    <image
        style="width: 100%"
        mode="widthFix"
        :src="$kt.file.byPath('image/invite_head.png')"></image>

        <button
            class="btn"
            open-type="share"
            style="
            position: absolute;
            bottom: 100rpx;
            left:50%;
            transform: translateX(-50%);
            box-shadow: 0 -10rpx 20rpx rgba(0,0,0,.6) inset;
            ;background-color: #f56c6c;color: #f0f0f0;border-radius: 60rpx;"
        >立即邀请</button>


    </view>

    <view class="content">

      <view style="height: 30rpx"></view>

      <view class="box">
        <view style="height: 30rpx"></view>
        <view style="font-size: 35rpx;text-align: center;font-weight: bold;">我的邀请收益</view>
        <view style="height: 30rpx"></view>
        <u-grid :col="2">
          <u-grid-item>
            <view  style="margin-bottom: 20rpx;text-align: center">
              <view style="color: #dd524d;font-size: bold;">
                <text style="font-size: 50rpx;">1</text><text style="font-size: 30rpx">人</text>
              </view>
              <view class="text-a">成功邀请</view>
            </view>
          </u-grid-item>
          <u-grid-item>
            <view  style="margin-bottom: 20rpx;text-align: center">
              <view style="color: #dd524d;font-size: bold;">
                <text style="font-size: 50rpx;">0</text><text style="font-size: 30rpx">积分</text>
              </view>
              <view class="text-a">邀请收益</view>
            </view>
          </u-grid-item>
        </u-grid>
      </view>
      <view style="height: 30rpx"></view>

      <view class="box">
        <view style="height: 30rpx"></view>
        <view style="font-size: 35rpx;text-align: center;font-weight: bold;">赚佣金奖励</view>
        <view style="height: 30rpx"></view>
        <view>
          <u-divider
          text="粉丝提成"
          text-size="30rpx"
          ></u-divider>
          <view
          style="width: 100%;border: 1rpx solid rgba(255,0,0,.6);border-radius: 20rpx;"
          >
            <view style="
            text-align: center;
            background-color: rgba(255,0,0,.1);
">
              <view
              style="padding: 20rpx;
            box-sizing: border-box;
            color: #f56c6c;"
              >
              <view
              style="font-size: 50rpx;"
              ><text>39%</text><text
              style="font-size: 35rpx;"
              >佣金</text></view>
              <view style="height: 10rpx"></view>
              <view
              style="color: #333333;font-size: 30rpx"
              ><text>粉丝每单奖励（预估）</text></view>
              </view>
            </view>
            <view
            style="font-size: 24rpx;padding: 20rpx;box-sizing: border-box;"
            >你的粉丝完成每一单任务订单，你都可以获得收益奖励</view>
          </view>
        </view>
        <view style="height: 30rpx;"></view>

        <view>
          <u-divider
              text="团队提成"
              text-size="30rpx"
          ></u-divider>
          <view
              style="width: 100%;border: 1rpx solid rgba(255,0,0,.6);border-radius: 20rpx;"
          >
            <view style="
            text-align: center;
            background-color: rgba(255,0,0,.1);
">
              <view
                  style="padding: 20rpx;
            box-sizing: border-box;
            color: #f56c6c;"
              >
                <view
                    style="font-size: 50rpx;"
                ><text>39%</text><text
                    style="font-size: 35rpx;"
                >佣金</text></view>
                <view style="height: 10rpx"></view>
                <view
                    style="color: #333333;font-size: 30rpx"
                ><text>粉丝每单奖励（预估）</text></view>
              </view>
            </view>
            <view
                style="font-size: 24rpx;padding: 20rpx;box-sizing: border-box;"
            >你的粉丝完成每一单任务订单，你都可以获得收益奖励</view>
          </view>
        </view>

      </view>
      <view style="height: 60rpx"></view>

      <button
          open-type="share"
      style="background-color: #f56c6c;color: #f0f0f0;border-radius: 60rpx;"
      >邀请好友赚佣金</button>

      <view style="height: 30rpx"></view>

      <button
          style="background-color: #f56c6c;color: #f0f0f0;border-radius: 60rpx;"
          @click="toCopy('CNNC')"
      >复制直属邀请码：CNNC</button>

      <view style="height: 150rpx"></view>
    </view>





  </view>
</template>

<script>
export default {
  data() {
    return {
      ktNavBarHeight: 0,
    };
  },
  mounted() {
    this.ktNavBarHeight = this.$refs.navBar.getHeight();
  },
  methods: {
    toRecharge() {
      this.$emit('toRecharge');
    },
    toCopy(text){
      uni.setClipboardData({
        data: text,
        success: function () {
          uni.showToast({
            title: '复制成功',
            icon: 'none'
          })
        }
      });
    }
  },
}
</script>

<style lang="scss" scoped>

.back {
  background-color: rgb(250,230,231);
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

.content {
  padding: 30rpx;
  box-sizing: border-box;
}

.box {
  background-color: #fff;
  padding: 0 30rpx 30rpx 30rpx;
  border-radius: 20rpx;
}

.vip-box {
  background-color: #1f1f1f;
  color: #fff;
  padding: 20rpx;
  box-sizing: border-box;
  font-size: 26rpx;
  border-radius: 20rpx;

  .vip-btn {
    background-color: #fff;
    padding: 10rpx;
    font-size: 26rpx;
    border-radius: 40rpx;
    text-align: center;
    color: #666666;
  }

  .vip-btn:active {
    background-color: #f0f0f0;
  }
}

.text-2 {
  font-size: 24rpx;
  color: #999999;
}

.line-1 {
  position: absolute;
  top: 0;
  right: 0;
  width: 10rpx;
  height: 100%;
  background-color: #f0f0f0;
}

.icon-a {
  width: 70rpx;
  height: 70rpx;
}


.text-a {
  font-size: 26rpx;
}

.btn:active {
  opacity: .9;
}

.btn1::after{ border: none;}

</style>
