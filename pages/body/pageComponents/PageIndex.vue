<template>
  <view>
    <view class="back"></view>
    <view class="nav-bar-box">
      <kt-nav-bar title="首页"
                  ref="navBarIndex"
                  :icon="$kt.file.byPath('icon/indexFill.svg')"
      ></kt-nav-bar>
    </view>
    <view :style="'height: '+ktNavBarHeight+'px'"></view>

    <view class="content">

      <view class="box">
        <view style="height: 20rpx"></view>
        <ac-banner></ac-banner>
      </view>


      <view class="box">
        <ac-grid
        @toRecharge="toRecharge"
        ></ac-grid>
      </view>


      <ac-movie-front></ac-movie-front>

    </view>


  </view>
</template>

<script>
export default {
  data() {
    return {
      ktNavBarHeight: 0,
    };
  },
  mounted() {
    this.ktNavBarHeight = this.$refs.navBarIndex.getHeight();
  },
  methods: {
    toRecharge(){
      this.$emit('toRecharge');
    }
  },
}
</script>

<style lang="scss" scoped>

.back{
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

.content{
}

.box{
  background-color: #fff;
  padding: 0 30rpx 30rpx 30rpx;
}

</style>
