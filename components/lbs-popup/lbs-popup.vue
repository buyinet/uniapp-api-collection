<template>
  <u-popup :show="show"
           mode="bottom"
           round="30rpx"
           @close="close" @open="open">

    <view style="height: 30rpx"></view>
    <view style="padding: 20rpx;font-size: 30rpx;">
      <text style="font-size: 29rpx;">当前位置：</text>
      <view
          class="location-box">
        <view class="location-icon">
          <u-icon name="map-fill" size="40rpx"></u-icon>
        </view>
        <!-- 显示二级行政区，如果没有显示一级行政区 -->

        <view class="location-text"
              style="font-size: 26rpx"
              v-if="hasLocationAuth&&adInfo">
          <text v-if="adInfo.adlv1" class="tt">{{ adInfo.adlv1.name }}</text>
          <text v-if="adInfo.adlv2" class="tt">{{ adInfo.adlv2.name }}</text>
          <text v-if="adInfo.adlv3" class="tt">{{ adInfo.adlv3.name }}</text>
        </view>
        <view v-else>
          <view class="location-text"
                style="font-size: 26rpx;">
            开启定位权限
          </view>
        </view>
      </view>

    </view>
    <view style="height: 30rpx"></view>


    <u-grid :col="hasAdlv">
      <u-grid-item>
        <scroll-view style="height: calc(100vh - 400rpx)"
                     scroll-y
        >
          <view style="text-align: center">
            <view v-for="(item,index) in  list"
                  class="btn-sel"
                  :style="lv1SelectIndex == index ? 'color: #000000;font-weight:bold;' : 'color: #666666;'"
                  @click="lv1Select(index)"
            >
              {{ item.name }}
            </view>
          </view>
        </scroll-view>
      </u-grid-item>
      <u-grid-item
      v-if="hasAdlv>=2"
      >
        <scroll-view style="height: calc(100vh - 400rpx)"
                     scroll-y
        >
          <view style="text-align: center">
            <view v-for="(item,index) in  list[lv1SelectIndex].children"
                  class="btn-sel"
                  :style="lv2SelectIndex == index ? 'color: #000000;font-weight:bold;' : 'color: #666666;'"
                  @click="lv2Select(index)"
            >
              {{ item.name }}
            </view>
          </view>
        </scroll-view>
      </u-grid-item>
      <u-grid-item
      v-if="hasAdlv>=3"
      >
        <scroll-view style="height: calc(100vh - 400rpx)"
                     scroll-y
        >
          <view style="text-align: center">
            <view v-for="(item,index) in  list[lv1SelectIndex].children[lv2SelectIndex].children"
                  :style="lv3SelectIndex == index ? 'color: #000000;font-weight:bold;' : 'color: #666666;'"
                  @click="lv3Select(index)"
                  class="btn-sel"
            >
              {{ item.name }}
            </view>
          </view>
        </scroll-view>
      </u-grid-item>
    </u-grid>

    <view style="height: 30rpx"></view>

    <!-- 确认和取消 -->
    <u-row>
      <u-col :span="2">
        <view
            @click="close"
            style="text-align: center;color: #666666;font-size: 28rpx;"
        >取消
        </view>
      </u-col>
      <u-col :span="10">
        <kt-button>确认</kt-button>
      </u-col>
    </u-row>

    <view style="height: 30rpx"></view>

  </u-popup>
</template>

<script>
export default {
  props: {
    hasAdlv: {
      type: Number,
      default: 3
    }
  },
  data() {
    return {
      show: false,
      list: [],
      adInfo: {},
      // 是否拥有定位权限
      hasLocationAuth: true,
      lv1SelectIndex: 0,
      lv2SelectIndex: 0,
      lv3SelectIndex: 0,
    };
  },
  mounted() {
    this.getAllHasChildren();
    this.getLocation()();
  },
  methods: {
    open() {
      this.show = true;
      this.lv1SelectIndex = 0;
      this.lv2SelectIndex = 0;
      this.lv3SelectIndex = 0;
    },
    close() {
      this.show = false;
      this.lv1SelectIndex = 0;
      this.lv2SelectIndex = 0;
      this.lv3SelectIndex = 0;
    },
    lv1Select(index) {
      this.lv1SelectIndex = index;
      this.lv2SelectIndex = 0;
      this.lv3SelectIndex = 0;
    },
    lv2Select(index) {
      this.lv2SelectIndex = index;
      this.lv3SelectIndex = 0;
    },
    lv3Select(index) {
      this.lv3SelectIndex = index;
    },
    /**
     * 获取所有行政区 /api-lbs/ad/getAllHasChildren
     */
    getAllHasChildren() {
      // 如果本地有数据，且没有过期，直接使用本地数据
      const adList = uni.getStorageSync('adList');
      const adListTime = uni.getStorageSync('adListTime');
      if (adList && adListTime && new Date().getTime() - adListTime < 1000 * 60 * 3 * 24) {
        this.list = JSON.parse(adList);
        return;
      }


      this.$request({
        url: '/api-lbs/ad/getAllHasChildren',
        method: 'post',
        data: {},
        cache: (res) => {
          console.log(res);
          this.list = res;
        },
        stateSuccess: (res) => {
          console.log(res);
          this.list = res.data;
          // 保存到本地一天
          uni.setStorageSync('adList', JSON.stringify(res.data));
          uni.setStorageSync('adListTime', new Date().getTime());
        },
        stateFail: (res) => {
        }
      })
    },
    // 选择行政区
    chooseLocation() {
      if (!this.hasLocationAuth) {
        // 前往开启定位权限
        uni.openSetting({
          success: (res) => {
            console.log(res);
            if (res.authSetting['scope.userLocation']) {
              // 拥有定位权限
              this.hasLocationAuth = true;
              this.getLocation();
            }
          }
        });
      }
    },
    // 获取行政区
    getAdInfo(lng, lat) {
      // 如果本地有数据，且没有过期，直接使用本地数据
      const adInfo = uni.getStorageSync('adInfoSelf');
      const adInfoTime = uni.getStorageSync('adInfoTimeSelf');
      if (adInfo && adInfoTime && new Date().getTime() - adInfoTime < 1000 * 60 * 3 * 24) {
        this.adInfo = JSON.parse(adInfo);
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
          if (err.errMsg.indexOf("getLocation:fail auth deny") != -1) {
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
  }
}
</script>

<style lang="scss" scoped>
.btn-sel {
  padding: 20rpx 0;
  border-bottom: 1px solid #f0f0f0;
  font-size: 26rpx;
}

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

.tt {
  margin: 5rpx;
}
</style>
