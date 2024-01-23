package huana.com.vn.manage_employees.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class EmployeeController {
	private static final String EMPLOYEE_PATH_STRING = "manage_employees/employees";

    @GetMapping("/manage_employees/add")
    public String renderEmployeeForm() {
      
        System.out.println("Received request for employee form");

        // Sử dụng "forward" để chuyển hướng mà không thay đổi URL trên trình duyệt
        return "forward:/content/add-employee.zul";
    }
}
