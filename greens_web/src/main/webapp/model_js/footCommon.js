/**
 * 底部组件 
 */

/** 帮助中心 */
var HelpCenter = React.createClass({
	render:function(){
		return (
			<div className="col-md-3 cust">
					<h4>新手上路</h4>
					<li><a href="#">帮助中心</a></li>
					<li><a href="#">常见问题</a></li>
					<li><a href="buy.html">购物流程</a></li>
					<li><a href="#">退货说明</a></li>
			</div>
		);
	}
});

/** 关于我们 */
var AboutUs = React.createClass({
	render:function(){
		return (
			<div className="col-md-3 abt">
				<h4>关于我们</h4>
				<li><a href="#">关于菜蓝</a></li>
				<li><a href="#">监控中心</a></li>
				<li><a href="#">招聘英才</a></li>
				<li><a href="contact.html">联系我们</a></li>
			</div>
		);
	}
});

/** 会员中心 */
var UserCenter =  React.createClass({
	render:function(){
		return (
			<div className="col-md-3 myac">
				<h4>会员中心</h4>
				<li><a href="register.html">登录说明</a></li>
				<li><a href="#">我的信息</a></li>
				<li><a href="#">订单记录</a></li>
				<li><a href="buy.html">支付情况</a></li>
			</div>
		);
	}
});


/** 地址 */
var Address = React.createClass({
	render:function(){
		return (
			<div className="col-md-3 our-st">
				<h4>OUR STORES</h4>
				<li><i class="add"> </i>Jl. Haji Muhidin, Blok G no.69</li>
				<li><i class="phone"> </i>025-2839341</li>
				<li><a href="mailto:info@example.com"><i class="mail"> </i>info@sitename.com </a></li>
			</div>
		);
	}
});


var FootComment =  React.createClass({
	render:function(){
		return (
				<div className="footer">
					<hr></hr>
					<div className="container">
						<HelpCenter/>
						<AboutUs/>
						<UserCenter/>
						<UserCenter/>
					</div>
				</div>
		);
	}
});

ReactDOM.render(<FootComment/>,$("#footer").get(0));




