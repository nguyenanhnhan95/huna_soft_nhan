package com.example.grocery_store_sales_online.service.notification;

import com.example.grocery_store_sales_online.model.Notification;
import com.example.grocery_store_sales_online.repository.notification.NotificationRepository;
import com.example.grocery_store_sales_online.service.base.BaseService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class NotificationService  extends BaseService implements INotificationService<Notification> {
    private  final NotificationRepository notificationRepository;
    @Override
    public void saveNotification(Notification notification) {
        setMetaData(notification);
        notificationRepository.save(notification);
    }

    @Override
    public List<Notification> findAll() {
        return notificationRepository.findAll();
    }

}
