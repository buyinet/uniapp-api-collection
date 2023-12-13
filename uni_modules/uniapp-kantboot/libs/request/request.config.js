// let rootAddress = "https://ac.aaarfyh.com";
let rootAddress = "http://127.0.0.1:10002";

var config={

	"rootAddress":rootAddress,

	"uploadAddress": rootAddress+"/functional-file-web/file/upload",
	
	// 文件访问地址
	"fileAddress": rootAddress+"/functional-file-web",
	
	"rootWebSocketAddressList":[
		"ws://heimi.kantboot.com/taskSocket"
	],
			
	"headerField":{
		"token":"token"
	},
	
	// token存储的key
	"tokenStroageKey":"token",
	
	// 设置平台信息
	"platformCode":"PHILOSOPHY_SHOUT",

	/**
	 * 响应数据字段
	 */
	responseDataField: {
		stateCode: "stateCode", // 状态码字段
		stateSuccessMessage: "msg", // 状态为“成功”时的字段
		stateFailMessage: "errMsg", // 状态为“失败”时的字段
		bodyData: "data", //主体数据字段
		msgDictCode:"msgDictCode"// 字典编码
	},

	/**
	 * 通用状态码
	 */
	stateCode: {
		/**
		 * 成功状态码，用于配置请求成功的状态码，如：0
		 */
		success: "SUCCESS",
		/**
		 * 失败状态码，用于配置请求失败的状态码，如：-1
		 */
		notLogin: "NOT_LOGIN",
	},
	
	// 登录页面
	"loginPage":"/pages/login/login"
	
	
}

export default config;