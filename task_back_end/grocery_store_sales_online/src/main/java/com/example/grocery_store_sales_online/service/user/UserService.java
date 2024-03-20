package com.example.grocery_store_sales_online.service.user;

import com.example.grocery_store_sales_online.model.User;
import com.example.grocery_store_sales_online.repository.user.UserRepository;
import com.example.grocery_store_sales_online.service.base.BaseService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Optional;
@RequiredArgsConstructor
@Service
public class UserService extends BaseService implements IUserService<User> {
    private final UserRepository userRepository;
    @Override
    public User findByEmail(String email) {
        return userRepository.finByEmail(email);
    }

    @Override
    public Boolean existsByEmail(String email) {
        return findByEmail(email) != null;
    }

    @Override
    public Optional<User> findById(Long id) {
        return userRepository.findById(id);
    }

    @Override
    public User save(User user) {
        user.setPersonCreate(user.getName());
        setMetaData(user);
        return userRepository.saveModel(user);
    }
}
