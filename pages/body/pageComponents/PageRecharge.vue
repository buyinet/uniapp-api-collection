<template>
  <view>
    <view class="back"></view>
    <view class="content">

      <view class="nav-bar-box">
        <kt-nav-bar title="充值"
                    ref="navBarIndex"
                    :icon="$kt.file.byPath('icon/communityFill.svg')"
        ></kt-nav-bar>
      </view>
      <view :style="'height: '+ktNavBarHeight+'px'"></view>

      <view class="box">
        <view style="font-size: 35rpx;font-weight: bold">
          充值公告
        </view>
        <view style="height: 20rpx"></view>
        <view style="font-size: 28rpx;color: #666666;">
          <view>1、充值后，如果有人冒充官方打电话，一定不要理会，直接挂电话，谨防上当！</view>
          <view style="height: 20rpx"></view>
          <view>2、充值电费金额必须大于欠费金额，否则会导致充值失败！</view>
        </view>
      </view>

      <view style="height: 30rpx"></view>

      <view class="box">
        <u-row>
          <u-col :span="6">
            <view
            style="font-size: 40rpx;font-weight: bold;"
            >话费&电费充值</view>
          </u-col>
          <u-col :span="6">
            <view style="text-align: right">
              <view class="m-box">
                <view class="m m1"
                      @click="mSelect('phoneBill')"
                      :style="mSelected == 'phoneBill' ? 'background-color: #333;color: #fff;' : ''"
                >话费
                </view>
                <view class="m m2"
                      @click="mSelect('electricityBill')"
                      :style="mSelected == 'electricityBill' ? 'background-color: #333;color: #fff;' : ''"
                >电费
                </view>
              </view>
            </view>
          </u-col>
        </u-row>


        <view v-show="mSelected == 'phoneBill'">

          <view style="height: 20rpx"></view>
          <view>
            <input placeholder="输入手机号码"
                   style="font-size: 50rpx;height: 70rpx"
                   border-style="none"></input>
          </view>
          <view style="height: 20rpx"></view>
          <view>
            <text style="color: #333333;font-size: 32rpx">充值套餐</text>
            <text style="color:#666666;font-size: 28rpx;margin-left: 20rpx">不同的套餐到账时间和优惠折扣不同</text>
          </view>
          <view>
            <scroll-view
                style="width: 100%"
                scroll-x
                :show-scrollbar="false"
            >
              <view
                  style="white-space: nowrap;"
                  :show-scrollbar="false"
              >
                <view
                    class="r-box"
                    v-for="item in 10">
                  <view class="r-box-discount">9.4折</view>
                  <view style="height: 30rpx"></view>
                  0-24H到账
                  <view style="height: 20rpx"></view>
                </view>
              </view>

            </scroll-view>

            <view style="height: 30rpx"></view>

            <u-grid :col="3">
              <u-grid-item
                  v-for="item in 4"
              >

                <view class="r-box"
                      style="width: 92%;box-sizing: border-box;text-align: center;margin: 0 4% 30rpx 4%">
                  <view
                      class="r-box-discount"
                  >9.4折
                  </view>
                  <view style="height: 30rpx"></view>
                  <view style="font-size: 40rpx">50
                    <text style="font-size: 30rpx;margin-left: 5rpx">元</text>
                  </view>
                  <view style="font-size: 24rpx;color:#666666">售价：48.5元</view>
                  <view style="height: 20rpx"></view>
                </view>

              </u-grid-item>

            </u-grid>

            <view style="height: 20rpx"></view>

            <view
                v-if="true"
                style="opacity: .6">
              <kt-button>未选择</kt-button>
            </view>
            <view v-else>
              <kt-button>充值</kt-button>
            </view>

            <view style="color:#f56c6c;padding: 20rpx;font-size: 24rpx;text-align: center;"
            >虚拟运营商号码、副卡等特殊号码不支持充值，特别紧急的，马上要停机的号码，建议不要充值
            </view>

          </view>


        </view>

        <view v-show="mSelected == 'electricityBill'">
          <view class="m-f-box">

            <view class="m-label">
              缴费单位
            </view>
            <view>
              <u-radio-group active-color="#000" icon-size="28rpx">
                <u-radio>
                  <view class="m-radio">
                    国家电网
                  </view>
                </u-radio>
              </u-radio-group>
            </view>
          </view>

          <view class="m-f-box">

            <view class="m-label">
              缴费信息
            </view>
            <view>
              <u-radio-group active-color="#000" icon-size="28rpx">
                <u-radio class="m-radio">
                  <view class="m-radio">
                    住宅
                  </view>
                </u-radio>
                <u-radio>
                  <view class="m-radio">
                    店铺
                  </view>
                </u-radio>
                <u-radio class="m-radio">
                  <view class="m-radio">
                    企事业
                  </view>
                </u-radio>
              </u-radio-group>
            </view>
          </view>

          <view style="height: 30rpx"></view>

          <view class="m-f-box">

            <view class="m-f-box-input">
              <u-row>
                <u-col :span="3">
                  <view class="m-f-box-input-label">
                    填写户号
                  </view>
                </u-col>
                <u-col :span="6">
                  <input placeholder="输入户号" class="m-f-box-input-input"></input>
                </u-col>
                <u-col :span="3">
                  <view
                      class="account-number-prompt"
                      @click="accountNumberPromptPopupOpen"
                      style="font-size: 24rpx;color: #f56c6c;">
                    如何查户号？
                  </view>
                </u-col>
              </u-row>
            </view>


            <view style="height: 30rpx"></view>


            <view class="m-f-box-input">
              <u-row>
                <u-col :span="3">
                  <view class="m-f-box-input-label">
                    选择城市
                  </view>
                </u-col>
                <u-col :span="8.5">
                  <location-tab></location-tab>
                </u-col>
              </u-row>
            </view>


            <view style="height: 30rpx"></view>

            <view class="m-f-box-input">
              <u-row>
                <u-col :span="3">
                  <view class="m-f-box-input-label">
                    输入手机号
                  </view>
                </u-col>
                <u-col :span="8.5">
                  <input placeholder="输入户号" class="m-f-box-input-input"></input>
                </u-col>
              </u-row>
            </view>

            <view style="height: 30rpx"></view>


            <view class="m-f-box">

              <view class="m-label">
                缴费金额
              </view>
              <u-grid :col="3">
                <u-grid-item
                    v-for="item in 4"
                >

                  <view class="r-box"
                        style="width: 92%;box-sizing: border-box;text-align: center;margin: 0 4% 30rpx 4%">
                    <view
                        class="r-box-discount"
                    >9.4折
                    </view>
                    <view style="height: 30rpx"></view>
                    <view style="font-size: 40rpx">50
                      <text style="font-size: 30rpx;margin-left: 5rpx">元</text>
                    </view>
                    <view style="font-size: 24rpx;color:#666666">售价：48.5元</view>
                    <view style="height: 20rpx"></view>
                  </view>

                </u-grid-item>

              </u-grid>
            </view>

            <view style="height: 20rpx"></view>

            <view
                v-if="true"
                style="opacity: .6">
              <kt-button>未选择</kt-button>
            </view>
            <view v-else>
              <kt-button>充值</kt-button>
            </view>

            <view style="color:#f56c6c;padding: 20rpx;font-size: 24rpx;text-align: center"
            >慢充服务，最晚72小时到账。
            </view>

          </view>


        </view>

      </view>

      <view v-show="mSelected == 'phoneBill'">


        <view style="height: 30rpx;"></view>

        <view class="box">
          <view style="font-size: 35rpx;font-weight: bold">
            话费充值规则
          </view>
          <view style="height: 20rpx"></view>
          <view
              style="font-size: 28rpx;color: #f56c6c;"
          >如果话费在“充值中”状态下，有羊毛党冒充官方打电话让客户自己充，说渠道会退钱。告诉客户，一定不要自己充，充值期间无论什么情况都不要在其他渠道，包括自己去充，这种没有售后的，谨记!!
          </view>
          <view style="height: 20rpx"></view>
          <view style="font-size: 28rpx;color: #666666;">
            <view>1、下单后充值手机号码无法修改，如因手机号码填写错误，由用户自行承担，务必准确填写。</view>
            <view style="height: 20rpx"></view>
            <view>2、不能多个第三方渠道同时充值，非充值请联系客服申请撤单，成功以后再自行充值。 请一定确认后再下单，否
              则出现问题不予售后，不予退款，敬请谅解!
            </view>
            <view style="height: 20rpx"></view>
            <view>3、产品不含票，具体以登录对应运营商营业厅APP为准。
              充值存在一定失败率，如遇充值失败请联系客服确认问题后可再次下单!
            </view>
            <view style="height: 20rpx"></view>
            <view>4、部分订单到账有延迟，可能会在显示成功后24小时内到账，24小时还未到账的，找客服售后处理!</view>
            <view style="height: 20rpx"></view>
            <view>
              5、如果话费在“充值中”状态下，有羊毛党冒充官方打电话让客户自己充，说渠道会退钱。告诉客户，一定不要自己充，充值期间无论什么情况都不要在其他渠道，包括自己去充，这种没有售后的，谨记!!
            </view>
          </view>
          <view style="height: 20rpx"></view>
          <view
              style="font-size: 28rpx;color: #f56c6c;"
          >
            禁虚拟号，空号，错号，停机，集团号，副卡，合账号!
            返销不赔付! 提交无售后!
          </view>

        </view>
      </view>


      <view v-show="mSelected == 'electricityBill'">


        <view style="height: 30rpx;"></view>

        <view class="box">
          <view style="font-size: 35rpx;font-weight: bold">
            电费充值规则
          </view>
          <view style="height: 20rpx"></view>
          <view
              style="font-size: 28rpx;color: #f56c6c;"
          >充值时请认真核对用电户号和所属省份，如因填错用电户号导致充值不到账或充错账户，造成损失的自行承担，平台概不负责，72小时左右到账，未到账用户可申请退款处理。
          </view>
          <view style="height: 20rpx"></view>
          <view style="font-size: 28rpx;color: #666666;">
            <view>1.充值时请认真核对用电户号和所属省份，如因填错用电户号导致充值不到账或充错账户，造成损失的自行承担平台概不负责!</view>
            <view style="height: 20rpx"></view>
            <view>2.充值前请先查询，缴费金额必须大于欠费金额，可在网上国网APP/支付宝/微信: 生活缴费供电余额查询。
            </view>
            <view style="height: 20rpx"></view>
            <view>3、产品不含票，具体以登录对应运营商营业厅APP为准。充值存在一定失败率，如遇充值失败请联系客服确认问题后可再次下单!</view>
          </view>

        </view>
      </view>

    </view>




    <view style="height: 30rpx;"></view>
    <view style="height: 120rpx"></view>

    <account-number-prompt-popup
    ref="accountNumberPromptPopup"
    ></account-number-prompt-popup>

  </view>
