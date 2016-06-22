package org.greens.vo;

import java.util.List;

/**
 * 
 * <p>Title:Tree</p>
 * <p>description:树结构</p>
 * <p>company:</p>
 * @author gel
 * @date 2016年6月22日
 *
 */
public class Tree {

	public Tree(){
		
	}
	
	public Tree(String text){
		this.text = text;
	}
	
	private String text;
	
	private List<Tree> nodes;

	public String getText() {
		return text;
	}

	public void setText(String text) {
		this.text = text;
	}

	public List<Tree> getNodes() {
		return nodes;
	}

	public void setNodes(List<Tree> nodes) {
		this.nodes = nodes;
	}
	
}
