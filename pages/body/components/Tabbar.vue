<template>
  <view class="box">
    <view style="height: 20rpx"></view>
    <u-grid col="3">
      <u-grid-item
      @click="select('index')"
      >
        <view>
          <view>
            <image
                v-if="tabbarCodeOfSelected != 'index'"
                :src="$kt.file.byPath('icon/index.svg')" class="icon"></image>
            <image
                v-else
                :src="$kt.file.byPath('icon/indexFill.svg')" class="icon"></image>
          </view>
          <view>首页</view>
        </view>
      </u-grid-item>
      <u-grid-item
      @click="select('recharge')"
      >
        <view>
          <view>
            <image
                v-if="tabbarCodeOfSelected != 'recharge'"
                :src="$kt.file.byPath('icon/community.svg')" class="icon"></image>
            <image
                v-else
                :src="$kt.file.byPath('icon/communityFill.svg')" class="icon"></image>
          </view>
          <view>充值</view>
        </view>
      </u-grid-item>

      <u-grid-item
      @click="select('mine')">
        <view>
          <view>
            <image
                v-if="tabbarCodeOfSelected != 'mine'"
                :src="$kt.file.byPath('icon/mine.svg')" class="icon"></image>
            <image
                v-else
                :src="$kt.file.byPath('icon/mineFill.svg')" class="icon"></image>
          </view>
          <view>我的</view>
        </view>
      </u-grid-item>
    </u-grid>
    <view style="height: 20rpx"></view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      tabbarCodeOfSelected: 'index',
    }
  },
  methods: {
    select(code){
      this.tabbarCodeOfSelected = code;
      this.$emit('change', code);
      // 判断是否在/pages/body/body页面
      // 获取当前页面栈
      let pages = getCurrentPages();
      // 获取当前页面
      let currentPage = pages[pages.length - 1];
      // 获取当前页面的路由
      let url = currentPage.route;
      // 判断是否在/pages/body/body页面
      if(url == 'pages/body/body') {
        console.log('在body页面');
        currentPage.options.page = code;
      }
    }
  }
}
</script>

<style scoped lang="scss">
.box{
  text-align: center;
  font-size: 30rpx;
  box-sizing: border-box;
  background-color: #FFFFFF;
  color: #666666;
}

.icon{
  width: 50rpx;
  height: 50rpx;
}

</style>