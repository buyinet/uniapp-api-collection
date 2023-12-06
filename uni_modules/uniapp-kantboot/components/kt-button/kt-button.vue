<template>
	<view>

		<view :class="'btn-view body-view '+status+'-status-body-view'" :style="style">
			<view class="box-shadow-view" :style="style+(!isOpenBoxShadow?'box-shadow:none':'')"></view>
			<view class="background-view" :style="style"></view>
			<view :class="'bg-color-view '+common+'-common-bg-color-view'" :style="style"></view>
			<view class="bg-color-view error-bg-color-view" :style="style"></view>

			<!-- start:无状态下的按钮 -->
			<button
			 @click="btnClick()" 
			@getuserinfo="getuserinfo"
			:openType="openType"
			:disable="disable"
			class="btn" v-if="status=='none'||status=='error-to-none'||status=='to-none'"
				:style="style"
			>
				<slot></slot>
			</button>
			<!-- end:无状态下的按钮 -->

			<!-- start:等待状态下的按钮 -->
			<button class="btn loading-btn" v-if="status=='loading'" :style="style">
				<view style="opacity: 0;">
					<slot></slot>
				</view>
				<image class="img-in-btn" mode="widthFix" :src="kt.file.byPath('kantboot/icon/loading.svg')"></image>
			</button>
			<!-- end:等待状态下的按钮 -->

			<!-- start:错误状态下的按钮 -->
			<button class="btn error-btn" v-if="status=='error'" :style="style">
				<text>{{errorText}}</text>
				<image class="img-in-btn" mode="widthFix" :src="kt.file.byPath('kantboot/icon/error.svg')"></image>
			</button>
			<!-- end:错误状态下的按钮 -->

			<!-- start:等待状态下的按钮 -->
			<button class="btn success-btn" v-if="status=='success'" :style="style">
				<text>{{successText}}</text>
				<image class="img-in-btn" mode="widthFix" :src="kt.file.byPath('kantboot/icon/success.svg')"></image>
			</button>
			<!-- end:等待状态下的按钮 -->

		</view>


	</view>
</template>

<script>
	import kt from '../../index.js';

	export default {
		props: {
			openType: {
				type: String,
				default: ""
			},
			/**
			 * 是否禁用
			 */
			disabled: {
				type: Boolean,
				default: false
			},

			/**
			 * 几种通用的配色
			 * 可选 black、red、yellow、blue
			 */
			common: {
				type: String,
				default: "black"
			},
			/**
			 * 按钮弧度
			 */
			borderRadius: {
				type: String,
				default: "60rpx"
			},
			/**
			 * 是否开启按钮阴影
			 */
			isOpenBoxShadow: {
				type: Boolean,
				default: true
			}

		},
		data() {
			return {
				kt,
				styleJson: {
					borderRadius: "60rpx",
					boxShadow: "",
				},
				style: null,
				status: "none",
				errorText: "",
				successText: ""
			}
		},
		mounted() {
			this.createStyle();
		},
		methods: {
			getuserinfo(e) {
				this.$emit("getuserinfo", e);
			},
			btnClick() {
				this.$emit("click");
			},
			/**
			 * 初始化一些不能被继承，但又统一的样式
			 * @param {Object} style
			 */
			createStyle() {
				this.style = `border-radius:${this.styleJson.borderRadius};`;
			},
			toNone(){
				this.status = "to-none";
			},
			loading(time) {
				time = time || 3000;
				this.status = "loading";
				setTimeout(() => {
					if (!this.status == "loading") {
						return false;
					}
					this.status = "to-none";
				}, time);
			},
			success(successText, time) {
				time = time || 3000;
				this.status = "success";
				this.successText = successText;
				setTimeout(() => {
					if (!this.status == "success") {
						return false;
					}
					this.status = "to-none";
				}, time);
			},
			error(errorText, time) {
				time = time || 3000;
				errorText = errorText || "";
				this.status = "error";
				this.errorText = errorText;
				setTimeout(() => {
					if (!this.status == "error") {
						return false;
					}
					this.status = "error-to-none";
				}, time);
			}
		},
		watch: {
			borderRadius: {
				handler(newVal, oldVal) {
					this.styleJson.borderRadius = newVal;
					this.createStyle();
				},
				deep: true,
				immediate: true
			}
		}
	}
</script>

