package com.example.shoptuyet.service.role;

import com.example.shoptuyet.model.Role;
import com.example.shoptuyet.service.BasicService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RoleService extends BasicService {
    public Role findById(Long id){
        return find(Role.class).where(QRole.role.id.eq(id)).fetchFirst();
    }
    public Role findByName(String name) {
        return find(Role.class).where(QRole.role.nameRole.eq(name)).fetchFirst();
    }

    public Role findByAlias(String alias) {
        return find(Role.class).where(QRole.role.nameRole.eq(alias)).fetchFirst();
    }

    public List<Role> findAll() {
        return find(Role.class).fetch();
    }
}
