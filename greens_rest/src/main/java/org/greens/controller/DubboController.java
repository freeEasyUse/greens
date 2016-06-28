package org.greens.controller;

import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletResponse;

import org.greens.api.DubboService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

/**
 * 
 * <p>Title:DubboController</p>
 * <p>description:dubbo测试</p>
 * <p>company:</p>
 * @author gel
 * @date 2016年6月22日
 *
 */
@Controller
@RequestMapping("/dubbo")
public class DubboController extends BaseController {

	@Autowired(required=false)
	@Qualifier(value="dubboServiceImple")
	private DubboService dubboService;
	
	@RequestMapping(value = "/sayHello",method = {RequestMethod.GET})
	@ResponseBody
	public void sayHelloWithDubbo(HttpServletResponse response){
		String res = dubboService.sayHelloDubbo("good");
		Map<String, Object> result = new HashMap<String, Object>();
		result.put("data", res);
		returnSuccess(response, result);
	}
		
}
