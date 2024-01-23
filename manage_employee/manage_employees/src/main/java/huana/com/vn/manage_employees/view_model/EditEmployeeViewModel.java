package huana.com.vn.manage_employees.view_model;

import org.apache.commons.collections.MapUtils;
import org.zkoss.bind.annotation.Init;
import org.zkoss.zk.ui.Executions;

public class EditEmployeeViewModel extends AddEmployeeViewModel{
	@Init 
	public void init() {
		Integer id = Integer.valueOf(Executions.getCurrent().getParameter("id"));
	}
}