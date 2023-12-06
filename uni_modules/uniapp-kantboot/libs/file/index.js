import kt from '../../index.js';

/**
 * 新版
 */
let visit = function (id) {
	var url = `${kt.request.config.fileAddress}/file/visit/${id}`;
	return url;
}


/**
 * 根据id访问文件，为了更好的扩展，这里不直接返回url，而是返回一个函数
 * @param {Object} id
 * @return 返回一个函数，调用该函数返回查看文件的url
*/
let byId = function (uuid) {
	var url = `${kt.request.config.rootAddress}/system/file/visitFile/${uuid}`;
	return url;
}

/**
 * 根据文件路径访问文件
 * @param {Object} path 文件路径
 * @return 返回一个函数，调用该函数返回查看文件的url
 */
let byPath = function (path) {
	let url = `https://file.kantboot.com/${path}`;
	return url;
}

/**
 * 根据父级编码和编码访问文件
 */
let byParentCodeAndCode = function (parentCode, code) {
	var url = `${kt.request.config.rootAddress}/system/file/visitFile/${parentCode}/${code}`;
	return url;
}


/**
 * 根据分组编码和id访问文件
 */
let byGroupCodeAndId = function (groupCode, id) {
	var url = `${kt.request.config.rootAddress}/system/file/visitFile/${groupCode}/${id}`;
	return url;
}


export default {
	visit,
	byId,
	byPath,
	byParentCodeAndCode,
	byGroupCodeAndId
}
