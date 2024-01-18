package huana.com.vn.manage_employees.service;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Collections;
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
		mapEmployeeMap.put(1, new Employee(1,"Nguyen Anh Nhan","Da Nang","nguyenanhnhan@gmai.com","0906356412",
		LocalDate.parse("1995-04-29"),LocalDate.parse("2022-05-05"),260000.0));
	}
	public List<Employee> findAll(){
		return new ArrayList<Employee>(mapEmployeeMap.values());
	}
	public List<Employee> searchEmployees(String name){
		return mapEmployeeMap.values().stream().filter(employee->employee.getEmail().toLowerCase().contains(name.toLowerCase())).collect(Collectors.toList());
	}
	public List<Employee> deleteEmployeeByOfId(Integer id){
		return mapEmployeeMap.values().stream().filter(employee->employee.getId()!=id).collect(Collectors.toList());
	}
	public List<Employee> saveEmployee(Employee employee){
		mapEmployeeMap.put(mapEmployeeMap.size()+1, employee);
		return findAll();
	}
	public List<Employee> editEmployee(Employee employee){
		mapEmployeeMap.put(employee.getId(), employee);
		return findAll();
	}
	
}
