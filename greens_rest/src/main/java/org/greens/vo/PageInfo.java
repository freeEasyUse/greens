package org.greens.vo;

import java.util.List;

/**
 * 
 * <p>Title:PageInfo</p>
 * <p>description:分页信息描述</p>
 * <p>company:</p>
 * @author gel
 * @date 2016年6月28日
 *
 */
public class PageInfo<T,K>{

	private int currentPage;	//当前页
	
	private int numberOfPages = 5;	//显示页面数
	
	private int totalPages;		//总页数
	
	private int rowCount = 6;		//每页数量
	
	private List<T> result;		//查询结果集
	
	private K searchConditon;				//查询条件

	public int getCurrentPage() {
		return currentPage;
	}

	public void setCurrentPage(int currentPage) {
		this.currentPage = currentPage;
	}

	public int getNumberOfPages() {
		return numberOfPages;
	}

	public void setNumberOfPages(int numberOfPages) {
		this.numberOfPages = numberOfPages;
	}

	public int getTotalPages() {
		return totalPages;
	}

	public void setTotalPages(int totalPages) {
		this.totalPages = totalPages;
	}
	
	public int getRowCount() {
		return rowCount;
	}

	public void setRowCount(int rowCount) {
		this.rowCount = rowCount;
	}

	public List<T> getResult() {
		return result;
	}

	public void setResult(List<T> result) {
		this.result = result;
	}

	public K getSearchConditon() {
		return searchConditon;
	}

	public void setSearchConditon(K searchConditon) {
		this.searchConditon = searchConditon;
	}
	
	/**
	 * 根据总记录数 计算一共分页数量
	 */
	public void setTotalPageByAllCount(int allCount){
		this.totalPages = allCount%this.getRowCount()==0?allCount/this.getRowCount():allCount/this.getRowCount()+1;
	}
}
