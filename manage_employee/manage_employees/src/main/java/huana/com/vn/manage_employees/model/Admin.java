package huana.com.vn.manage_employees.model;

import java.time.LocalDate;

import javax.xml.crypto.Data;

import huana.com.vn.manage_employees.enums.EPositionOfAdmin;

public class Admin {
	private Integer id;
	private String name;
	private String address;
	private String email;
	private String phone;
	private LocalDate birthOfData;
	private LocalDate dateStartWork;
	private EPositionOfAdmin positionOfAdmin;
	
	public Admin(Integer id, String name, String address, String email, String phone, LocalDate birthOfData,
			LocalDate dateStartWork, EPositionOfAdmin positionOfAdmin) {
		this.id = id;
		this.name = name;
		this.address = address;
		this.email = email;
		this.phone = phone;
		this.birthOfData = birthOfData;
		this.dateStartWork = dateStartWork;
		this.positionOfAdmin = positionOfAdmin;
	}
	public Admin() {
	}
	
	public void setBirthOfData(LocalDate birthOfData) {
		this.birthOfData = birthOfData;
	}
	public void setDateStartWork(LocalDate dateStartWork) {
		this.dateStartWork = dateStartWork;
	}
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPhone() {
		return phone;
	}
	public void setPhone(String phone) {
		this.phone = phone;
	}
	public EPositionOfAdmin getPositionOfAdmin() {
		return positionOfAdmin;
	}
	public void setPositionOfAdmin(EPositionOfAdmin positionOfAdmin) {
		this.positionOfAdmin = positionOfAdmin;
	}
	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (!(obj instanceof Employee))
			return false;
		Admin other = (Admin) obj;
		if (id == null) {
			if (other.id != null)
				return false;
		} else if (!id.equals(other.id))
			return false;
		return true;
	}
	

}
