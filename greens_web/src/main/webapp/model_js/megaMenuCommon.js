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



		var goodGroup = new Array();
		var good = new Object();
		good.imgSrc = "images/w5.jpg";
		good.goodName = "goodName";
		good.desc = "Itsdfafasdfasdfasdf";

		var good2 = new Object();
		good2.imgSrc = "images/w5.jpg";
		good2.goodName = "goodName";
		good2.desc = "Itsdfafasdfasdfasdf";

		goodGroup.push(good);
		goodGroup.push(good2);

		for(var i = 0;i<12;i++){
			var o = new Object();
			o.imgSrc = "images/w5.jpg";
			o.goodName = "goodName";
			o.desc = "Itsdfafasdfasdfasdf";
			goodGroup.push(o);
		}	
		
		
		
		
		
		
		
		
		
		
		
		
		
		
var d = new Object();
var a = new Array();
var l1 = new Object();
l1.name = "l1";
var l2 = new Object();
l2.name = "l2";

a.push(l1);
a.push(l2);
d.list = a;
d.title = "te";



var dd = new Object();
var aa = new Array();

var ll1 = new Object();
ll1.name = "ll1";
var ll2 = new Object();
ll2.name = "ll2";
aa.push(ll1);
aa.push(ll2);
dd.list = aa;
dd.title = "34";

var dataList = new Array();
dataList.push(d);
dataList.push(dd);

var o = new Object();
o.showText = "m1";
o.list = dataList;

var o1 = new Object();
o1.showText = "m2";
o1.list = dataList;

var mlist = new Array();
mlist.push(o);
mlist.push(o1);



ReactDOM.render(<MegaMenu url={"/greens_web/sendData/menu"}/>,$("#menu").get(0));