<template>
	<view>

		<!-- start: 当输入框不在焦点时 -->
		<view :class="'input-box-no-focus '+boxClass +' border-'+border"
			v-if="!focus&&(value==''||value==null)&&!isOpen" @click="focus=true">
			<view class="title">{{title}}</view>
			<view class="slot-no1">
				<slot></slot>
			</view>
		</view>
		<!-- end: 当输入框不在焦点时 -->

		<!-- start: 当输入框在焦点时 -->
		<view :class="'input-box-focus '+boxClass +' border-'+border" @click="focus=true"
			v-if="focus||(value!=''&&value!=null)||isOpen">
			<view>
				<view class="title">{{title}}</view>
				<view class="length" v-if="maxlength!=''&&maxlength!=null">{{value.length}}/{{maxlength}}</view>
			</view>
			<view>
				<input
				@input="input"
				@handleClick="handleClick"
				 v-if="type!='textarea'" :focus="focus" :disabled="disabled" :style="disabled?'opacity: .7;':''"
					@blur="focus=false" :maxlength="maxlength" :type="type" class="kt-input"
					placeholder-class="kt-input-placeholder" v-model="internalValue" :placeholder="placeholder" />

				<textarea
				@input="input"
				@handleClick="handleClick"
				 :disabled="disabled" v-if="type=='textarea'" :focus="focus" @blur="focus=false"
					:maxlength="maxlength" :type="type" class="kt-input" placeholder-class="kt-input-placeholder"
					v-model="internalValue" :placeholder="placeholder"></textarea>

			</view>
			<view class="slot-no1">
				<slot></slot>
			</view>

		</view>
		<!-- end: 当输入框在焦点时 -->
		
		<!-- 错误提示的文字 -->
		<view class="error-tips" v-if="errorTipsText!=null&&errorTipsText!=''">{{errorTipsText}}</view>
	</view>

</template>

<script>
	export default {
		props: {
			/**
			 * 边框
			 */
			border: {
				type: String,
				default: "all"
			},
			/**
			 * 是否一直展开
			 */
			isOpen: {
				type: Boolean,
				default: false
			},
			/**
			 * 是否禁止输入
			 */
			disabled: {
				type: Boolean,
				default: false
			},
			/**
			 * 双向绑定
			 */
			value: {
				type: String,
				default: "1"
			},
			/**
			 * 输入框提示
			 */
			placeholder: {
				type: String,
				default: ""
			},
			/**
			 * 输入框标题
			 */
			title: {
				type: String,
				default: ""
			},
			type: {
				type: String,
				default: "text"
			},
			maxlength: {
				type: [String, Number],
				default: ""
			}

		},
		data() {
			return {
				focus: false,
				boxClass: '',
				/**
				 * 错误提示的文字
				 */
				errorTipsText:'',
				internalValue: this.value
			}
		},
		methods: {
			handleClick(e) {
				e.stopPropagation();
			},

			input(e) {
				this.internalValue = e.target.value;
				this.$emit("input", e.target.value);
				this.$emit("change", e.target.value);
			},
			error(time) {
				// 默认3秒
				time = time || 3000;
				this.boxClass = 'input-box-error';
				setTimeout(() => {
					this.boxClass = '';
				}, time);
			},
			errorWithText(text,time){
				this.errorTipsText=text;
				time = time || 3000;
				this.boxClass = 'input-box-error';
				setTimeout(() => {
					this.boxClass = '';
					this.errorTipsText = '';
				}, time);				
			}
		},
		watch: {
			"value": {
				handler(newVal, oldVal) {
					this.$nextTick(() => {
						// 标识value值的变化是由内部引起的
						this.$emit("input", newVal);
						this.$emit("change", newVal);
					});
				},
				deep: true,
				immediate: true
			}
		}
	}
</script>

<style lang="scss" scoped>
	.input-box-no-focus {
		position: relative;
		padding: 30rpx 20rpx 30rpx 20rpx;
		border-radius: 10rpx;
		color: #666;
		font-weight: 300;
		border: 2rpx solid rgb(207, 217, 222);

		.title {
			text-align: left;
			font-size: 35rpx;
		}

		.slot-no1 {
			
			position: absolute;
			right: 20rpx;
			top: 50%;
			transform: translateY(-50%);
		}
		
		
	}

	.input-box-focus {
		position: relative;
		padding: 20rpx;
		color: #666;
		text-align: left;
		font-weight: 300;
		border-radius: 10rpx;
		border: 2rpx solid rgb(207, 217, 222);

		.title {
			display: inline-block;
			text-align: left;
			font-size: 28rpx;
		}

		.length {
			display: inline-block;
			text-align: right;
			font-size: 26rpx;
			float: right;
			color: #666;
		}

		.kt-input {
			font-size: 35rpx;
			text-align: left;
			border: none;
			width: 100%;
		}
		
		.kt-input-placeholder {
			font-weight: lighter;
			opacity: .7;
		}
		
		.kt-input::placeholder{
			font-weight: lighter;
		}
		.kt-input::-moz-placeholder{
			font-weight: lighter;
		}
		.kt-input::-webkit-input-placeholder{
			font-weight: lighter;
		}

		.slot-no1 {
			position: absolute;
			right: 20rpx;
			top: 50%;
		}
	}

	.input-box-error {
		border: 2rpx solid $kt-color-error;

		.title {
			color: $kt-color-error;
		}

		.length {
			color: $kt-color-error;
		}

		.kt-input {
			color: $kt-color-error;
		}

		.kt-input-placeholder {
			color: $kt-color-placeholder-error;
		}
	}

	.border-all {}

	.border-bottom {
		border-top: none;
		border-left: none;
		border-right: none;
		border-radius: 0rpx;
	}

	.border-top {
		border-bottom: none;
		border-left: none;
		border-right: none;
		border-radius: 0rpx;
	}

	.border-right {
		border-top: none;
		border-left: none;
		border-bottom: none;
		border-radius: 0rpx;
	}

	.border-left {
		border-top: none;
		border-bottom: none;
		border-right: none;
		border-radius: 0rpx;
	}
	
	.error-tips{
		color: $kt-color-error;
		font-size: 28rpx;
		margin-top: 10rpx;
	}
</style>
