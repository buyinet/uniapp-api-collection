<template>
  <view>
    <view class="back"></view>
    <self-user-info-card></self-user-info-card>

    <view class="content">
      <view style="height: 50rpx"></view>
      <view
          class="box"
      >
        <view style="height: 20rpx"></view>
        <view class="title title-border">会员权益</view>
        <view style="height: 20rpx"></view>
        <u-grid :col="2"
                align="center"
        >
          <u-grid-item
          v-for="(item,index) in vipRightsList"
          >
            <view class="grid">
              <view>
                <image :src="$kt.file.byPath(item.icon)" class="icon"></image>
              </view>
              <view class="text">{{ item.text }}</view>
              <view class="small-text">{{ item.smallText }}</view>
            </view>
          </u-grid-item>
        </u-grid>
        <view style="height: 30rpx"></view>
        <kt-button>￥{{acCommonStore.state.setting.vipPriceOfYear}}/年 立即开通</kt-button>
        <view style="height: 30rpx"></view>
        <view
            style="font-size: 28rpx;"
        >开通会员便默认同意
          <text style="font-weight: bold">《会员协议》</text>
        </view>
        <view style="height: 30rpx"></view>
      </view>

      <view style="height: 50rpx"></view>

      <view class="box">
        <view class="left-top-radius"></view>
        <view style="height: 20rpx"></view>
        <view class="title">会员尊享权益</view>
        <view style="height: 30rpx"></view>
        <view class="box-in"
        v-for="(item,index) in vipRightsList"
        >
          <u-row>
            <u-col :span="9">
              <view class="grid">
                <view class="text">{{item.text2}}</view>
                <view style="height: 20rpx"></view>
                <view class="small-text"
                style="font-size: 26rpx"
                >{{item.smallText2}}</view>
              </view>
            </u-col>
            <u-col :span="3">
              <view class="grid">
                <view>
                  <image :src="$kt.file.byPath(item.icon)" class="icon"></image>
                </view>
                <view class="text">{{item.text}}</view>
                <view class="small-text">{{ item.smallText }}</view>
              </view>
            </u-col>
          </u-row>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import text from "@/uni_modules/uview-ui/libs/config/props/text";
import acCommonStore from "@/store/modules/acCommon";

export default {
  computed: {
    text() {
      return text
    }
  },
  data() {
    return {
      acCommonStore,
      // 会员权益的list
      vipRightsList: [
        {
          icon: 'icon/partner.svg',
          text: '合伙人',
          smallText: '晋升条件',
          text2: '晋升资格',
          smallText2: '拥有晋升合伙人的资格，晋升后可获得更多团队佣金'
        },
        {
          icon: 'icon/discount.svg',
          text: '88折',
          smallText: '电影购票',
          text2: "会员尊享超低折扣",
          smallText2: "会员尊享超低折扣；电影票88折，话费93折，电费96.7折"
        },
        {
          icon: 'icon/score.svg',
          text: '加量',
          smallText: '分享佣金加量',
          text2: "分享佣金加量",
          smallText2: "每单分享成功收益提升200%"
        }
      ]
    };
  }
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

.content {
  padding: 0 20rpx 20rpx 20rpx;
  box-sizing: border-box;
}

.box {
  position: relative;
  background-color: #FFFFFF;
  padding: 20rpx;
  text-align: center;
  border-radius: 30rpx;

  .title {
    font-size: 35rpx;
    color: #333;
    font-weight: bold;
  }

  .left-top-radius{
    position: absolute;
    background-color: #000000;
    width: 60rpx;
    height: 60rpx;
    border-radius: 30rpx 0 30rpx 0;
    left: 0;
    top:0;
  }

  .box-in{
    background-color: #f3f3f3;
    box-sizing: border-box;
    padding: 20rpx;
    border-radius: 20rpx;
    margin-bottom: 30rpx;
  }
}

.grid {
  text-align: center;

  .icon {
    width: 100rpx;
    height: 100rpx;
    border-radius: 55%;
  }

  .text {
    font-size: 28rpx;
    color: #333;
  }

  .small-text {
    font-size: 20rpx;
    color: #999;
  }
}

</style>
