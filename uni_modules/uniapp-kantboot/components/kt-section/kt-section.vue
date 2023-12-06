<template>
	<view class="content"
	:style="style"
	>
		<view>
			<text class="title-text">{{title}}</text>
		</view>
		
		<view style="height: 20rpx;"></view>
		
		<view>
			<slot></slot>
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			title:{
				type:String,
				default:""
			},
			bgColor:{
				type:String,
				default:"#ffffff"
			},
			marginTop:{
				type:String,
				default:"30rpx"
			},
			marginBottom:{
				type:String,
				default:"30rpx"				
			},
			paddingTop:{
				type:String,
				default:"30rpx"				
			},
			paddingBottom:{
				type:String,
				default:"30rpx"				
			},
			paddingRight:{
				type:String,
				default:"30rpx"				
			},
			paddingLeft:{
				type:String,
				default:"30rpx"				
			},			
		},
		data() {
			return {
				style:""
			}
		},
		methods: {
			createStyle(){
				this.style=`background-color:${this.bgColor};margin-top: ${this.marginTop};margin-bottom: ${this.marginBottom};padding:${this.paddingTop} ${this.paddingRight} ${this.paddingBottom} ${this.paddingLeft}`;
			}
		},
		watch: {
			"title": {
				handler(newVal, oldVal) {
					this.createStyle();
				},
				deep: true,
				immediate: true
			},
			"bgColor": {
				handler(newVal, oldVal) {
					this.createStyle();
				},
				deep: true,
				immediate: true
			},
			"marginTop": {
				handler(newVal, oldVal) {
					this.createStyle();
				},
				deep: true,
				immediate: true
			},
			"marginBottom": {
				handler(newVal, oldVal) {
					this.createStyle();
				},
				deep: true,
				immediate: true
			},
			"paddingTop": {
				handler(newVal, oldVal) {
					this.createStyle();
				},
				deep: true,
				immediate: true
			},
			"paddingBottom": {
				handler(newVal, oldVal) {
					this.createStyle();
				},
				deep: true,
				immediate: true
			},
			"paddingRight": {
				handler(newVal, oldVal) {
					this.createStyle();
				},
				deep: true,
				immediate: true
			},
			"paddingLeft": {
				handler(newVal, oldVal) {
					this.createStyle();
				},
				deep: true,
				immediate: true
			},
		}
	}
</script>

<style scoped>
.content{
	box-sizing: border-box;
	background-color: #fff;
	margin-top: 30rpx;
	margin-bottom: 30rpx;
}
.title-text{
	color:#333;
	font-size: 30rpx;
	margin-left: 20rpx;
}
</style>
