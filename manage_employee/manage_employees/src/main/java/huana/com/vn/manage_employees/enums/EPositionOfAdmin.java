package huana.com.vn.manage_employees.enums;

import lombok.Getter;

public enum EPositionOfAdmin {
	director("Giám đốc"),
	manager("Quản lý");
	@Getter
	String text;
	private EPositionOfAdmin(String text) {
		this.text=text;
	}
}
