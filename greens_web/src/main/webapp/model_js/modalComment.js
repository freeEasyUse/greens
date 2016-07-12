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
	
	resetInfo:function(){
		$(this.refs.resetButton).trigger("click");
	},
	
	render:function(){
		var result = null;
		if(this.props.type=="add"){
			result = <div className="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
			<div className="modal-dialog">
				<div className="modal-content">
					<div className="modal-header">
						<button type="button" className="close" data-dismiss="modal" aria-hidden="true" onClick={this.resetInfo}>关闭</button>
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
									<select name="bigType" ref="bigType">
									</select>
								</div>
								<label className="col-sm-2 control-label">商品子类</label>
								<div className="col-sm-4">
									<select name="type" ref="type">
						        	</select>
								</div>
							 </div>
							 
							 <div className="form-group">
								<label className="col-sm-2 control-label">发货省份</label>
								<div className="col-sm-4">
									<select name="province" ref="province">
									</select>
								</div>
								<label className="col-sm-2 control-label">发货城市</label>
								<div className="col-sm-4">
									<select name="city" ref="city">
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
							 	<button type="button" className="btn btn-default" data-dismiss="modal" onClick={this.resetInfo}>关闭</button>
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
	
	/** 渲染结束 实在下拉框中的内容 */
	componentDidMount:function(){
		var selectRef_big = this.refs.bigType;
		var selectRef_type = this.refs.type;
		common.selectCommon(selectRef_big,'/greens_web/goods/getBigType',selectRef_type,'/greens_web/goods/getTypes');
		
		var selectRef_province = this.refs.province;
		var selectRef_city = this.refs.city;
		common.selectCommon(selectRef_province,'/greens_web/goods/province',selectRef_city,'/greens_web/goods/getCities');
	}
	
});


ReactDOM.render(<ModelComment type="add"/>,$("#modalCon").get(0));