</template>

<script>
export default {
  data() {
    return {
      ktNavBarHeight: 0,
      /**
       * 选中的菜单
       * 话费：phoneBill
       * 电费：electricityBill
       */
      mSelected: "phoneBill",
    };
  },
  mounted() {
    this.ktNavBarHeight = this.$refs.navBarIndex.getHeight();
  },
  methods: {
    mSelect(code) {
      this.mSelected = code;
    },
    accountNumberPromptPopupOpen(){
      this.$refs.accountNumberPromptPopup.open();
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
}

.box {
  background-color: #FFFFFF;
  padding: 30rpx;
  border-radius: 20rpx;
}

.m-box {
  background-color: #fff;
  margin: 0;
  padding: 0;
  display: inline-block;

  .m {
    display: inline-block;
    font-size: 32rpx;
    color: #333;
    width: 50%;
    padding: 10rpx 20rpx;
    border: 1rpx solid #333;
    box-sizing: border-box;
    // 文字间距
    letter-spacing: 2rpx;
    margin: 0;
  }

  .m1 {
    border-radius: 30rpx 0 0 30rpx;
  }

  .m2 {
    border-radius: 0 30rpx 30rpx 0;
  }
}

.r-box {
  position: relative;
  display: inline-block;
  margin: 20rpx;
  border: 3rpx solid #999999;
  padding: 20rpx;
  color: #333333;
  border-radius: 20rpx;

  .r-box-discount {
    position: absolute;
    top: 0;
    left: 0;
    font-size: 24rpx;
    border-radius: 20rpx 0 20rpx 0;
    padding: 5rpx 10rpx 5rpx 10rpx;
    background-color: #bbbbbb;
  }
}

.m-label {
  font-size: 28rpx;
  color: #666666;
  margin-top: 20rpx;
  margin-bottom: 10rpx;
}

.m-f-box {
  width: 100%;
  margin-bottom: 20rpx;

  .m-f-box-input {
    font-size: 35rpx;
    padding-bottom: 20rpx;
    border-bottom: 2rpx solid #999999;

    .m-f-box-input-label {
      font-size: 28rpx;
    }
  }
}

.m-radio {
  margin-right: 20rpx;
}

.account-number-prompt:active{
  transform: scale(0.9);
}
</style>
