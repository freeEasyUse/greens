package org.greens.controller;

import org.greens.api.DubboService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

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

	@Autowired
	@Qualifier(value="dubboServiceImple")
	private DubboService dubboService;
	
	@RequestMapping("/sayHello")
	public void sayHelloWithDubbo(){
		dubboService.sayHelloDubbo("good");
	}
		
}
