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

  </view>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    toRecharge(){
      this.$emit('toRecharge');
    }
  }
}
</script>

<style lang="scss">
.grid{
  text-align: center;
  .icon {
    width: 70rpx;
    height: 70rpx;
  }
  .text{
    font-size: 28rpx;
    color: #333;
  }
}

</style>
