import $kt from "@/kantboot/index.js";
import $api from "@/api/index.js";
var result = new Object();

uni.$on("selfChange", (res) => {
	uni.setStorageSync("self", res);
});

result.appFront = uni.getStorageSync("appFront");

result.getSelf = function() {
	if (uni.getStorageSync("self") != null && uni.getStorageSync("self") != "") {
		return uni.getStorageSync("self");
	}
	return null;
}

result.setSelf = function(res) {
	uni.setStorageSync("self",res);
}

export default result;
