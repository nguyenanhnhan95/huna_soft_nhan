package huana.com.vn.manage_employees.service;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collector;
import java.util.stream.Collectors;

import javax.xml.crypto.Data;

import huana.com.vn.manage_employees.model.Employee;

public class EmployeeServiceImpl {
	public static Map<Integer, Employee> mapEmployeeMap = new HashMap<>();
	static {
//		mapEmployeeMap.put(1, new Employee(1,"Nguyen Anh Nhan","Da Nang","nguyenanhnhan@gmai.com","0906356412",
//		Date.valueOf("2024-01-22 15:01:00"),"2024-01-22 15:01:00",260000.0));
//		mapEmployeeMap.put(2, new Employee(2,"Nguyen Anh Vu","Da Nang","nguyenanhvu@gmai.com","0906356154",
//				LocalDate.parse("1994-01-01"),LocalDate.parse("2022-10-05"),220000.0));
	}
	public List<Employee> findAll(){
		return new ArrayList<Employee>(mapEmployeeMap.values());
	}
	public List<Employee> searchEmployees(String name){
		if(name==null || name=="") {
			return findAll();
		}
		return mapEmployeeMap.values().stream().filter(employee->employee.getEmail().toLowerCase().contains(name.toLowerCase())).collect(Collectors.toList());
	}
	public List<Employee> deleteEmployeeByOfId(Integer id){
		mapEmployeeMap.remove(id);
		return EmployeeServiceImpl.this.findAll();
	}
	public List<Employee> saveEmployee(Employee employee){
		employee.setId(mapEmployeeMap.size()+1);
		mapEmployeeMap.put(mapEmployeeMap.size()+1, employee);
		return findAll();
	}
	public List<Employee> editEmployee(Employee employee){
		mapEmployeeMap.put(employee.getId(), employee);
		return findAll();
	}
	
}
