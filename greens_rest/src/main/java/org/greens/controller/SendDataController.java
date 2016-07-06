package org.greens.controller;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletResponse;

import org.greens.vo.PageInfo;
import org.greens.vo.PersonVo;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

@RequestMapping("/sendData")
@Controller
public class SendDataController extends BaseController {

	/**
	 * 返回菜单数据
	 * @param response
	 */
	@RequestMapping("/menu")
	@ResponseBody
	public void sendMenuData(HttpServletResponse response){
		List<Map<String, Object>> menus = new ArrayList<Map<String,Object>>();
		for(int i = 0;i<5;i++){
			Map<String, Object> menu = new HashMap<String, Object>();
			menu.put("showText", i+"showText");
			List<Map<String, Object>> lists = new ArrayList<Map<String,Object>>();
			for(int j = 0;j<6;j++){
				Map<String, Object> d = new HashMap<String, Object>();
				d.put("title", j+"title");
				List<Map<String, Object>> datas = new ArrayList<Map<String,Object>>();
				for(int k = 0;k<6;k++){
					Map data = new HashMap<String, Object>();
					data.put("name", k+"name");
					data.put("code", "code"+k);
					datas.add(data);
				}
				d.put("list", datas);
				lists.add(d);
			}
			menu.put("list", lists);
			menus.add(menu);
		}
		Map<String, Object> r = new HashMap<String, Object>();
		r.put("result", menus);
		returnSuccess(response, r);
	}
	
	
	@RequestMapping("/goods")
	@ResponseBody
	public void sendGoodsData(HttpServletResponse response, @RequestParam("menuCode")String menuCode){
		List<Map<String, Object>> goodGroup = new ArrayList<Map<String,Object>>();
		int dex = Integer.parseInt(menuCode.substring(0, 1))*4+4;
		for(int i = 0;i<dex;i++){
			Map<String, Object> o = new HashMap<String, Object>();
			o.put("imgSrc", "images/w5.jpg");
			o.put("goodName", "goodName"+i);
			o.put("desc", "description");
			goodGroup.add(o);
		}
		Map<String, Object> r = new HashMap<String, Object>();
		r.put("result", goodGroup);
		returnSuccess(response, r);
	}
	
	@RequestMapping(value="/contentWithPage",method = RequestMethod.POST)
	@ResponseBody
	public void getPageIndex(@RequestBody PageInfo<Map<String, Object>,PersonVo> pageInfo,HttpServletResponse response){
		String menuCode = pageInfo.getSearchConditon().getMenuCode();
		List<Map<String, Object>> goodGroup = new ArrayList<Map<String,Object>>();
		int dex = Integer.parseInt(menuCode.substring(0, 1))*4+4;
		for(int i = 0;i<dex;i++){
			Map<String, Object> o = new HashMap<String, Object>();
			o.put("imgSrc", "images/w5.jpg");
			o.put("goodName", "goodName"+i);
			o.put("desc", "description");
			goodGroup.add(o);
		}
		pageInfo.setTotalPageByAllCount(goodGroup.size());
		pageInfo.setResult(goodGroup.subList((pageInfo.getCurrentPage()-1)*pageInfo.getRowCount(), pageInfo.getCurrentPage()*pageInfo.getRowCount()));
		Map<String, Object> result = new HashMap<String, Object>();
		result.put("result", pageInfo);
		returnSuccess(response, result);
	}
}
