package huana.com.vn.manage_employees.view_model;

import org.zkoss.bind.annotation.BindingParam;
import org.zkoss.bind.annotation.Default;
import org.zkoss.bind.annotation.Init;
import org.zkoss.zk.ui.Executions;
import org.zkoss.zk.ui.annotation.Command;
import org.zkoss.zk.ui.select.annotation.WireVariable;

import huana.com.vn.manage_employees.model.Employee;
import huana.com.vn.manage_employees.service.EmployeeServiceImpl;
import lombok.Getter;
import lombok.Setter;

@Getter
public class AddEmployeeViewModel {
	@Setter
	private Employee employee;
	@WireVariable
	private EmployeeServiceImpl employeeService;

	@Init
	public void init() {
		if(employee == null) {
			employee=new Employee();
		}
	}
	@Command
	public void submit(@BindingParam("closeable") @Default("false") Boolean closeable) {
		employeeService.saveEmployee(employee);
        if (closeable) {
        	Executions.sendRedirect("/admin/customer");
        } else {
        	redirectFromAddToEditPage();
        }
	}
	protected void redirectFromAddToEditPage() {
    	Executions.sendRedirect("/");
	}

}
