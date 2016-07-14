/**
 * js公共组建
 */
var common = {};

/**
 * 用来存放组件
 */
common.commonTable = new Object();
/**
 * 显示分页文字
 */
common.showPageText = function(type,page){
	switch (type) {
    case "first":
        return "首页";
    case "prev":
        return "前一页";
    case "next":
        return "下一页";
    case "last":
        return "尾页";
    case "page":
        return "第"+page+"页";
    }
};

/**
 *  级联选择框
 *  pSelect 父select
 *  purl	父类内容获取地址
 *  cSelect 子select
 *  curl	子类内容获取地址
 */
common.selectCommon = function(pSelect,purl,cSelect,curl){
	$.ajax({
			url: purl,
			dataType: 'json',
			contentType : "application/json",
			type: 'POST',
			success: function(data) {
			var r = $.parseJSON(data);
			var bigTypes = r.list;
			$(pSelect).append("<option>请选择</option>");
			$(cSelect).append("<option>请选择</option>");
			$.each(bigTypes,function(k,v){
				$(pSelect).append("<option value="+v+">"+v+"</option>");
			});
			},
			error: function(xhr, status, err) {
			console.error(this.props.addUrl, status, err.toString());
			}
	});
	
	$(pSelect).change(function(event){
		var ptype = event.target.value;
		$.ajax({
			url:curl+"?ptype="+ptype,
			dataType:'json',
			contentType:"application/json",
			type:"get",
			success:function(data){
				var r = $.parseJSON(data);
				var types = r.list;
				$(cSelect).empty();
				$(cSelect).append("<option>请选择</option>");
				$.each(types,function(k,v){
					$(cSelect).append("<option value="+v+">"+v+"</option>");
				});
			}
		});
	});
};

//存放组件
common.addCommon = function(key,value){
	common.commonTable[key] = value;
};

//获取组件
common.getCommon = function(key){
	return common.commonTable[key];
}