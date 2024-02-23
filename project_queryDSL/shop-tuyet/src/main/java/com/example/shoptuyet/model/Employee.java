package com.example.shoptuyet.model;

import com.example.shoptuyet.enums.*;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "employee",uniqueConstraints = @UniqueConstraint(columnNames = {"nameLogin"}))
@Getter
@Setter
public class Employee extends AbstractPerson implements Serializable{
    private static final long serialVersionUID=1479437896339057579L;
    private Date birthOfDate;
    private String idCard;
    private String Avatar;
    @Column(length = 1000)
    private String culture;

    @Column(length = 1000)
    private String language;
    private boolean firstLogin;
    @ManyToOne
    private EducationalLevel educationalLevel;
    @Column
    @Enumerated(EnumType.STRING)
    private EDepartment department;
    @Enumerated(EnumType.STRING)
    private ECountry country;
    @Enumerated(EnumType.STRING)
    private EResignEmployeeStatus resignEmployeeStatus;
    @Enumerated(EnumType.STRING)
    private EEmployeeStatus employeeStatus;
    @Column
    @Enumerated(EnumType.STRING)
    private EUserStatus statusUser;
    @ManyToMany(fetch = FetchType.EAGER)
    @JoinTable(name = "employee_role",joinColumns = {@JoinColumn(name="employee_id")
    },inverseJoinColumns = {@JoinColumn(name="role_id")})
    private Set<Role> roles = new HashSet<>();

    public Employee() {
        super();
    }
    public Employee(final String nameLogin,final String name){
        super(nameLogin,name);
    }

    @Override
    public String toString() {
        return super.toString()+""+this.getName()+""+this.getRoles();
    }
    @Transient
    public boolean isActive(){
        return  EUserStatus.ACTIVATED.equals(this.getStatusUser());
    }
}
