<template>
	<view class="content" 
	@click="contentClick()"
	:style="(isBorderBottom?'':'border-bottom:none;')+(isBorderTop?'':'border-top:none')">
		<view style="display: inline-block;">{{text}}</view>
		<image
			v-if="!hasSlot('slotValue')"
			style="height: 50rpx;width: 50rpx;position: absolute;right: 40rpx;z-index:1;top:50%;transform: translateY(-50%);"
			src="/static/kantboot/icon/right_gray.svg"></image>
			
		<view style="position: absolute;right: 40rpx;z-index:1;top:50%;transform: translateY(-50%);">
			<slot name="slotValue"></slot>
		</view>
		
	</view>
</template>

<script>
	export default {
		props: {
			isBorderBottom:{
				type:Boolean,
				default:true
			},
			isBorderTop:{
				type:Boolean,
				default:true
			},
			slotValue:{
				type:Object,
				default:null
			},
			toPage:{
				type:String,
				default:""
			},
			text:{
				type:String,
				default:""
			}
		},
		data() {
			return {
				backClass: ""
			}
		},
		mounted() {
			console.log(this.hasSlot("slotValue"));
		},
		methods: {
			contentClick(){
				this.$emit("click");
				if(this.toPage!=""&&this.toPage!=null){
					uni.navigateTo({
						url:this.toPage
					})
				}
			},
			hasSlot(name) {
			      return !!this.$slots[name];
			},
		}
	}
</script>

<style lang="scss" scoped>
	.content {
		background-color: #fff;
		box-sizing: border-box;
		padding: 40rpx 30rpx 40rpx 30rpx;
		color: #555;
		font-size: 30rpx;
		position: relative;
		font-weight: 300;
		border-top: 1rpx solid #eee;
		border-bottom: 1rpx solid #eee;
		border: 1rpx solid #eee;
		margin: 40rpx 0 40rpx 0;
		border-radius: 20rpx;
	}
	
	.content:active {
		background-color: #eee;
		border-radius: 20rpx;
		margin: 30rpx 0 30rpx 0;
	}
</style>
