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
			item.total = items[i].get("total");
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
			 	<div className="close2"></div>
				<div className="cart-sec simpleCart_shelfItem">
					<div className="cart-item cyc">
						<img src={item.thumb} className="img-responsive" alt=""/>
					</div>
					<div className="cart-item-info">
					<h3><a href="#">{item.name}</a></h3>
					<ul className="qty">
						<li>数量 : <input type="number" defaultValue={item.quantity} max={100} min={1} role={item.id}></input></li>
						<li><p>单价 : {item.price}</p></li>
						<li><p>合计 : {item.total}</p></li>
					</ul>
					</div>
					<div className="clearfix"></div>
				</div>
			</div>
			);
		}
		return (
				<div className="container">
					<div className="check">	
						<div className="col-md-9 cart-items">
							<h1>当前购物车</h1>
							{shelfItems}
						</div>
						
						 <div className="col-md-3 cart-total">
						 <a className="continue" href="#">Continue to basket</a>
						 <div className="price-details">
							 <h3>Price Details</h3>
							 <span>Total</span>
							 <span className="total1">6200.00</span>
							 <span>Discount</span>
							 <span className="total1">---</span>
							 <span>Delivery Charges</span>
							 <span className="total1">150.00</span>
							 <div className="clearfix"></div>				 
						 </div>	
						 <ul className="total_price">
						   <li className="last_price"> <h4>TOTAL</h4></li>	
						   <li className="last_price"><span>6350.00</span></li>
						   <div className="clearfix"> </div>
						 </ul>
						
						 
						 <div className="clearfix"></div>
						 <a className="order" href="#">Place Order</a>
						 <div className="total-item">
							 <h3>OPTIONS</h3>
							 <h4>COUPONS</h4>
							 <a className="cpns" href="#">Apply Coupons</a>
							 <p><a href="#">Log In</a> to use accounts - linked coupons</p>
						 </div>
						</div>
						
					</div>
				</div>
		);
	},
	componentDidMount:function(){
		$("input[type='number']").on("change",function(ev){
			console.log("udatesdfasdf");
			var qt = ev.target.value;
			var itemId = $(event.target).attr("role");
			var item = simpleCart.find(itemId);
			item.quantity(qt);
			simpleCart.update();
			var result = new Object();
			var list = new Array();
			var items = simpleCart.items();
			for(var i = 0;i<items.length;i++){
				var item = new Object();
				item.thumb = items[i].get("thumb");
				item.name = items[i].get("name");
				item.price = items[i].get("price");
				item.name = items[i].get("name");
				item.quantity = items[i].get("quantity");
				item.id = items[i].get("id");
				item.total = items[i].get("total");
				list.push(item);
			}
			result.list = list;
			this.setState(result);
		}.bind(this));
		
		
		$('.close2').on('click',function(e){
			var node = e.target.parentNode;
			var id = $(node).attr("id");
			var item = simpleCart.find(id);
			$(node).fadeOut('slow',function(ev){
				$(node).remove();
				item.remove();
			});
			
		});
	},
	
});







var cart = React.createElement(ShowItem,null,null);
common.addCommon("cart",cart);