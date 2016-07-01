/**
 * megamenu组建
 */

/** 每列显示组件 ul li*/
var ListData = React.createClass({
	render:function(){
		return (
				<div className="col1">
					<div className="h_nav">
						<h4>{this.props.data.title}</h4>
						<ul>
							{this.props.data.list.map(function(v){			//循环属性
								return <li><a href="#">{v.name}</a></li>
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


/** 创建 megamenu*/
var MegaMenu = React.createClass({
	render:function(){
		return (
			<ul className="megamenu skyblue">
				<li className="active grid"><a className="color1" href="index.html">index</a></li>
				{this.props.liListData.map(function(liv){
					console.log("xunhuan2");
					console.log(liv.list);
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
		console.log("componetn");
		$(".megamenu").megamenu();
	}
});


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



ReactDOM.render(<MegaMenu liListData={mlist}/>,$("#menu").get(0));