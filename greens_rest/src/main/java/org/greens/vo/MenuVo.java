package org.greens.vo;

import java.util.List;

public class MenuVo {

	private String showText; //显示文本
	
	private String menuCode;	//编码
	
	private String name;	//名字
	
	private List<MenuVo> subList;	//下级menu

	public String getShowText() {
		return showText;
	}

	public void setShowText(String showText) {
		this.showText = showText;
	}

	public String getMenuCode() {
		return menuCode;
	}

	public void setMenuCode(String menuCode) {
		this.menuCode = menuCode;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public List<MenuVo> getSubList() {
		return subList;
	}

	public void setSubList(List<MenuVo> subList) {
		this.subList = subList;
	}
}
