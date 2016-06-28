/**
 * 分页组建
 */
var ajaxFunc = function(sendData,docObjec,url,clickHanlder,contentFunc){
	$.ajax({
			url: url,
			dataType: 'json',
			contentType : "application/json",
			type: 'POST',
			data: JSON.stringify(sendData),
			success: function(data) {
			console.log("返回的数据");
			console.log(data);
			var r = $.parseJSON(data);
			var pageOption = r.result;
			var options = {
					bootstrapMajorVersion:3,
					currentPage: pageOption.currentPage,
					totalPages: pageOption.totalPages,
					numberOfPages:pageOption.numberOfPages,
					size:"normal",
		            alignment:"center",
		        	itemTexts:function (type, page, current) {
		        		return common.showPageText(type,page);
		            },
		            onPageClicked:clickHanlder
				}
		   $(docObjec).bootstrapPaginator(options);
			//加载内容区域
			console.log("开始加载内容区域");
			contentFunc(pageOption.result);
			}.bind(this),
			error: function(xhr, status, err) {
			console.error(this.props.addUrl, status, err.toString());
			}.bind(this)
	});
};



var PageCommon = React.createClass({
	
	/** 点击页数*/
	pageClick:function(e,originalEvent,type,page){
		console.log("click");
    	var pageInfo = new Object();
    	pageInfo.currentPage = page;
    	pageInfo.rowCount = this.props.rowCount;
    	pageInfo.searchConditon = this.props.searchConditon;
    	this.setState(pageInfo);
	},
	
	/** 初始设置*/
	getInitialState:function(){
		var pageInfo = new Object();
		pageInfo.rowCount = this.props.rowCount;
		pageInfo.currentPage = 1;
		pageInfo.searchConditon = this.props.searchConditon;
		return pageInfo;
	},
	
	/** render渲染 */
	render:function(){
		console.log("render");
		return (<ul ref="pageCom"></ul>);
	},
	
	/** 初始化 渲染之后执行的方法 只执行一次*/
	componentDidMount:function(){
		console.log("componentDidMount");
		/** 获取渲染的元素 */
		var ulDom = this.refs.pageCom;
		console.log($(ulDom));
		ajaxFunc(this.state,ulDom,this.props.url,this.pageClick,this.props.contentFun);
	},
	
	/** state改变后 调用方法 return true 重新render 该方法在初始时候不调用*/
	shouldComponentUpdate:function(nextProps,nextState){
		console.log("shouldComponentUpdate");
		/** 获取渲染的元素 */
		var ulDom = this.refs.pageCom;
		console.log($(ulDom));
		ajaxFunc(nextState,ulDom,this.props.url,this.pageClick,this.props.contentFun);
		return true;
	},
	
});


var search = new Object();
search.name = "jonh";
search.age = 23;


var contentResult = function(result){
	console.log("this is result");
	console.log(result);
}

ReactDOM.render(<PageCommon url = {"/greens_web/pageCommon/getPageInfo"} rowCount = {10} searchConditon={search} contentFun={contentResult}/>,$("#pageCommon").get(0));