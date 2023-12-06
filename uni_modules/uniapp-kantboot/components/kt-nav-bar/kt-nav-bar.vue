<template>
  <view>
    <view class="nav-bar-container" :style="{
            backgroundColor: backgroundColor,
            borderRadius: borderRadius
        }">
      <view class="status-bar" :style="{
                height: statusBarHeight + 'px'
            }">
      </view>

      <view class="nav-bar" :style="{
                height: navHeight + 'px'
            }">
        <!-- 如果有icon就显示icon，没有就显示返回 -->
        <template v-if="icon">
          <image class="nav-bar-back-icon"
                 :src="icon"></image>
        </template>
        <template v-else>
          <image :style="{
                    filter: highlight ? 'invert(100%)' : 'invert(0%)'
                }" v-if="isHasBack" @click="toBack()" class="nav-bar-back-icon"
                 :src="$kt.file.byPath('image/icon/exit.svg')"></image>

          <image v-if="!isHasBack" @click="toHome()" class="nav-bar-back-icon" :style="{
                    filter: highlight ? 'invert(100%)' : 'invert(0%)'
                }" style="width: 40rpx;height: 40rpx;border-radius: 55%;
                    transform: translateY(-50%)" :src="$kt.file.byPath('image/icon/exit.svg')"></image>
        </template>

        <text class="nav-bar-title"
              :style="{
                    color: highlight ? '#fff' : '#000'
                }"
        >
          {{ title }}
        </text>

        <!-- #ifdef MP-WEIXIN -->
        <view class="nav-bar-slot" :style="{
                    right: (menuButton.width - (-15)) + 'px',
                    top: 'calc(50% -'+' '+(slotHeight/2)+'px)'
                }"
              id="slot"
        >
          <slot></slot>
        </view>
        <!-- #endif -->


        <!-- #ifdef APP-PLUS -->
        <view class="nav-bar-slot" :style="{
                    right: '30rpx'
                }"
              id="slot"
        >
          <slot></slot>
        </view>
        <!-- #endif -->
      </view>
    </view>
    <view :style="'height:' + (statusBarHeight - (-navHeight) - 4) + 'px'"></view>
  </view>
</template>

<script>
export default {
  props: {
    // 高亮
    highlight: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: ''
    },
    backgroundColor: {
      type: String,
      default: '#fff'
    },
    icon: {
      type: String,
      default: ''
    },
    // 弧度
    borderRadius: {
      type: String,
      default: '0'
    },
  },
  data() {
    return {
      statusBarHeight: uni.getSystemInfoSync().statusBarHeight,
      navHeight: 48,
      // #ifdef MP-WEIXIN
      menuButton: wx.getMenuButtonBoundingClientRect(),
      // #endif
      isHasBack: false,
      slotHeight: 0,
    };
  },
  created() {
    this.navHeight = 44;
    // #ifdef MP-WEIXIN
    this.navHeight = uni.getSystemInfoSync().system.indexOf("ios") != -1 ? 44 : 48;
    // #endif

    // 判断是否还有上一页
    let pages = getCurrentPages();
    if (pages.length > 1) {
      this.isHasBack = true;
    } else {
      this.isHasBack = false;
    }


  },
  // 初始化
  mounted() {
    this.createSlotHeight();

  },

  methods: {
    createSlotHeight() {
      uni.createSelectorQuery().in(this).select('#slot').boundingClientRect((rect) => {
        this.slotHeight = rect.height;
        console.log(this.slotHeight);
      }).exec();
    },
    getHeight() {
      return this.statusBarHeight + this.navHeight;
    },
    toBack() {
      uni.navigateBack();
    },
    toHome() {
      uni.navigateTo({
        url: '/pages/body/static'
      });
    }
  },
}
</script>

<style lang="scss" scoped>
.nav-bar-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999;
}

.status-bar {
}

.nav-bar {
  position: relative;

  .nav-bar-back-icon {
    position: absolute;
    width: 45rpx;
    height: 45rpx;
    left: 20rpx;
    top: 50%;
    transform: translateY(-50%);
  }

  .nav-bar-back-icon:active {
    transform: scale(0.9) translateY(-50%);
  }

  .nav-bar-slot {
    position: absolute;
    // top: 50%;
    // transform: translateY(-50%);
  }

  .nav-bar-title {
    position: absolute;
    left: 72rpx;
    font-size: 36rpx;
    color: #000000;
    top: 50%;
    transform: translateY(-50%);
    // 文字间距
    // letter-spacing: 5rpx;
  }
}
</style>