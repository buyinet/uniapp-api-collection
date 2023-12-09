<template>
  <view class="grid">
    <u-grid :col="4">
      <u-grid-item @click="toRecharge()">
        <view>
          <view>
            <image :src="$kt.file.byPath('icon/logo/phoneBill.svg')" class="icon"></image>
          </view>
          <view class="text">话费充值</view>
        </view>
      </u-grid-item>
      <u-grid-item>
        <view>
          <view>
            <image :src="$kt.file.byPath('icon/logo/expressDelivery.svg')" class="icon"></image>
          </view>
          <view class="text">寄快递</view>
        </view>
      </u-grid-item>

      <u-grid-item>
        <view>
          <view>
            <image :src="$kt.file.byPath('icon/logo/meituan.svg')" class="icon"></image>
          </view>
          <view class="text">美团返利</view>
        </view>
      </u-grid-item>
      <u-grid-item>
        <view>
          <view>
            <image :src="$kt.file.byPath('icon/logo/eleme.svg')" class="icon"></image>
          </view>
          <view class="text">饿了么返利</view>
        </view>
      </u-grid-item>
    </u-grid>

    <view style="height: 20rpx"></view>
    <u-grid :col="2">
      <u-grid-item>
        <view class="grid-2"
        @click="$kt.util.navTo('/pages/vip/activateVip')"
        >
          <u-row>
            <u-col :span="9">
              <view class="grid-2-title">开通会员</view>
              <view style="height: 10rpx"></view>
              <view class="grid-2-subtitle">会员尊享权益</view>
            </u-col>
            <u-col :span="3">
              <view class="icon-box">
                <image :src="$kt.file.byPath('icon/vip.svg')" class="icon"></image>
              </view>
            </u-col>
          </u-row>
        </view>
      </u-grid-item>
      <u-grid-item>
        <view class="grid-2"
              @click="$kt.util.navTo('/pages/vip/activatePartner')"
        >
          <u-row>
            <u-col :span="9">
              <view class="grid-2-title">升级合伙人</view>
              <view style="height: 10rpx"></view>
              <view class="grid-2-subtitle">收益预计提升200%</view>
            </u-col>
            <u-col :span="3">
              <view class="icon-box">
                <image :src="$kt.file.byPath('icon/partner.svg')" class="icon"></image>
              </view>
            </u-col>
          </u-row>
        </view>
      </u-grid-item>

    </u-grid>

  </view>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    toRecharge() {
      this.$emit('toRecharge');
    }
  }
}
</script>

<style lang="scss">
.grid {
  text-align: center;

  .icon {
    width: 70rpx;
    height: 70rpx;
  }

  .text {
    font-size: 28rpx;
    color: #333;
  }
}

.grid-2 {
  background-color: #f3f3f3;
  box-sizing: border-box;
  padding: 20rpx 30rpx 20rpx 30rpx;
  border-radius: 20rpx;
  .grid-2-title {
    font-weight: bold;
    font-size: 32rpx;
    color: #333;
  }

  .grid-2-subtitle {
    font-size: 24rpx;
    color: #666;
  }

  .icon-box{
  }
  .icon {
    width: 70rpx;
    height: 70rpx;
    border-radius: 55%;
  }
}

</style>
