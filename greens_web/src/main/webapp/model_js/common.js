/**
 * js公共组建
 */
var common = {};

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