# 输入框组件


#### API

##### Props

| 参数        | 说明                                | 类型    | 默认值 | 可选值                                |
| ----------- | ----------------------------------- | ------- | ------ | ------------------------------------- |
| title       | 输入框的标题                        | String  | -      | -                                     |
| placeholder | 输入框为空时的占位符                | String  | -      | -                                     |
| maxlength   | 最大输入长度                        | Number  | -      | -                                     |
| border      | 显示的边框，只有为all时会有默认弧度 | String  | all    | all \| bottom \| top \| left \| right |
| isOpen      | 是否一直展开                        | Boolean | false  | false \| true                         |
| disabled    | 是否禁止输入                        | Boolean | false  | false  \| true                        |



##### Methods

| 方法名称      | 说明                                        |
| ------------- | ------------------------------------------- |
| error         | 将边框改变颜色，以示有错误                  |
| errorWithText | 将边框改变颜色，并有对应提示文字,以示有错误 |

> 例

```html
<kt-input ref="errorDemoInput" title="输入框" placeholder="输入内容">			
</kt-input>

<kt-button @click="errorDemoInputGo()">查看效果</kt-button>

<!---------------------------------------------------------->

<kt-input ref="errorDemoInput2" title="输入框" placeholder="输入内容">			
</kt-input>

<kt-button @click="errorDemoInput2Go()">查看效果</kt-button>
```

```js
methods:{
    errorDemoInputGo(){        
		// 当有参数时，代表输入框在这个错误状态的时间，以毫秒为单位
		// this.$refs.errorDemoInput.error(2000);				
		// 当没有参数时，输入框在这个错误状态的时间默认为3000毫秒
		this.$refs.errorDemoInput.error();
    },
	errorDemoInput2Go(){
		// 当有2个参数时，第二个参数代表输入框在这个错误状态的时间，以毫秒为单位
		// this.$refs.errorDemoInput.error('此处不可为空'，2000);				
		// 当没有两个参数时，输入框在这个错误状态的时间默认为3000毫秒
		this.$refs.errorDemoInput2.errorWithText('此处不可为空');
	}
}			
```



##### Slot插槽

> 例

```html
<kt-input title="验证码" placeholder="输入验证码" maxlength="6">
	<view>
		<text style="font-size: 28rpx;">发送</text>
	</view>				
</kt-input>
```



扫码预览Demo

<div><img style="float:left" src="https://ui.uniapp.kantboot.com/md/kt-input/1.png"/></div>





