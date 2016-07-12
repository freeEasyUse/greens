package org.greens.controller;

import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletResponse;

import org.apache.commons.io.FileUtils;
import org.greens.vo.GoodInfoVo;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;

@Controller
@RequestMapping("goods")
public class GoodsController extends BaseController {
	
	/**
	 * 发布新增商品
	 * @param goodInfoVo
	 * @throws IOException
	 */
	@RequestMapping(value = "/add", method = RequestMethod.POST)
	public void addGood(GoodInfoVo goodInfoVo) throws IOException{
		if(goodInfoVo.getFiles()!=null){
			for(MultipartFile file:goodInfoVo.getFiles()){
				FileUtils.copyInputStreamToFile(file.getInputStream(),new File("E:\\workspace\\greens\\images\\"+file.getOriginalFilename()));
			}
		}
	}
	
	/**
	 * 返回大类
	 * @param response
	 */
	@RequestMapping(value = "/getBigType",method = RequestMethod.POST)
	public void getBigType(HttpServletResponse response){
		List<String> bigTypes = Arrays.asList("type1","type2","type3");
		Map<String, Object>  re = new HashMap<String, Object>();
		re.put("list", bigTypes);
		returnSuccess(response, re);
	}
	
	/**
	 * 根据大类返回 子类
	 * @param response
	 * @param bigType
	 */
	@RequestMapping(value = "/getTypes",method = RequestMethod.GET)
	public void getType(HttpServletResponse response,@RequestParam(value="ptype") String bigType){
		List<String> types = new ArrayList<String>();
		String temp = "";
		switch (bigType) {
		case "type1":
			temp = "1";
			break;
			
		case "type2":
			temp = "2";
			break;
			
		case "type3":
			temp = "3";
			break;
		default:
			break;
		}
		for(int i = 0;i<6;i++){
			types.add("d"+temp);
		}
		
		Map<String, Object> re = new HashMap<String, Object>();
		re.put("list", types);
		returnSuccess(response, re);
	}
	
	
	/**
	 * 返回省份
	 * @param response
	 */
	@RequestMapping("/province")
	public void sendProvince(HttpServletResponse response){
		List<String> provinces = Arrays.asList("江苏","安徽");
		Map<String, Object>  re = new HashMap<String, Object>();
		re.put("list", provinces);
		returnSuccess(response, re);
	}
	
	
	@RequestMapping(value = "/getCities",method = RequestMethod.GET)
	public void getCitys(HttpServletResponse response,@RequestParam(value="ptype") String province){
		List<String> cities = new ArrayList<String>();
		switch (province) {
		case "江苏":
			cities.add("南通");
			cities.add("无锡");
			cities.add("常州");
			cities.add("苏州");
			break;
			
		case "安徽":
			cities.add("合肥");
			cities.add("六安");
			cities.add("青岛");
			break;
		default:
			break;
		}
		
		Map<String, Object> re = new HashMap<String, Object>();
		re.put("list", cities);
		returnSuccess(response, re);
	}
	
	
	
	
}
