/**
 * 首页body组件
 */

/** 轮播指标 */
var CarouselIndicators = React.createClass({
	render:function(){
		var cators = this.props.cators;
		var catorsHtml = new Array();
		for(var i = 0;i<cators.length;i++)
		{
			var v = cators[i];
			if(i==0){
				catorsHtml.push(<li data-target={v.relateId} data-slide-to={v.index} className="active"></li>);
			}
			else{
				catorsHtml.push(<li data-target={v.relateId} data-slide-to={v.index}></li>)
			}
		}
		console.log(catorsHtml);
		return (
				   <ol className="carousel-indicators">
				   		{catorsHtml}
				   </ol>  
		);
	}
	
});

/** 轮播（Carousel）项目 */
var CarouselItem = React.createClass({
	render:function(){
		console.log("indexBoy");
		return (
			<div className="carousel-inner">
				<div className="item active">
					<img src="images/w5.jpg" alt="diyiz"></img>
					<div className="carousel-caption">标题</div>
				</div>	
				{this.props.items.map(function(item){
					return (
						 <div className="item">
					         <img src={item.imgSrc} alt={item.alt}></img>
					         <div className="carousel-caption">标题</div>
				         </div>	
					);
				})}
			</div>
		);
	}
});


var IndexBoy = React.createClass({
	render:function(){
		return (
				<div className="carousel slide" id={this.props.id}>
					<CarouselIndicators cators={this.props.cators}/>
					<CarouselItem items = {this.props.items}/>
					<a className="carousel-control left" href={this.props.id} data-slide="prev">&lsaquo;</a>
					<a className="carousel-control right" href={this.props.id} data-slide="next">&rsaquo;</a>
				</div>
		);
	},
	componentDidMount:function(){
		console.log("caroursel");
		$("#myCarousel").carousel({
			  interval: 200
		});
		$('.carousel').carousel()
	}
	
});

var id = "#myCarousel";
var items = new Array();
for(var i=0;i<3;i++){
	var item = new Object();
	item.imgSrc = "images/w5.jpg";
	item.alt = "picture";
	items.push(item);
}

var cators = new Array();
for(var i=0;i<3;i++){
	var cator = new Object();
	cator.index = i;
	cator.relateId = id;
	cators.push(cator);
}


ReactDOM.render(<IndexBoy id={id} cators={cators} items={items}/>,$("#indexShow").get(0));




