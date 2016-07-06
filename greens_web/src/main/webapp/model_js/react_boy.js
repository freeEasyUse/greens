/**
 * 分页组件中记录查询条件
 */
var search = new Object();
/**
 * 记录是否为菜单点击
 */
var isMenuClick = false;
/**
 * megamenu组建
 */
/** 每列显示组件 ul li */
var ListData = React.createClass({
	render:function(){
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
		var result;
		$.ajax({
  			url: this.props.url,
  			async: false,
  			dataType: 'json',
  			contentType : "application/json",
  			type: 'POST',
  			success: function(data) {
				var r = $.parseJSON(data);
				result = r;
  			}.bind(this),
  			error: function(xhr, status, err) {
    			console.error(this.props.addUrl, status, err.toString());
  			}.bind(this)
		});
		return result;
	},
	
	
	render:function(){
		return (
			<ul className="megamenu skyblue">
				<li className="active grid"><a className="color1" href="#">index</a></li>
				{this.state.result.map(function(liv){
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
		$(".megamenu").megamenu();
		$(".h_nav >ul > li > a").click(function(event){
			/** 隐藏首页 */
			$("#indexShow").hide();
			$("#mainContent").show();
			var aTag = $(event.target).get(0);
			var menuCode = $(aTag).attr("data");
			search.menuCode = menuCode;
			isMenuClick = true;
			ReactDOM.render(<PageCommon url = {"/greens_web/sendData/contentWithPage"} rowCount = {4} searchConditon={search} contentFun={contentResult}/>,$("#pageCommon").get(0));
		});
		
		/** 首页点击 */
		$(".megamenu>.active>a").click(function(){
			$("#indexShow").show();
			$("#mainContent").hide();
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
			contentFunc(pageOption.result);
			}.bind(this),
			error: function(xhr, status, err) {
			console.error(this.props.addUrl, status, err.toString());
			}.bind(this)
	});
};

/** 分页结果显示 */
var contentResult = function(result){
	ReactDOM.render(<ItemGroup goodGroup={result}/>,$("#goodGroup").get(0));
}

var PageCommon = React.createClass({
	
	/** 点击页数*/
	pageClick:function(e,originalEvent,type,page){
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
		/** 当从菜单点击时候  修改分页当前页数 */
		if(isMenuClick){
			isMenuClick = false;
			var pageInfo = this.state;
			pageInfo.currentPage = 1;
			this.setState(pageInfo);
		}
		return (<ul ref="pageCom"></ul>);
	},
	
	/** 初始化 渲染之后执行的方法 只执行一次*/
	componentDidMount:function(){
		/** 获取渲染的元素 */
		var ulDom = this.refs.pageCom;
		ajaxFunc(this.state,ulDom,this.props.url,this.pageClick,this.props.contentFun);
	},
	
	/** state改变后 调用方法 return true 重新render 该方法在初始时候不调用*/
	shouldComponentUpdate:function(nextProps,nextState){
		/** 获取渲染的元素 */
		var ulDom = this.refs.pageCom;
		ajaxFunc(nextState,ulDom,this.props.url,this.pageClick,this.props.contentFun);
		return true;
	},
	
});




/** 菜单栏 */
ReactDOM.render(<MegaMenu url={"/greens_web/sendData/menu"}/>,$("#menu").get(0));
