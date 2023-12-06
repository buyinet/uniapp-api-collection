import config from './request.config.js';
import util from '../util/index.js';

var obj = new Object();

obj.config = config;

/**
 * 获取根地址
 * @return {string}
 */
obj.getRootAddress = function () {
	return obj.config.rootAddress;
}

/**
 * 获取token
 * @return {*}
 */
obj.getToken = function () {
	return uni.getStorageSync(obj.config.tokenStroageKey);
}

/**
 * 设置token
 */
obj.setToken = function (token) {
	uni.setStorageSync(obj.config.tokenStroageKey, token);
}

/**
 * 清除token
 */
obj.clearToken = function () {
	uni.removeStorageSync(obj.config.tokenStroageKey);
}

/**
 * 设置语言编码
 */
obj.setLanguageCode = function (lang) {
	uni.setStorageSync("languageCode", lang);
}


/**
 * 获取文件路径
 */
const getFileAddress = () => {
	const fileAddress =
		uni.getStorageSync("fileAddress") || obj.config.fileAddress;
	return fileAddress;
}

/**
 * 设置文件路径
 */
const setFileAddress = (fileAddress) => {
	uni.setStorageSync("fileAddress", fileAddress);
}

/**
 * 获取文件上传路径
 */
const getUploadAddress = () => {
	const uploadAddress =
		uni.getStorageSync("uploadAddress") || obj.config.uploadAddress;
	return uploadAddress;
}

/**
 * 设置文件上传路径
 */
const setUploadAddress = (uploadAddress) => {
	uni.setStorageSync("uploadAddress", uploadAddress);
}

/**
 * 获取语言编码
 */
obj.getLanguageCode = function () {
	// 如果缓存中没有语言编码，则使用系统语言编码
	if (uni.getStorageSync("languageCode") == null || uni.getStorageSync("languageCode") == "") {
		uni.setStorageSync("languageCode", (uni.getSystemInfoSync().language+"").replace("-","_"));
	}
	// 如果缓存中没有语言编码，则使用默认语言编码
	if (uni.getStorageSync("languageCode") == null || uni.getStorageSync("languageCode") == "") {
		uni.setStorageSync("languageCode", "en_US");
	}

	return uni.getStorageSync("languageCode");
}

/**
 * 清除语言编码
 */
obj.clearLanguageCode = function () {
	uni.removeStorageSync("languageCode");
}

/**
 * 发送请求
 */
obj.request = function (options,uuid) {

	// 判断是否有缓存
	let paramJson = util.sortJSONByKey(options.data);
	let paramStr = JSON.stringify(paramJson);
	let key = "requestResult:" + options.url +"::" + paramStr;
	let cacheData = uni.getStorageSync(key);
	if (cacheData&&options.cache) {
		options.cache(JSON.parse(cacheData));
	}

	uni.request({
		url: obj.getRootAddress() + options.url,
		method: options.method,
		data: options.data,
		header:{
			token: obj.getToken(),
			languageCode: obj.getLanguageCode(),
			...options.header
		},
		success: (res) => {
			if (res.data[obj.config.responseDataField.stateCode] == obj.config.stateCode.success) {

				options.stateSuccess(res.data);

				uni.setStorageSync(key, JSON.stringify(res.data[obj.config.responseDataField.bodyData]));

			} else if (res.data[obj.config.responseDataField.stateCode] == obj.config.stateCode.notLogin) {
				uni.navigateTo({
					url: obj.config.loginPage
				});

				uni.reLaunch({
					url: obj.config.loginPage
				});

			} else if (404 == res.statusCode){
					// 重新请求40次
					// 生成uuid
					if (uuid == null){
						uuid = util.createUUID(32);
					}
					// 从缓存中获取请求次数
					let requestCount = uni.getStorageSync("requestNumber:"+uuid);
					if (requestCount == null){
						requestCount = 0;
					}
					// 判断请求次数
					if (requestCount < 3) {
						// 重新请求
						uni.setStorageSync("requestNumber:" + uuid, requestCount - (-1));
						console.log("页面404，重新请求，请求次数：" + requestCount);
						setTimeout(()=>{
							obj.request(options, uuid);
						},1000);
						return;
					}else{
						let json = new Object();
						json[obj.config.responseDataField.stateCode] = "404";
						json[obj.config.responseDataField.stateFailMessage] = "请求失败";
						json[obj.config.responseDataField.msgDictCode] = "status404";
						options.stateFail(json);
						return;
					}

			}
			if(500==res.data.status){
				let json = new Object();
				json[obj.config.responseDataField.stateCode] = "500";
				json[obj.config.responseDataField.stateFailMessage] = "请求失败";
				json[obj.config.responseDataField.msgDictCode] = "status500";
				options.stateFail(json);
				return;
			}
			options.stateFail(res.data);
		},
		fail:(err)=>{
			options.stateFail(err);
		}
	})

}

/**
 * 上传文件
 */
obj.uploadFile = function (options) {
	if(!options.name){
		options.name = "file";
	}

	uni.uploadFile({
		url: getUploadAddress(),
		filePath: options.filePath,
		name: options.name,
		compress: options.compress,
		formData: options.formData,
		header: {
			token: obj.getToken(),
			languageCode: obj.getLanguageCode(),
			...options.header
		},
		success: (res) => {
			console.log(res,"上传文件返回结果");
			let json = JSON.parse(res.data);
			console.log(json,"上传文件返回结果");
			if (json[obj.config.responseDataField.stateCode] == obj.config.stateCode.success) {
				options.stateSuccess(json);
			} else if (json[obj.config.responseDataField.stateCode] == obj.config.stateCode.notLogin) {
				uni.navigateTo({
					url: obj.config.loginPage
				});

				uni.reLaunch({
					url: obj.config.loginPage
				});

			}
			options.stateFail(json);
		},
		fail: (err) => {
			options.stateFail(err);
		}
	})
}


export default obj;