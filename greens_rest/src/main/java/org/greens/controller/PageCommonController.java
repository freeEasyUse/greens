package org.greens.controller;

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
import org.springframework.web.bind.annotation.ResponseBody;

/**
 * 
 * <p>Title:PageCommonController</p>
 * <p>description:分页组件controller</p>
 * <p>company:</p>
 * @author gel
 * @date 2016年6月28日
 *
 */
@Controller
@RequestMapping("pageCommon")
public class PageCommonController extends BaseController {

	@RequestMapping(value="/getPageInfo",method = RequestMethod.POST)
	@ResponseBody
	public void getPageIndex(@RequestBody PageInfo pageInfo,HttpServletResponse response){
		pageInfo.setTotalPages(100);
		Map<String, Object> result = new HashMap<String, Object>();
		List<String> strs = Arrays.asList("1","2","3","4");
		pageInfo.setResult(strs);
		result.put("result", pageInfo);
		returnSuccess(response, result);
	}
	
	
}
