package richlet;

import java.util.Map;

import org.zkoss.xel.VariableResolver;
import org.zkoss.zk.ui.Component;
import org.zkoss.zk.ui.util.Composer;
import org.zkoss.zk.ui.util.Template;
import org.zkoss.zul.Listcell;
import org.zkoss.zul.Listitem;

import huana.com.vn.manage_employees.model.Employee;

public class EmployeesTemplate implements Template{

	@Override
	public Component[] create(Component parent, Component insertBefore, VariableResolver resolver, Composer composer) {
		Employee employee = (Employee)resolver.resolveVariable("each");
		Listitem listitem = new Listitem();
		listitem.appendChild(new Listcell(employee.getId().toString()));
		listitem.appendChild(new Listcell(employee.getName().toString()));
		listitem.appendChild(new Listcell(employee.getPhone().toString()));
		listitem.appendChild(new Listcell(employee.getAddress().toString()));
		listitem.appendChild(new Listcell(employee.getSalary().toString()));
		if (insertBefore ==null || parent != insertBefore.getParent()){
			parent.appendChild(listitem);
		}else{
			parent.insertBefore(listitem, insertBefore);
		}

		Component[] components = new Component[1];
		components [0] = listitem;

		return components;
	}

	@Override
	public Map<String, Object> getParameters() {
		// TODO Auto-generated method stub
		return null;
	}

}
