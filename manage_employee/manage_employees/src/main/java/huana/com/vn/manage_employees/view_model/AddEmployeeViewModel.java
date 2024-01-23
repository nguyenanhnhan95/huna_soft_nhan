package huana.com.vn.manage_employees.view_model;

import java.util.Collections;
import java.util.HashMap;
import java.util.Map;

import org.zkoss.bind.annotation.BindingParam;
import org.zkoss.bind.annotation.Default;
import org.zkoss.bind.annotation.Init;
import org.zkoss.zk.ui.Executions;
import org.zkoss.zk.ui.annotation.Command;
import org.zkoss.zk.ui.select.annotation.WireVariable;

import huana.com.vn.manage_employees.model.Employee;
import huana.com.vn.manage_employees.service.EmployeeServiceImpl;
import huana.com.vn.manage_employees.util.ClientNotificationUtils;
import lombok.Getter;
import lombok.Setter;
import org.apache.commons.collections.map.AbstractMapDecorator;
@Getter
public class AddEmployeeViewModel {
	@Setter
	private Employee modal;
	
	private EmployeeServiceImpl employeeService =new EmployeeServiceImpl();

	@Init
	public void init() {
		if(modal == null) {
			modal=new Employee();
		}
	}
	@Command
	public void submit(@BindingParam("closeable") @Default("false") Boolean closeable) {
		if(modal==null) {
			modal=new Employee();
		}
		finishSave();
		employeeService.saveEmployee(modal);
        if (closeable) {
        	Executions.sendRedirect("/");
        } else {
        	redirectFromAddToEditPage();
        }
	}
	protected void redirectFromAddToEditPage() {
    	Executions.sendRedirect("/content/add-employee.zul?id="+this.getModal().getId());
	}
	private void cleanUp() {
	}

	private void finishSave() {
		ClientNotificationUtils.showNotification("Lưu thành công", "Thông báo", ClientNotificationUtils.NotifyType.SUCCESS);
		cleanUp();
		redirectFromAddToEditPage();
	}
}
