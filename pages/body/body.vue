<template>
	<view>
    <scroll-view :style="'height: calc(100vh -'+tabbarHeight+'px);'"
    :scroll-y="true">
      <PageIndex
          @toRecharge="toRecharge"
          v-show="tabbarCodeOfSelected=='index'"></PageIndex>
      <PageRecharge v-show="tabbarCodeOfSelected=='recharge'"></PageRecharge>
    </scroll-view>
    <Tabbar ref="tabbar" id="tabbar" class="tabbar"
    @change="tabbarChange"
    ></Tabbar>
	</view>
</template>

<script>
  import Tabbar from "@/pages/body/components/Tabbar.vue";
  import PageIndex from "@/pages/body/pageComponents/PageIndex.vue";
  import PageRecharge from "@/pages/body/pageComponents/PageRecharge.vue";

	export default {
    components: {
      Tabbar,
      PageIndex,
      PageRecharge,
    },
		data() {
			return {
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
		methods: {
			tabbarChange(code){
        this.tabbarCodeOfSelected = code;
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
