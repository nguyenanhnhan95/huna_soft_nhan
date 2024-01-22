package huana.com.vn.manage_employees.model;

import java.time.LocalDate;
import java.util.Date;

import lombok.Getter;
import lombok.Setter;



@Getter
@Setter
public class Employee {
	private Integer id;
	private String name;
	private String address;
	private String email;
	private String phone;
	private Date birthOfData;
	private Date dateStartWork;
	private Double salary;
	
	
	public Employee(String name, String address, String email, String phone, Date birthOfData,
			Date dateStartWork, Double salary) {
		this.name = name;
		this.address = address;
		this.email = email;
		this.phone = phone;
		this.birthOfData = birthOfData;
		this.dateStartWork = dateStartWork;
		this.salary = salary;
	}

	public Employee(Integer id, String name, String address, String email, String phone, Date birthOfData,
			Date dateStartWork, Double salary) {
		this.id = id;
		this.name = name;
		this.address = address;
		this.email = email;
		this.phone = phone;
		this.birthOfData = birthOfData;
		this.dateStartWork = dateStartWork;
		this.salary = salary;
	}

	public Employee() {
	}
	
	
	

	
	
	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (!(obj instanceof Employee))
			return false;
		Employee other = (Employee) obj;
		if (id == null) {
			if (other.id != null)
				return false;
		} else if (!id.equals(other.id))
			return false;
		return true;
	}
}
