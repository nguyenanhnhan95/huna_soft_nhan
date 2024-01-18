package huana.com.vn.manage_employees.service;



import java.util.List;

import huana.com.vn.manage_employees.model.Employee;

public interface IEmployeeService {
	public List<Employee> findAll();
	public List<Employee> search(String input);
}
