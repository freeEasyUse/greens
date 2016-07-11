package org.greens.vo;

import org.springframework.web.multipart.MultipartFile;

public class GoodInfoVo {

	private String goodName;
	
	private String contact;
	
	private String goodDes;
	
	private String contactPeople;
	
	private String bigType;
	
	private String type;
	
	private String province;
	
	private String city;
	
	private MultipartFile[] files;

	public String getGoodName() {
		return goodName;
	}

	public void setGoodName(String goodName) {
		this.goodName = goodName;
	}

	public String getContact() {
		return contact;
	}

	public void setContact(String contact) {
		this.contact = contact;
	}

	public String getGoodDes() {
		return goodDes;
	}

	public void setGoodDes(String goodDes) {
		this.goodDes = goodDes;
	}

	public String getBigType() {
		return bigType;
	}

	public void setBigType(String bigType) {
		this.bigType = bigType;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public String getProvince() {
		return province;
	}

	public void setProvince(String province) {
		this.province = province;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public MultipartFile[] getFiles() {
		return files;
	}

	public void setFiles(MultipartFile[] files) {
		this.files = files;
	}

	public String getContactPeople() {
		return contactPeople;
	}

	public void setContactPeople(String contactPeople) {
		this.contactPeople = contactPeople;
	}
	
	
}
