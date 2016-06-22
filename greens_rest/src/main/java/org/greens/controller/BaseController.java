package org.greens.controller;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.Iterator;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.web.bind.annotation.ExceptionHandler;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;

/**
 * 
 * <p>Title:BaseController</p>
 * <p>description:controller层基础类</p>
 * <p>company:easyuse</p>
 * @author gel
 * @date 2016年5月6日
 *
 */
public abstract class BaseController {

	/**
	 * 输出json串
	 * @param response
	 * @param obj
	 */
	public void outPrintJson(HttpServletResponse response, Object obj) {
		response.setCharacterEncoding("UTF-8");
		response.addHeader("CacheControl", "no-cache");
		response.addHeader("Content-Type", "application/json");
		PrintWriter out = null;
		try {
			out = response.getWriter();
			String jsonStr = JSON.toJSONString(obj);
			out.print(jsonStr);
		} catch (IOException e) {
			e.printStackTrace();
		} finally {
			if (out != null) {
				out.flush();
				out.close();
			}
		}
	}

	/**
	 * 统一异常处理
	 * @param request
	 * @param response
	 * @param e
	 */
	@ExceptionHandler
	public void exception(HttpServletRequest request, HttpServletResponse response, Exception e) {
		outPrintJson(response, e);
	}


	/**
	 * 日期类型的转换
	 * @param binder
	 */
/*	@InitBinder
	public void initBinder(WebDataBinder binder) {
		binder.registerCustomEditor(Date.class, new DateEditor());
	}*/


	/**
	 * 返回处理结果
	 * @param response
	 * @param map
	 */
	public void returnSuccess(HttpServletResponse response, Map<String, Object> map) {
		JSONObject json = new JSONObject();
		if (map != null && map.keySet().size() > 0) {
			Iterator<String> keys = map.keySet().iterator();
			while (keys.hasNext()) {
				String key = keys.next();
				json.put(key, map.get(key));
			}
		}
		json.put("success", true);
		outPrintJson(response, json.toString());
	}


	/**
	 * 设置session
	 * @param key
	 * @param value
	 * @param request
	 */
	public void setValueToSession(String key, Object value, HttpServletRequest request) {
		request.getSession().setAttribute(key, value);
	}


	/**
	 * 获取session内容
	 * @param key
	 * @param request
	 * @return
	 */
	public Object getValueFromSession(String key, HttpServletRequest request) {
		return request.getSession().getAttribute(key);
	}
}
