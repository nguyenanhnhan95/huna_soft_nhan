package com.example.grocery_store_sales_online.service.notification;

import java.util.List;

public interface INotificationService <Notification> {
    void saveNotification(Notification notification);

    List<Notification> findAll();
}
