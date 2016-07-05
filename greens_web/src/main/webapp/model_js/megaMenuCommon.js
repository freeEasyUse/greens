/**
 * megamenu组建
 */

/** 每列显示组件 ul li */
var ListData = React.createClass({
	render:function(){
		console.log("render listData");
		return (
				<div className="col1">
					<div className="h_nav">
						<h4>{this.props.data.title}</h4>
						<ul>
							{this.props.data.list.map(function(v){			// 循环属性
								return <li><a href="#" data={v.name}>{v.name}</a></li>
							})}
						</ul>
					</div>
				</div>
		);
	}
});


/** 创建显示面板 megapanel */
var ShowPanel = React.createClass({
	render:function(){
		console.log("render ShowPanel");
		return (
				<div className="megapanel">
					<div className="row">
						{this.props.dataList.map(function(v){
							return <ListData data={v}/>
						})}
					</div>
				</div>
		);
	}
});


/** 创建 megamenu */
var MegaMenu = React.createClass({
	
	getInitialState:function(){
		console.log("getInitiaState");
		var result;
		$.ajax({
  			url: this.props.url,
  			async: false,
  			dataType: 'json',
  			contentType : "application/json",
  			type: 'POST',
  			success: function(data) {
  				console.log("ajax request");
				var r = $.parseJSON(data);
				result = r;
				console.log(result);
  			}.bind(this),
  			error: function(xhr, status, err) {
    			console.error(this.props.addUrl, status, err.toString());
  			}.bind(this)
		});
		return result;
	},
	
	
	render:function(){
		console.log("render MegaMenu");
		console.log(this.state.result);
		return (
			<ul className="megamenu skyblue">
				<li className="active grid"><a className="color1" href="index.html">index</a></li>
				{this.state.result.map(function(liv){
					console.log("xunhuan2");
					console.log(liv.showText);
					return(
							<li>
								<a className="color1" href="#">{liv.showText}</a>
								<ShowPanel dataList={liv.list}/>
							</li>
					);
				})}
			</ul>
		);
	},
	componentDidMount:function(){
		console.log("compoentDidMount");
		$(".megamenu").megamenu();
		console.log("find a");
		console.log($(".h_nav >ul > li > a"));
		$(".h_nav >ul > li > a").click(function(event){
			var aTag = $(event.target).get(0);
			var menuCode = $(aTag).attr("data");
			$.ajax({
	  			url: "/greens_web/sendData/goods?menuCode="+menuCode,
	  			async: false,
	  			dataType: 'json',
	  			contentType : "application/json",
	  			type: 'GET',
	  			success: function(data) {
					var r = $.parseJSON(data);
					ReactDOM.render(<ItemGroup goodGroup={r.result}/>,$("#goodGroup").get(0));
					ReactDOM.render(<PageCommon url = {"/greens_web/pageCommon/getPageInfo"} rowCount = {10} searchConditon={search} contentFun={contentResult}/>,$("#pageCommon").get(0));
	  			}.bind(this),
	  			error: function(xhr, status, err) {
	    			console.error(this.props.addUrl, status, err.toString());
	  			}.bind(this)
			});
		});
	}
});


		/**
		 * 内容区组件
		 */

		/** 具体商品显示组件 */
var GoodItemShow = React.createClass({
	render:function(){
		return (
			<div className="grid1_of_4">
				<div className="content_box">
					<a href="details.html">
						<img src={this.props.item.imgSrc} className="img-responsive" alt=""/>
					</a>
					<h4><a href="details.html">{this.props.item.goodName}</a></h4>
					<p>{this.props.item.desc}</p>
					<div className="grid_1 simpleCart_shelfItem">
						<div className="item_add"><span className="item_price"><h6>ONLY $109.00</h6></span></div>
						<div className="item_add"><span className="item_price"><a href="#">add to cart</a></span></div>
					</div>
				</div>
			</div>
		);
	}
});

/** 商品组显示 */
var ItemGroup = React.createClass({
	render:function(){
		var groups = this.props.goodGroup;
		var allItems = new Array();
		for(var i = 0;i<groups.length;i++){
			if(i%4==0){
				var showGroups = new Array();
				for(var j = 0;j<4;j++){
					if((i+j)<groups.length){
						showGroups.push(<GoodItemShow item={groups[i+j]}/>);
					}
					else{
						break;
					}
					
				}
				allItems.push(<div className="grids_of_4">{showGroups}</div>)
			}
		}
		allItems.push(<div class="clearfix"></div>);
		return (
				<div>
					{allItems}
				</div>
		);
	}
});

/**
 * 分页组件
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
								
ReactDOM.render(<MegaMenu url={"/greens_web/sendData/menu"}/>,$("#menu").get(0));