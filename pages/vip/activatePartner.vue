<template>
  <view>
    <view class="back"></view>
    <self-user-info-card></self-user-info-card>
    <view style="background-color: #FFFFFF;">
      <u-grid :col="3">
        <u-grid-item>
          <view class="grid">
            <view>
              <text style="font-weight: bold;">1<text style="font-size: 24rpx">人</text></text>
            </view>
            <view class="text">直邀粉丝</view>
          </view>
        </u-grid-item>
        <u-grid-item>
          <view class="grid">
            <view>
              <text style="font-weight: bold;">1<text style="font-size: 24rpx">人</text></text>
            </view>
            <view class="text">间邀粉丝</view>
          </view>
        </u-grid-item>
        <u-grid-item>
          <view class="grid">
            <view>
              <text style="font-weight: bold;">0<text style="font-size: 24rpx">积分</text></text>
            </view>
            <view class="text">团队佣金</view>
          </view>
        </u-grid-item>
      </u-grid>
      <view style="height: 20rpx"></view>
      <view style="padding: 20rpx;box-sizing: border-box">
        <view class="uu"
        @click="$refs.userInfoCardPopup.open()"
        >
          <u-row>
            <u-col :span="11">
              我的邀请人：131****1234
            </u-col>
            <u-col :span="1">
              <view class="text">
                <u-icon name="arrow-right" size="30rpx"></u-icon>
              </view>
              </u-col>
          </u-row>
        </view>
      </view>
    </view>
    <view style="height: 40rpx;background-color: #f0f0f0;"></view>
    <view class="content">
      <view class="box"
      style="min-height: calc(100vh - 430rpx);border-radius: 60rpx 0 0 0;"
      >
        <view class="left-top-radius"></view>
        <view style="height: 20rpx"></view>
        <view class="title">身份权益</view>
        <view style="height: 60rpx"></view>
        <u-subsection
            font-size="30rpx"
            active-color="#000"
            :list="subsectionList" :current="subsectionCurNow" @change="subsectionChange"></u-subsection>
        <view style="height: 60rpx"></view>
        <view style="border: 1rpx solid #999999;padding:20rpx;border-radius: 20rpx;">
          <view style="height: 20rpx"></view>
          <view
          v-for="(item,index) in list[subsectionCurNow]"
          >
          <u-row>
            <u-col :span="1.5">
              <view class="icon-box" style="text-align: center">
                <image :src="$kt.file.byPath(item.icon)" class="icon-1"></image>
              </view>
            </u-col>
            <u-col :span="2.5">
              <view style="position: relative;width: 100%;">
                <view style="font-size: 26rpx;">{{item.title}}</view>
                <view class="line-1"></view>
              </view>
            </u-col>
            <u-col :span="8">
              <view style="text-align: left;padding-left: 20rpx;font-size: 24rpx;box-sizing: border-box;">
                <view style="font-size: 30rpx;color: #666666">{{item.text}}</view>
              </view>
            </u-col>
          </u-row>
          <view style="height: 30rpx"></view>

          </view>


        </view>

        <view style="height: 30rpx;"></view>
        <view style="text-align: left"
        v-if="subsectionCurNow == 0"
        >
          <view style="font-size: 35rpx;color:#000000;">升级条件</view>
          <view style="height: 20rpx;"></view>
          <view style="font-size: 28rpx;color:#666666;">
            <text>1、当前是会员</text>
            <text style="float: right;color: #f56c6c">未完成</text>
          </view>
          <view style="height: 20rpx;"></view>
          <view style="font-size: 28rpx;color:#666666;">
            <text>2、你的直邀粉丝中，开通了会员的人数≥20人</text>
            <text style="float: right;color: #f56c6c">未完成</text>
          </view>
          <view style="height: 20rpx;"></view>
          <view style="font-size: 28rpx;color:#666666;">
            <text>3、你的团队粉丝中，开通了会员的人数≥100人</text>
            <text style="float: right;color: #f56c6c">未完成</text>
          </view>
          <view style="height: 20rpx;"></view>
          <view style="font-size: 28rpx;color:#666666;">
            <text>4、合伙人可以邀请下级升级合伙人，也可以联系官方客服开通合伙人</text>
            <text style="float: right;color: #f56c6c">未完成</text>
          </view>

        </view>
        <view style="text-align: left"
              v-if="subsectionCurNow == 1"
        >
          <view style="font-size: 35rpx;color:#000000;">升级条件</view>
          <view style="height: 20rpx;"></view>
          <view style="font-size: 28rpx;color:#666666;">
            <text>1、当前是会员</text>
            <text style="float: right;color: #f56c6c">未完成</text>
          </view>
          <view style="height: 20rpx;"></view>
          <view style="font-size: 28rpx;color:#666666;">
            <text>2、你的直邀粉丝中，“合伙人”+“高级合伙人”数量≥10人</text>
            <text style="float: right;color: #f56c6c">未完成</text>
          </view>
          <view style="height: 20rpx;"></view>
          <view style="font-size: 28rpx;color:#666666;">
            <text>4、高级合伙人可以邀请下级升级高级合伙人，也可以联系官方客服开通高级合伙人</text>
            <text style="float: right;color: #f56c6c">未完成</text>
          </view>
        </view>

        <view style="height: 60rpx"></view>
        <kt-button
        >升级合伙人</kt-button>
        <view style="height: 60rpx"></view>

        <kt-button
            open-type="contact"
            session-from="sessionFrom"
        >联系客服，升级合伙人</kt-button>
        <view style="height: 30rpx"></view>
        <view style="height: 60rpx"></view>

      </view>

    </view>
    <view
    style="
    position: fixed;
    background-color: #FFFFFF;
    bottom: 0;
    left: 0;
    height: 100rpx;
    width: 100vw;
    z-index: -1;"
    ></view>

    <user-info-card-popup
    ref="userInfoCardPopup"
    ></user-info-card-popup>

    </view>
