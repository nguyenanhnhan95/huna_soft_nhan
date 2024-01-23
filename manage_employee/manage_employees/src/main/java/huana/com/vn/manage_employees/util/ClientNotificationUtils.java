package huana.com.vn.manage_employees.util;

import org.zkoss.zk.ui.util.Clients;

public class ClientNotificationUtils {
	public static void showNotification(String content, String title, NotifyType type) {
		switch (type) {
			case SUCCESS:
				Clients.evalJavaScript("toastrSuccess('" + content + "', '" + title + "');");
				break;
			case INFO:
				Clients.evalJavaScript("toastrInfo('" + content + "', '" + title + "');");
				break;
			case WARNING:
				Clients.evalJavaScript("toastrWarning('" + content + "', '" + title + "');");
				break;
			case ERROR:
				Clients.evalJavaScript("toastrError('" + content + "', '" + title + "');");
				break;
			default:
				break;
		}
	}
	
	public static enum NotifyType {
		SUCCESS, INFO, WARNING, ERROR
	}
}
