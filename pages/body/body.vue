<template>
	<view>
    <scroll-view :style="'height: calc(100vh -'+tabbarHeight+'px);'"
    :scroll-y="true">
      <PageIndex
          @toRecharge="toRecharge"
          v-show="tabbarCodeOfSelected=='index'"></PageIndex>
      <PageRecharge v-show="tabbarCodeOfSelected=='recharge'"></PageRecharge>
      <PageMine v-show="tabbarCodeOfSelected=='mine'"></PageMine>
      <PageAudio v-show="tabbarCodeOfSelected=='audio'"></PageAudio>
      <PageInvite v-show="tabbarCodeOfSelected=='invite'"></PageInvite>
    </scroll-view>
    <Tabbar
      ref="tabbar" id="tabbar" class="tabbar"
    @change="tabbarChange"
    ></Tabbar>
	</view>
</template>

<script>
  import Tabbar from "@/pages/body/components/Tabbar.vue";
  import PageIndex from "@/pages/body/pageComponents/PageIndex.vue";
  import PageRecharge from "@/pages/body/pageComponents/PageRecharge.vue";
  import PageMine from "@/pages/body/pageComponents/PageMine.vue";
  import PageAudio from "@/pages/body/pageComponents/PageAudio.vue";
  import PageInvite from "@/pages/body/pageComponents/PageInvite.vue";
  import userStore from "@/store/modules/user";

	export default {
    components: {
      PageMine,
      Tabbar,
      PageIndex,
      PageRecharge,
      PageAudio,
      PageInvite,
    },
		data() {
			return {
        userStore,
        tabbarHeight: 0,
        tabbarCodeOfSelected: 'index',
        option: {},
			}
		},
		onLoad(option) {
			if(option.page){
				this.$refs.tabbar.select(option.page);
			}
      this.option = option;
		},
    mounted() {
      uni.createSelectorQuery().select('#tabbar').boundingClientRect((rect) => {
        this.tabbarHeight = rect.height;
      }).exec();

    },
    // 分享给微信好友
    onShareAppMessage() {
      return {
        title: '分享标题',
        path: '/pages/body/body?inviteCode=' + this.userStore.state.selfInfo.directCode,
        imageUrl: 'https://img.yzcdn.cn/vant/cat.jpeg',
      };
    },
		methods: {
			tabbarChange(code){
        this.tabbarCodeOfSelected = code;
        if(code == 'mine'||code == 'invite'){
          this.userStore.requestUserInfoSelf();
        }
      },
      toRecharge(){
        if(this.tabbarCodeOfSelected != 'index'){
          return;
        }
        this.$refs.tabbar.select('recharge');
      }
		}
	}
</script>

<style scoped>
.tabbar{
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 999;
}
</style>
