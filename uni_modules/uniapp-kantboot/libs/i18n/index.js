// import $kt from "@/kantboot/index.js";
// import $api from "@/api/index.js";
var result = new Object();

// uni.$on("languageChange", (res) => {
// 	uni.setStorageSync("language", res);
// 	result.requestI18n();
// });

result.appFront = uni.getStorageSync("appFront");

result.setAppFront = function(data) {
	return uni.setStorageSync("appFront",data);
}

result.getAppFront = function() {
	return uni.getStorageSync("appFront");
}

result.getLanguage = function() {
	if (uni.getStorageSync("languageCode") != null && uni.getStorageSync("languageCode") != "") {
		return uni.getStorageSync("languageCode");
	}
	return (uni.getSystemInfoSync().language+"").replace("_","-");
}

result.language = result.getLanguage();

export default result;
