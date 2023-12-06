var obj=new Object();

obj.findOne = function(jsonArr,keyName,value){
	// console.log(JSON.stringify(jsonArr),"js");
	for(var i=0;i<jsonArr.length;i++){
		if(jsonArr[i][keyName]==value){
			// console.log("找到了",jsonArr[i]);
			return jsonArr[i];
		}
	}
	return null;
}

export default obj;