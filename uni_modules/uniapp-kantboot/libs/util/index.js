var result = new Object();

result.toWebview = function (src) {
	src=encodeURIComponent(src);
	uni.navigateTo({
		url: '/pages/web-view-page/web-view-page?src=' + src
	});
}

/**
 * 查看字段是否为空
 * @return {type} 布尔类型：true代表字段为空，false 代表字段不为空
 */
result.isEmpty = function (varr) {
	if (varr == null || varr == "") {
		return true;
	}
	return false;
}

/**
 * 时间戳转换为YY-MM-DD hh:mm:ss格式
 */
result.timeToCommonFromat = function (time) {
	//将时间戳格式转换成年月日时分秒
	var date = new Date(time);
	var Y = date.getFullYear() + '-';
	var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
	var D = (date.getDate() < 10 ? '0' + (date.getDate()) : date.getDate()) + ' ';

	var h = (date.getHours() < 10 ? '0' + (date.getHours()) : date.getHours()) + ':';
	var m = (date.getMinutes() < 10 ? '0' + (date.getMinutes()) : date.getMinutes()) + ':';
	var s = (date.getSeconds() < 10 ? '0' + (date.getSeconds()) : date.getSeconds());
	var strDate = Y + M + D + h + m + s;
	return strDate;
};

result.dateFormat = function (time, formatStr) {
	var date = new Date(time);
	var Y = date.getFullYear();
	var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1);
	var D = (date.getDate() < 10 ? '0' + (date.getDate()) : date.getDate());

	var h = (date.getHours() < 10 ? '0' + (date.getHours()) : date.getHours());
	var m = (date.getMinutes() < 10 ? '0' + (date.getMinutes()) : date.getMinutes());
	var s = (date.getSeconds() < 10 ? '0' + (date.getSeconds()) : date.getSeconds());

	var str = formatStr
		.replace(/[yY]+/, Y)
		.replace(/M+/, M)
		.replace(/[Dd]+/, D)
		.replace(/[h]+/, h)
		.replace(/[m]+/, m)
		.replace(/[s]+/, s)
		;
	return str;
}

/**
 * 生成uuid
 * @param {Object} len 长度
 */
result.createUUID = function (len) {
	var s = [];
	var hexDigits = "0123456789abcdef";
	for (var i = 0; i < len; i++) {
		s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
	}
	s[14] = "4"; // bits 12-15 of the time_hi_and_version field to 0010
	s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1); // bits 6-7 of the clock_seq_hi_and_reserved to 01
	s[8] = s[13] = s[18] = s[23];
	var uuid = s.join("");
	return uuid;
}

/**
 * 前往跳转
 * @param {Object} path
 */
result.navTo = function (path) {
	uni.navigateTo({
		url: path
	})
}
/**
 * 关闭当前页面，跳转到应用内的某个页面
 */
result.reTo = function (path) {
	uni.redirectTo({
		url: path
	})
}

result.reLaunch = function (path) {
	uni.reLaunch({
		url: path
	})
}

/**
 * @param {Object} json
 */
result.newJSON = function (json) {
	return JSON.parse(JSON.stringify(json));
}


result.pxToRpx = function (px) {
	return px * 750 / wx.getSystemInfoSync().windowWidth;
};


result.rpxToPx = function (rpx) {
	return rpx / 750 * wx.getSystemInfoSync().windowWidth;
};

/**
 * 获取系统信息
 */
result.getSystemInfo = function () {
	var systemInfo = uni.getSystemInfoSync();
	return systemInfo;
}

result.readableDistance = function (m) {
	var m2 = m + "";
	m2 = m2.substring(m2.indexOf(".") + 1);

	var result = {
		unit: '米',
		num: m2
	};


	if (m >= 1000) {
		var km = (m / 1000);
		var km2 = km.toFixed(2) + "";
		var aa = km2.substring(km2.indexOf(".") + 1);
		var bb = km2.substring(km2.indexOf(".") + 2);
		if (aa <= 10) {
			km2 = km2.substring(0, km2.indexOf("."));
		}
		var result = {
			unit: '公里',
			num: km2
		};
	}
	return result;
}

/**
 * 获取当前时间的文字描述
* @param {*} dateTime 时间戳
*/
result.readableDate=function(dateTime) {

	// 获取当前时间戳
	let now = new Date().getTime();
	// 如果小于1分钟，显示刚刚
	if (now - dateTime < 60 * 1000) {
		return "刚刚";
	}

	// 如果大于1分钟，小于1小时，显示几分钟前
	if (now - dateTime < 60 * 60 * 1000) {
		// 获取相差的分钟数
		let minutes = Math.floor((now - dateTime) / (60 * 1000));

		return minutes+"分钟前";
	}
	// 获取今天的年月日和dateTime的年月日
	let nowDate = new Date(now);
	let dateTimeDate = new Date(dateTime);
	// 如果是同一天，显示hh:mm
	if (
		nowDate.getFullYear() == dateTimeDate.getFullYear() &&
		nowDate.getMonth() == dateTimeDate.getMonth() &&
		nowDate.getDate() == dateTimeDate.getDate()
	) {
		return result.dateFromat(dateTime, "hh:mm");
	}
	// 如果是昨天，显示昨天 hh:mm
	if (
		nowDate.getFullYear() == dateTimeDate.getFullYear() &&
		nowDate.getMonth() == dateTimeDate.getMonth() &&
		nowDate.getDate() - dateTimeDate.getDate() == 1
	) {
		return "昨天 " + result.dateFromat(dateTime, "hh:mm");
	}
	// 如果是今年，显示MM-dd hh:mm
	if (
		nowDate.getFullYear() == dateTimeDate.getFullYear() &&
		nowDate.getMonth() == dateTimeDate.getMonth()
	) {
		return result.dateFromat(dateTime, "MM-dd hh:mm");
	}
	// 如果是去年，显示yyyy-MM-dd hh:mm
	return result.dateFromat(dateTime, "yyyy-MM-dd hh:mm");
}

/**
 * 系统信息
 */
result.systemInfo = result.getSystemInfo();

/**
 * 给json按照key的字母顺序排序，并返回排序后的json
 */
result.sortJSONByKey = function (json) {
	var arr = new Array();
	for (var key in json) {
		arr.push(key);
	}
	arr.sort();
	var newJson = new Object();
	for (var i = 0; i < arr.length; i++) {
		newJson[arr[i]] = json[arr[i]];
	}
	return newJson;
}


export default result;
