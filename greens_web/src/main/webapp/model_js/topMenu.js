/**
 * 顶部菜单栏
 */

var topArray = [{'show':'index','h':'http://wwww.baidu.com'},{'show':'greens','h':'http://wwww.baidu.com'},{'show':'friut','h':'http://wwww.baidu.com'}];


var TopMenu = React.createClass({
	
	render:function(){
		var lis = [];
		$.each(topArray,function(i,v){
			lis.push(<li><a href={v.h}>{v.show}</a></li>);
		});
		return (
				<ul className="nav nav-pills">
					{lis}
				</ul>
		);
	}
});
ReactDOM.render(<TopMenu/>,$("#topMenu").get(0));