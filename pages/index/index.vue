<template>
	<view class="content">
	</view>
</template>

<script>
  import i18nStore from "@/store/modules/i18n";
  import userStore from "@/store/modules/user";
  import acCommonStore from "@/store/modules/acCommon";

	export default {
		data() {
			return {
        userStore,
        acCommonStore,
        ...i18nStore.state,
      }
		},
		onLoad() {
			uni.reLaunch({
				url:"/pages/login/login"
			})
		},
		methods: {

		}
	}
</script>

<style>

</style>
