<template>
  <view
      @click="openLbsPopup"
      class="location-box">
    <view class="location-icon">
      <u-icon name="map-fill" size="40rpx"></u-icon>
    </view>
    <!-- 显示二级行政区，如果没有显示一级行政区 -->

    <view v-if="hasLocationAuth">
      <view class="location-text"
            v-if="adInfo.adlv3&&adlv>=3">
        {{ adInfo.adlv2.name }}
      </view>
      <view class="location-text"
            v-else-if="adInfo.adlv2&&adlv>=2">
        {{ adInfo.adlv2.name }}
      </view>
      <view class="location-text" v-else-if="adInfo.adlv1&&adlv>=1">
        {{ adInfo.adlv1.name }}
      </view>
      <view class="location-text" v-else>
        选择位置
      </view>
    </view>
    <view v-else>
      <view class="location-text"
      style="font-size: 28rpx;"
            @click="chooseLocation"
      >
        选择位置
      </view>
    </view>

    <lbs-popup
        :has-adlv="adlv"
        ref="lbsPopup"></lbs-popup>

  </view>
</template>

<script>
export default {
  props: {
    // 是否显示二级行政区
    adlv: {
      type: Number,
      default: 3
    }
  },
  data() {
    return {
      adInfo: {},
      // 是否拥有定位权限
      hasLocationAuth: true,
    };
  },
  mounted() {
    this.getLocation();
  },
  methods: {
    openLbsPopup() {
      this.$refs.lbsPopup.open();
    },
    // 选择行政区
    chooseLocation() {
      this.$refs.lbsPopup.open();
    },
    // 获取行政区
    getAdInfo(lng, lat) {
      // 获取本地存储的行政区
      const adInfoSelf = uni.getStorageSync('adInfoSelf');
      // 获取本地存储的行政区时间
      const adInfoTimeSelf = uni.getStorageSync('adInfoTimeSelf');

      // 如果本地存储的行政区存在，并且时间小于3分钟
      if (adInfoSelf && new Date().getTime() - adInfoTimeSelf < 3 * 60 * 1000) {
        this.adInfo = JSON.parse(adInfoSelf);
        return;
      }

      this.$request({
        url: '/api-lbs/ad/getByLngAndLat',
        method: 'post',
        data: {
          lng,
          lat
        },
        stateSuccess: (res) => {
          console.log(res);
          this.adInfo = res.data;
          // 存储到本地
          uni.setStorageSync('adInfoSelf', JSON.stringify(res.data));
          // 存储时间
          uni.setStorageSync('adInfoTimeSelf', new Date().getTime());
        },
        stateFail: (res) => {
        }
      })
    },
    // 获取经纬度
    getLocation() {
      uni.getLocation({
        success: (res) => {
          console.log(res);
          // 经度
          const lng = res.longitude;
          // 纬度
          const lat = res.latitude;
          this.getAdInfo(lng, lat);
          // 拥有定位权限
          this.hasLocationAuth = true;
        },
        fail: (err) => {
          if (err.errMsg.indexOf("getLocation:fail auth deny")!=-1) {
            uni.showToast({
              title: '请开启定位权限',
              icon: 'none',
              duration: 2000
            });
            // 没有定位权限
            this.hasLocationAuth = false;
          }
        }
      });
    },
  },
}
</script>

<style lang="scss" scoped>
.location-box {
  position: relative;
  display: inline-block;
  margin: 0;
  padding: 0;

  .location-text {
    position: relative;
    font-size: 32rpx;
    color: #333;
    padding-left: 50rpx;
    vertical-align: top;
  }

  .location-icon {
    color: #333;
    position: absolute;
    left: 0;
    top: 0;
  }
}
</style>
