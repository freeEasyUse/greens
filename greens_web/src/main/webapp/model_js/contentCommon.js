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



ReactDOM.render(<ItemGroup goodGroup={goodGroup}/>,$("#goodGroup").get(0));
