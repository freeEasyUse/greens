/**
 * 显示购物车内容
 */

var ShowItem = React.createClass({
	
	
	handelCartItem:function(items){
		var result = new Array();
		for(var i = 0;i<items.length;i++){
			var item = new Object();
			item.thumb = items[i].get("thumb");
			item.name = items[i].get("name");
			item.price = items[i].get("price");
			item.name = items[i].get("name");
			item.quantity = items[i].get("quantity");
			item.id = items[i].get("id");
			result.push(item);
		}
		return result;
	},
	
	getInitialState:function(){
		console.log("cart init");
		var items = simpleCart.items();
		var result = new Object();
		result.list = this.handelCartItem(items);
		return result;
	},
	
	render:function(){
		console.log("cart");
		var items = this.state.list;
		var shelfItems = new Array();
		for(var j = 0;j<items.length;j++){
			var item = items[j];
			shelfItems.push(
			<div className="cart-header2" id={item.id}>
			 	<div className="close2"> </div>
				<div className="cart-sec simpleCart_shelfItem">
					<div className="cart-item cyc">
						<img src={item.thumb} className="img-responsive" alt=""/>
					</div>
					<div className="cart-item-info">
					<h3><a href="#">{item.name}</a></h3>
					<ul className="qty">
						<li><p>数量 : {item.quantity}</p></li>
					</ul>
					</div>
					<div className="clearfix"></div>
				</div>
			</div>
			);
		}
		return (
				<div className="col-md-12 cart-items">
					<h1>当前购物车</h1>
					{shelfItems}
				</div>
				 
		);
	},
	componentDidMount:function(){
		$('.close2').on('click',function(e){
			var node = e.target.parentNode;
			$(node).fadeOut('slow',function(ev){
				$(node).remove();
			});
		});
	},
	
});

var cart = React.createElement(ShowItem,null,null);
common.addCommon("cart",cart);