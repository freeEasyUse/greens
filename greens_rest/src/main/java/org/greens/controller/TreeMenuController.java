package org.greens.controller;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletResponse;

import org.greens.vo.Tree;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

/**
 * 
 * <p>Title:TreeMenuController</p>
 * <p>description:</p>
 * <p>company:</p>
 * @author gel
 * @date 2016年6月22日
 *
 */
@Controller
@RequestMapping("/tree")
public class TreeMenuController extends BaseController {

	/**
	 * 返回tree数据
	 * @param response
	 */
	@RequestMapping(value = "/getData",method = {RequestMethod.GET})
	@ResponseBody
	public void getTreeData(HttpServletResponse response){
		List<Tree> nodes = new ArrayList<Tree>();
		List<Tree> node2 = new ArrayList<Tree>();
		Tree p1 = new Tree("p1");
		Tree c1 = new Tree("c1");
		Tree c2 = new Tree("c2");
		Tree c3 = new Tree("c3");
		Tree cc1 = new Tree("cc1");
		Tree cc2 = new Tree("cc2");
		nodes.add(c1);
		nodes.add(c2);
		nodes.add(c3);
		p1.setNodes(nodes);
		node2.add(cc1);
		node2.add(cc2);
		c1.setNodes(node2);
		
		
		
		Map<String, Object> resMap = new HashMap<String, Object>();
		resMap.put("data", Arrays.asList(p1));
		
		returnSuccess(response, resMap);
	}
	
}
