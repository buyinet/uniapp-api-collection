<template>
  <view>
    <view class="box">
      <view class="box-sc"
      style="position: relative"
      >
        <view class="title">
          积分余额
        </view>
        <view>
          <text
          style="font-size: 60rpx; color: #fff;"
          >{{userStore.state.selfInfo.balance.score}}</text>

          <view
              style="display: inline-block;padding: 5rpx 15rpx;background-color: #666666;color: #FFFFFF;
              font-size: 24rpx;
              border-radius: 20rpx;
              vertical-align: top;
              margin-top: 10rpx;
              margin-left: 20rpx;
                "
          >
            <text
            v-if="isCalculating"
            >计算中</text>
            <text
            v-else
            >约{{scoreToRmb}}元</text>
          </view>
        </view>

        <view style="height: 30rpx"></view>

        <view
        style="color: #f0f0f0;text-align: center;font-size: 24rpx;width: 100%"
        >
          <u-grid :col="3">
            <u-grid-item>
              <view>
                <view class="text-a">积分明细</view>
                <view style="height: 10rpx"></view>
                <view class="text-a"
                      style="font-size: 30rpx;"
                >0</view>
              </view>
            </u-grid-item>
            <u-grid-item>
              <view>
              <view class="text-a">可提现积分</view>
              <view style="height: 10rpx"></view>
              <view class="text-a"
                    style="font-size: 30rpx;"
              >0</view>
              </view>
            </u-grid-item>
            <u-grid-item>
              <view>
                <view class="text-btn">去提现</view>
              </view>
            </u-grid-item>
          </u-grid>
        </view>

        <view style="height: 70rpx"></view>
        <view style="background-color: rgba(118,118,118,.6);color:#FFFFFF;
position: absolute;bottom: 0;width: 100%;left:0;border-radius: 0 0 20rpx 20rpx;font-size: 26rpx;padding: 20rpx;box-sizing: border-box;
">
          汇率：{{acCommonStore.state.setting.moneyOfOneToScore}}积分=1元
        </view>

        <view style="height: 20rpx"></view>

      </view>
    </view>


    <view class="box"
    style="padding-bottom:0"
    >
      <u-grid :col="3">
        <u-grid-item>
          <view>积分收益</view>
        </u-grid-item>
        <u-grid-item>
          <view>积分提现</view>
        </u-grid-item>
        <u-grid-item>
          <view>积分消费</view>
        </u-grid-item>
      </u-grid>
    </view>

    <u-divider></u-divider>

    <view style="height: 100rpx"></view>

    <view style="text-align: center;color:#999999;">
      <view>
        <image :src="$kt.file.byPath('icon/empty.svg')"
               style="width: 200rpx;height: 200rpx;"></image>
      </view>
      <view>暂无数据</view>
    </view>

  </view>
</template>

<script>
import acCommonStore from "@/store/modules/acCommon";
import userStore from "@/store/modules/user";
export default {
  data() {
    return {
      acCommonStore,
      userStore,
      // 是否计算中
      isCalculating: false,
      // 积分余额对应的人民币
      scoreToRmb: 0,
    };
  },
  created() {
    this.getSelfBalanceScoreToRmb();
  },
  methods: {
    getSelfBalanceScoreToRmb(){
      this.isCalculating = true;
      this.$request({
        url: "/business-ac-web/ac/common/getSelfBalanceScoreToRmb",
        method: "POST",
        stateSuccess:(res)=>{
          this.scoreToRmb = res.data;
          this.isCalculating = false;
        }
      })
    }
  },
}
</script>

<style lang="scss" scoped>

.box{
  padding: 30rpx;
  box-sizing: border-box;
}

.box-sc{
  background-color: #333333;
  border-radius: 20rpx;
  box-shadow: 0 0 20rpx #eee;
  padding: 30rpx;
  .title{
    color: #fff;
  }

  .text-btn{
    color: #fff;
    font-size: 24rpx;
    padding: 10rpx 20rpx;
    border: 1rpx solid #fff;
    border-radius: 30rpx;
    text-align: center;
  }
}

</style>
