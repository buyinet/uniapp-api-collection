<template>
  <view>
    <view class="back"></view>
    <view class="nav-bar-box">
      <kt-nav-bar title="我的"
                  ref="navBar"
                  :icon="$kt.file.byPath('icon/mineFill.svg')"
      ></kt-nav-bar>
    </view>
    <view :style="'height: '+ktNavBarHeight+'px'"></view>
    <view>
      <self-user-info-card></self-user-info-card>
      <view class="content"
            style="background-color: #fff;"
      >
        <view class="vip-box">
          <view style="height: 20rpx"></view>
          <u-row>
            <u-col :span="9">
              开通VIP会员尊享更多权益
            </u-col>
            <u-col :span="3">
              <view
                  @click="$kt.util.navTo('/pages/vip/activateVip')"
                  class="vip-btn"
              >立即开通
              </view>
            </u-col>
          </u-row>
          <view style="height: 20rpx"></view>
        </view>
      </view>
    </view>

    <view class="content">

      <!-- 我的账户 -->
      <view class="box">
        <view style="height: 20rpx"></view>
        <view class="box-title">
          <text style="float: left">
            我的账户
          </text>
          <view style="text-align: right">
            <text
                @click="$kt.util.navTo('/pages/account/detail')"
                style="color: #999999;font-size: 24rpx">查看明细</text>
          </view>
        </view>
        <view style="height: 20rpx"></view>
        <view style="text-align: center">
          <u-grid>
            <u-grid-item
                @click="$kt.util.navTo('/pages/account/detail')"
            >
              <view style="width: 100%;position: relative;">
                <view>
                  <text style="font-size: 35rpx">0</text>
                </view>
                <view class="text-2">积分余额</view>
                <view class="line-1"></view>
              </view>
            </u-grid-item>
            <u-grid-item>
              <view style="width: 100%;position: relative;">
                <view>
                  <text style="font-size: 35rpx">0</text>
                </view>
                <view class="text-2">冻结积分</view>
                <view class="line-1"></view>
              </view>
            </u-grid-item>
            <u-grid-item
                @click="$kt.util.navTo('/pages/account/detail')"
            >
              <view style="width: 100%;position: relative;">
                <view>
                  <text style="font-size: 35rpx">0</text>
                </view>
                <view class="text-2">可提现积分</view>
              </view>
            </u-grid-item>

          </u-grid>
        </view>
      </view>

      <view style="height: 30rpx"></view>

      <view class="box">
        <view style="height: 30rpx"></view>
        <u-grid :col="3">
          <u-grid-item
              v-for="(item,index) in menu1"
              @click="$kt.util.navTo(item.path)"
          >
            <view>
              <image :src="$kt.file.byPath(item.icon)" class="icon-a"></image>
            </view>
            <view class="text-a">{{ item.text }}</view>
          </u-grid-item>
        </u-grid>
      </view>

      <view style="height: 30rpx"></view>

      <view class="box"
      style="border: none;"
      >
        <view style="height: 30rpx"></view>
        <button
            v-for="(item,index) in menu2"
            size="mini"
            class="btn1"
            :open-type="item.openType"
            session-from="sessionFrom"
            @click="$kt.util.navTo(item.path)"
            style="position: relative;
            width: 100%;
            padding: 20rpx;
            height: 80rpx;
            border: 0 solid rgba(0,0,0,0);
            background-color: rgba(0,0,0,0);
            box-sizing: border-box;

">

          <view style="width: 100%">
            <image :src="$kt.file.byPath(item.icon)"
                   style="
                   position: absolute;
                   top: 50%;
                    left: 10rpx;
                    transform: translateY(-50%);
                   width: 40rpx;
                   height: 40rpx"
                   class="icon-a"></image>
            <view style="display: inline-block;
            position: absolute;
            top: 50%;
            left: 60rpx;
            transform: translateY(-50%);
            vertical-align: top;margin-left: 10rpx;">
              <view style="height: 5rpx"></view>
              <text class="text-a" style="text-align: left;font-size: 32rpx;">{{ item.text }}</text>
            </view>
            <view style="width: 40rpx;height: 40rpx;display: inline-block;vertical-align: top;float: right">
              <u-icon name="arrow-right" size="40rpx"></u-icon>
            </view>
          </view>

        </button>
        <view style="height: 30rpx;"></view>
        <view>
          <kt-button
              ref="logoutBtn"
          @click="logout"
          >退出登录</kt-button>
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
          icon: 'icon/order.svg',
          text: '我的订单',
          path: '/pages/order/orderList',
        },
        {
          icon: 'icon/fans.svg',
          text: '我的粉丝',
          path: '/pages/order/orderList',
        },
        {
          icon: 'icon/withdrawal.svg',
          text: '立即提现',
          path: '/pages/order/orderList',
        }
      ],
      menu2: [
        {
          icon: 'icon/vip.svg',
          text: '开通会员',
          path: '/pages/vip/activateVip',
        },
        {
          icon: 'icon/withdrawal.svg',
          text: '提现记录',
          path: '/pages/withdrawal/withdrawalRecord',
        },
        {
          icon: 'icon/customer.svg',
          text: '客服咨询',
          openType: 'contact',
        },
        {
          icon: 'icon/invite.svg',
          text: '邀请好友',
          openType: 'share',
        }
      ]
    };
  },
  mounted() {
    this.ktNavBarHeight = this.$refs.navBar.getHeight();
  },
  methods: {
    toRecharge() {
      this.$emit('toRecharge');
    },
    logout() {
      this.$refs.logoutBtn.loading();
      this.$request({
        url: '/system-user-web/user/logout',
        method: 'POST',
        stateSuccess: res => {
          uni.removeStorageSync('token');
          uni.removeStorageSync('userInfo');
          uni.reLaunch({
            url: '/pages/login/login'
          });
        }
      })
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
  width: 50rpx;
  height: 50rpx;
}


.text-a {
  font-size: 28rpx;
}

.btn:active {
  opacity: .9;
}

.btn1::after{ border: none;}

</style>
