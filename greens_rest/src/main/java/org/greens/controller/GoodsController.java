package org.greens.controller;

import java.io.File;
import java.io.IOException;

import org.apache.commons.io.FileUtils;
import org.greens.vo.GoodInfoVo;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.multipart.MultipartFile;

@Controller
@RequestMapping("goods")
public class GoodsController extends BaseController {
	
	@RequestMapping(value = "/add", method = RequestMethod.POST)
	public void addGood(GoodInfoVo goodInfoVo) throws IOException{
		if(goodInfoVo.getFiles()!=null){
			for(MultipartFile file:goodInfoVo.getFiles()){
				FileUtils.copyInputStreamToFile(file.getInputStream(),new File("E:\\workspace\\greens\\images\\"+file.getOriginalFilename()));
			}
		}
	}
	
}