<style lang="scss" scoped>
	.btn-view {
		position: relative;

		.box-shadow-view {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			background-color: $kt-color-black;
			box-shadow: 0 20rpx 30rpx $kt-color-black;
			opacity: .2;
		}

		.background-view {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			background-color: $kt-color-black;
		}

		.bg-color-view {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			background-color: $kt-color-black;
		}

		.black-common-bg-color-view {
			background-color: $kt-color-black;
		}

		.red-common-bg-color-view {
			background-color: $kt-color-red;
		}

		.yellow-common-bg-color-view {
			background-color: $kt-color-yellow;
		}

		.blue-common-bg-color-view {
			background-color: $kt-color-blue;
		}

		.error-bg-color-view {
			background-color: $kt-color-error;
			opacity: 0;
		}

	}


	.loading-status-body-view {
		.box-shadow-view {
			box-shadow: 0 0rpx 0rpx $kt-color-black;
			animation-name: box-shadow-view-hide-animation;
			animation-duration: 1s;
		}
	}

	.error-status-body-view {

		.box-shadow-view {
			box-shadow: 0 0rpx 0rpx $kt-color-black;
			animation-name: box-shadow-view-hide-animation;
			animation-duration: 1s;
		}


		.error-bg-color-view {
			background-color: $kt-color-error;
			opacity: 1;
			animation-name: error-bg-color-view-animation;
			animation-duration: 1s;

			@keyframes error-bg-color-view-animation {
				0% {
					opacity: 0;
				}

				100% {
					opacity: 1;
				}
			}
		}

	}

	.none-status-body-view:active {
		.box-shadow-view {
			box-shadow: 0 15rpx 30rpx $kt-color-black;
		}
	}

	.error-to-none-status-body-view:active {
		.box-shadow-view {
			box-shadow: 0 15rpx 30rpx $kt-color-black;
		}
	}

	.to-none-status-body-view:active {
		.box-shadow-view {
			box-shadow: 0 15rpx 30rpx $kt-color-black;
		}
	}

	.error-to-none-status-body-view {

		.box-shadow-view {
			animation-name: box-shadow-view-show-animation;
			animation-duration: 1s;
		}

		.box-shadow-view {
			box-shadow: 0 15rpx 30rpx $kt-color-black;
		}

		.error-bg-color-view {
			background-color: $kt-color-error;
			opacity: 0;
			animation-name: error-bg-color-view-in-error-to-none-status-body-view-animation;
			animation-duration: 1s;

			@keyframes error-bg-color-view-in-error-to-none-status-body-view-animation {
				0% {
					opacity: 1;
				}

				100% {
					opacity: 0;
				}
			}
		}

	}

	.btn-view:active {}

	.btn {
		position: relative;
		color: #fff;
		width: 100%;
		padding: 30rpx 0 30rpx 0;
		font-size: 35rpx;
		text-align: center;
		line-height: 40rpx;
		background-color: rgba(0, 0, 0, 0);

		.img-in-btn {
			position: absolute;
			right: 20rpx;
			top: 50%;
			transform: translateY(-50%);
			width: 50rpx;
			height: 50rpx;
		}
	}


	.loading-btn {

		.img-in-btn {
			position: absolute;
			left: 50%;
			top: 50%;
			transform: translate(-50%, -50%);
			width: 50rpx;
			height: 50rpx;
			animation-name: in-loading-btn-image-animation;
			animation-duration: 3s;
			animation-iteration-count: infinite;
		}

		@keyframes in-loading-btn-image-animation {
			0% {
				transform: translate(-50%, -50%) rotate(0deg);
			}

			100% {
				transform: translate(-50%, -50%) rotate(360deg);
			}
		}
	}

	.success-status-body-view {
		.box-shadow-view {
			box-shadow: 0 0rpx 0rpx $kt-color-black;
			animation-name: box-shadow-view-hide-animation;
			animation-duration: 1s;
		}

	}

	.to-none-status-body-view {
		.box-shadow-view {
			animation-name: box-shadow-view-show-animation;
			animation-duration: 1s;
		}

		.box-shadow-view {
			box-shadow: 0 15rpx 30rpx $kt-color-black;
		}
	}

	.btn:active {
		opacity: .8;
	}


	@keyframes box-shadow-view-show-animation {
		0% {
			box-shadow: 0 0rpx 0rpx $kt-color-black;
		}

		100% {
			box-shadow: 0 20rpx 30rpx $kt-color-black;
		}
	}

	@keyframes box-shadow-view-hide-animation {
		0% {
			box-shadow: 0 20rpx 30rpx $kt-color-black;
		}

		100% {
			box-shadow: 0 0rpx 0rpx $kt-color-black;
		}
	}
</style>
