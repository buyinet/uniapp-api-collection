<template>
  <view>
    <view class="back"></view>
    <view class="nav-bar-box">
      <kt-nav-bar title="影视会员"
                  ref="navBar"
                  :icon="$kt.file.byPath('icon/audioFill.svg')"
      ></kt-nav-bar>
    </view>
    <view :style="'height: '+ktNavBarHeight+'px'"></view>
    <view class="content">


      <view style="height: 30rpx"></view>

      <view class="box">
        <view style="height: 30rpx"></view>
        <view style="font-size: 35rpx;text-align: left;font-weight: bold;">充值会员</view>
        <view style="height: 30rpx"></view>
        <u-grid :col="4">
          <u-grid-item
              v-for="(item,index) in menu1"
              @click="$kt.util.navTo(item.path)"
          >
            <view  style="margin-bottom: 20rpx;text-align: center">
              <view>
                <image :src="$kt.file.byPath(item.icon)" class="icon-a"></image>
              </view>
              <view class="text-a">{{ item.text }}</view>
            </view>
          </u-grid-item>
        </u-grid>
        <view style="height: 10rpx"></view>

        <view style="font-size: 26rpx;">
          <u-grid :col="3">
            <u-grid-item>
              <view>
                <image
                    style="width: 30rpx;height: 30rpx"
                    :src="$kt.file.byPath('icon/jilu.svg')"></image>
                <view style="display: inline-block;vertical-align: top;margin-left: 5rpx">
                  充值记录
                </view>
              </view>
            </u-grid-item>
            <u-grid-item>
              <view>
                <image
                    style="width: 30rpx;height: 30rpx"
                    :src="$kt.file.byPath('icon/order.svg')"></image>
                <view style="display: inline-block;vertical-align: top;margin-left: 5rpx">
                  订单售后
                </view>
              </view>
            </u-grid-item>
            <u-grid-item>
              <button
                  open-type="contact"
                  session-from="sessionFrom"
                  style="border: none;background-color: rgba(0,0,0,0)"
                  size="mini"
              >
                <image
                    style="width: 30rpx;height: 30rpx"
                    :src="$kt.file.byPath('icon/customer.svg')"></image>
                <view style="display: inline-block;vertical-align: top;margin-left: 5rpx">
                  联系客服
                </view>
              </button>
            </u-grid-item>
          </u-grid>


        </view>
      </view>



    </view>

    <view style="height: 150rpx"></view>


  </view>
</template>

<script>
export default {
  data() {
    return {
      ktNavBarHeight: 0,
      menu1: [
        {
          icon: 'icon/logo/TencentVideo.svg',
          text: '腾讯视频',
          path: '/pages/order/orderList',
        },
        {
          icon: 'icon/logo/TencentVideo.svg',
          text: '腾讯视频',
          path: '/pages/order/orderList',
        },
        {
          icon: 'icon/logo/TencentVideo.svg',
          text: '腾讯视频',
          path: '/pages/order/orderList',
        },
        {
          icon: 'icon/logo/TencentVideo.svg',
          text: '腾讯视频',
          path: '/pages/order/orderList',
        },
        {
          icon: 'icon/logo/TencentVideo.svg',
          text: '腾讯视频',
          path: '/pages/order/orderList',
        },
        {
          icon: 'icon/logo/TencentVideo.svg',
          text: '腾讯视频',
          path: '/pages/order/orderList',
        },
        {
          icon: 'icon/logo/TencentVideo.svg',
          text: '腾讯视频',
          path: '/pages/order/orderList',
        },
        {
          icon: 'icon/logo/TencentVideo.svg',
          text: '腾讯视频',
          path: '/pages/order/orderList',
        },
      ],
    };
  },
  mounted() {
    this.ktNavBarHeight = this.$refs.navBar.getHeight();
  },
  methods: {
    toRecharge() {
      this.$emit('toRecharge');
    }
  },
}
</script>

<style lang="scss" scoped>

.back {
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
