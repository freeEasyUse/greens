/**
 * 树形菜单
 */

var tree = [
  {
    text: "Parent 1",
    nodes: [
      {
        text: "Child 1",
        nodes: [
          {
            text: "Grandchild 1"
          },
          {
            text: "Grandchild 2"
          }
        ]
      },
      {
        text: "Child 2"
      }
    ]
  },
  {
    text: "Parent 2"
  },
  {
    text: "Parent 3"
  },
  {
    text: "Parent 4"
  },
  {
    text: "Parent 5"
  }
];


var TreeMenu = React.createClass({
	treeNodeClick : function(event, data){
		console.log("node"+data);
	},
	
	getInitialState:function(){
		return {data:""};
	},
	
	componentDidMount:function(){
		$.ajax({
  			url: this.props.url,
  			dataType: 'json',
  			type: 'GET',
  			success: function(data) {
				var r = $.parseJSON(data);
    			this.setState({data: r.data});
    			//init树
    			$('#tree').treeview({data: r.data});
    			$('#tree').on('nodeSelected',this.treeNodeClick);
  			}.bind(this),
  			error: function(xhr, status, err) {
    			console.error(this.props.url, status, err.toString());
  			}.bind(this)
		});					
	},
	
	render:function(){
		return null;
	}
});
ReactDOM.render(<TreeMenu url="/greens_web/tree/getData"/>,$("#tree").get(0));