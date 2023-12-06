<template>
	<view
  :style="{
    height:systemInfo.statusBarHeight+'px',
    'background-color':backgroundColor
  }"
  >
	</view>
</template>

<script>
	export default {
    props: {
      backgroundColor: {
        type: String,
        default: "#ffffff"
      }
    },
		data() {
			var systemInfo=uni.getSystemInfoSync();
			return {
				systemInfo
			}
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