</template>

<script>
import text from "@/uni_modules/uview-ui/libs/config/props/text";

export default {
  computed: {
    text() {
      return text
    }
  },
  data() {
    return {
      subsectionList: ['合伙人','高级合伙人'],
      subsectionCurNow: 0,
      list:[[
        {
          icon:"icon/discount.svg",
          title:"直属佣金",
          text:"享直接好友每单39%返佣"
        },
        {
          icon:"icon/discount.svg",
          title:"二级佣金",
          text:"享间接好友每单5%返佣"
        },
        {
          icon:"icon/invite.svg",
          title:"邀请好友",
          text:"邀请好友赚佣金奖励"
        },
        {
          icon:"icon/customer.svg",
          title:"客服导师",
          text:"手把手带你月入过万"
        }],
        [
          {
            icon:"icon/discount.svg",
            title:"直属佣金",
            text:"享直接好友每单55%返佣"
          },
          {
            icon:"icon/discount.svg",
            title:"二级佣金",
            text:"享间接好友每单10%返佣"
          },
          {
            icon:"icon/discount.svg",
            title:"团队奖励",
            text:"享下属整个团队的奖励"
          },
          {
            icon:"icon/invite.svg",
            title:"邀请好友",
            text:"邀请好友赚佣金奖励"
          },
          {
            icon:"icon/customer.svg",
            title:"客服导师",
            text:"手把手带你月入过万"
          },
          {
            icon:"icon/official.svg",
            title:"官方合作",
            text:"参与平台发展共创未来"
          }
        ]
      ]
    };
  },
  methods: {
    subsectionChange(e){
      this.subsectionCurNow = e;
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

.content {
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
    width: 100rpx;
    height: 100rpx;
    border-radius: 60rpx 0 60rpx 0;
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
    font-size: 26rpx;
    color: #333;
  }

  .small-text {
    font-size: 20rpx;
    color: #999;
  }
}

.uu{
  font-size: 30rpx;
  color: #666666;
  margin-bottom: 20rpx;
  background-color: #f0f0f0;
  padding: 20rpx;
  border-radius: 20rpx;
}

.uu:active{
  opacity: .9;
}

.icon-1{
  width: 50rpx;
  height: 50rpx;
  border-radius: 55%;
}

.line-1{
  position: absolute;
  top: 0;
  right: 0;
  width: 10rpx;
  height: 100%;
  background-color: #f0f0f0;
}

</style>
