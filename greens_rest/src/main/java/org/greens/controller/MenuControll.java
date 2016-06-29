package org.greens.controller;

import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpServletResponse;

import org.greens.vo.MenuVo;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

/**
 * 
 * <p>Title:MenuControll</p>
 * <p>description:</p>
 * <p>company:</p>
 * @author gel
 * @date 2016年6月29日
 *
 */
@RequestMapping("/menu")
public class MenuControll extends BaseController {
	
	@RequestMapping("/getAllData")
	@ResponseBody
	public void getAllMenuListData(HttpServletResponse response){
		//创建menu数据
		List<MenuVo> subList = new ArrayList<MenuVo>();
		
		
		
		
	}
	
	
}
