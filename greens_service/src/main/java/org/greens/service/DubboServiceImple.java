package org.greens.service;

import org.greens.api.DubboService;
import org.springframework.stereotype.Service;

@Service
public class DubboServiceImple implements DubboService {

	public String sayHelloDubbo(String content) {
		return "hello dubbo with"+ content;
	}

}
