/**
 * 模态框
 */
var ModelComment = React.createClass({
	
	commitFunction:function(){
		 console.log("commit");
		 /** 验证提交信息 */
    	 $('#addGood').ajaxSubmit({
	           url:'/greens_web/goods/add',
	           cache:false,
	           enctype:"multipart/form-data",
	           contentType: "application/x-www-form-urlencoded; charset=utf-8",  
	           type:'post',
	           success: function(data) {
	        	   console.log("success");
	           } ,
	           error:function(data){
	        	   console.log("error");
	           }
	     });
	},
	
	render:function(){
		var result = null;
		if(this.props.type=="add"){
			result = <div className="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
			<div className="modal-dialog">
				<div className="modal-content">
					<div className="modal-header">
						<button type="button" className="close" data-dismiss="modal" aria-hidden="true">关闭</button>
						<h4 className="modal-title">发布商品</h4>
					</div>
					<div className="modal-body">
						<form className="form-horizontal row" method="post" enctype="multipart/form-data" id="addGood">
							<div className="form-group">
								<label className="col-sm-2 control-label">商品名字</label>
								<div className="col-sm-4">
									<input type="text" className="form-control" name="goodName" required="required"></input>
								</div>
								<label className="col-sm-2 control-label">联系方式</label>
								<div className="col-sm-4">
									<input type="text" className="form-control" name="contact" required="required"></input>
								</div>
							 </div>
							 
							<div className="form-group">
								<label className="col-sm-2 control-label">商品描述</label>
								<div className="col-sm-4">
									<input type="text" className="form-control" name="goodDes"></input>
								</div>
								<label className="col-sm-2 control-label">联系人</label>
								<div className="col-sm-4">
									<input type="text" className="form-control" name="contactPeople"></input>
								</div>
							 </div>
							 
							<div className="form-group">
								<label className="col-sm-2 control-label">商品大类</label>
								<div className="col-sm-4">
									<select name="bigType">
								        <option>something</option>
								        <option>2</option>
								        <option>3</option>
								        <option>4</option>
								        <option>5</option>
									</select>
								</div>
								<label className="col-sm-2 control-label">商品子类</label>
								<div className="col-sm-4">
									<select name="type">
								        <option>something</option>
								        <option>2</option>
								        <option>3</option>
								        <option>4</option>
								        <option>5</option>
						        	</select>
								</div>
							 </div>
							 
							 <div className="form-group">
								<label className="col-sm-2 control-label">发货省份</label>
								<div className="col-sm-4">
									<select name="province">
								        <option>something</option>
								        <option>2</option>
								        <option>3</option>
								        <option>4</option>
								        <option>5</option>
									</select>
								</div>
								<label className="col-sm-2 control-label">发货城市</label>
								<div className="col-sm-4">
									<select name="city">
								        <option>something</option>
								        <option>2</option>
								        <option>3</option>
								        <option>4</option>
								        <option>5</option>
						        	</select>
								</div>
							 </div>
							 <div className="form-group">
							 	<label className="col-sm-2 control-label">商品图片</label>
							 	<div className="col-sm-4">
							 	 	<input className="input-file" type="file" multiple="multiple" name="files"></input>
							 	</div>
							 </div>
							 <div className="modal-footer">
							 	<button type="reset" className="btn btn-default" ref="resetButton">重置</button>
							 	<button type="button" className="btn btn-default" data-dismiss="modal">关闭</button>
					            <button type="button" className="btn btn-primary" onClick={this.commitFunction}>提交</button>
							 </div>
						</form>
					</div>
				</div>
			</div>
		</div>
		}
		return result;
	},
	
	/** 渲染完成 清空 form */
	componentDidMount:function(){
		console.log("render after");
		console.log(this.refs.resetButton);
		console.log($(this.refs.resetButton));
		$(this.refs.resetButton).click();
	}
});


ReactDOM.render(<ModelComment type="add"/>,$("#modalCon").get(0));