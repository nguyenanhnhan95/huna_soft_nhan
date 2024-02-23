package com.example.shoptuyet.service;
import com.querydsl.core.Fetchable;
import com.example.shoptuyet.config.CoreObject;
import com.example.shoptuyet.model.Model;
import com.querydsl.core.SimpleQuery;
import com.querydsl.core.types.EntityPath;
import com.querydsl.core.types.Expression;
import com.querydsl.core.types.dsl.EntityPathBase;
import com.querydsl.core.types.dsl.Expressions;
import org.apache.commons.lang3.StringUtils;
import org.apache.commons.lang3.reflect.MethodUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.querydsl.jpa.impl.JPAQuery;
import javax.annotation.Nullable;
import javax.persistence.Entity;
import javax.persistence.EntityManager;
import javax.persistence.Transient;
import java.lang.reflect.Field;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;

import org.apache.commons.lang3.reflect.FieldUtils;
import org.springframework.transaction.TransactionStatus;
import org.springframework.transaction.support.TransactionCallbackWithoutResult;
import org.springframework.util.SystemPropertyUtils;

@Service
public class BasicService {
    private @Nullable Date fromDate;
    private @Nullable Date toDate;

    @Autowired
    private CoreObject core;

    private EntityManager em;

    public @Nullable Date getFromDate() {
        return fromDate;
    }

    public void setFromDate(Date fromDate) {
        this.toDate = fromDate;
    }

    public @Nullable Date getFixFromDate() {
        Date fixFromDate = fromDate;
        if (fixFromDate != null) {
            Calendar cal = Calendar.getInstance();
            cal.setTime(fixFromDate);
            //cal.add(Calendar.DATE, 1);
            cal.set(Calendar.HOUR_OF_DAY, 0);
            cal.set(Calendar.MINUTE, 0);
            cal.set(Calendar.SECOND, 0);
            fixFromDate = cal.getTime();
        }
        return fixFromDate;
    }

    public @Nullable Date getToDate() {
        return toDate;
    }

    public void setToDate(Date toDate) {
        this.toDate = toDate;
    }

    public @Nullable Date getFixToDate() {
        Date fixToDate = toDate;
        if (getToDate() != null) {
            Calendar cal = Calendar.getInstance();
            cal.setTime(fixToDate);
            //cal.add(Calendar.DATE, 1);
            cal.set(Calendar.HOUR_OF_DAY, 23);
            cal.set(Calendar.MINUTE, 59);
            cal.set(Calendar.SECOND, 59);
            fixToDate = cal.getTime();
        }
        return fixToDate;
    }

    public List<Integer> getListPageSizes() {
        List<Integer> list = new ArrayList<>();
        list.add(10);
        list.add(20);
        list.add(50);
        list.add(100);
        return list;
    }



    public <C> JPAQuery<C> find(final Class<C> clazz) {
        final String path = StringUtils.uncapitalize(clazz.getSimpleName());
        EntityPath<?> ePath = null;
        try {
            final Class<?> qclass = Class.forName(clazz.getPackage().getName() + ".Q" + clazz.getSimpleName());
            Field field = FieldUtils.getDeclaredField(qclass, path + "1");
            if (field == null) {
                field = FieldUtils.getDeclaredField(qclass, path);
            }
            if (field != null) {
                ePath = (EntityPath<?>) field.get(null);
            }
        } catch (Exception e) {
            Logger.getAnonymousLogger().log(Level.INFO, e.getMessage(), e);
        }
        if (ePath == null) {
            ePath = new EntityPathBase<C>(clazz, path);
        }
        final JPAQuery<C> qry = this.<C>query().from(ePath);
        if (MethodUtils.getAccessibleMethod(clazz, "isDeleted", new Class<?>[0]) != null) {
            qry.where(Expressions.booleanPath(ePath, "deleted").isFalse());
        }
        return qry;
    }

    public <C> JPAQuery<C> find(final Class<C> clazz, boolean includeDeleted) {
        final String path = StringUtils.uncapitalize(clazz.getSimpleName());
        EntityPath<?> ePath = null;
        try {
            final Class<?> qclass = Class.forName(clazz.getPackage().getName() + ".Q" + clazz.getSimpleName());
            Field field = FieldUtils.getDeclaredField(qclass, path + "1");
            if (field == null) {
                field = FieldUtils.getDeclaredField(qclass, path);
            }
            if (field != null) {
                ePath = (EntityPath<?>) field.get(null);
            }
        } catch (Exception e) {
            Logger.getAnonymousLogger().log(Level.INFO, e.getMessage(), e);
        }
        if (ePath == null) {
            ePath = new EntityPathBase<C>(clazz, path);
        }
        final JPAQuery<C> qry = this.<C>query().from(ePath);
        if (includeDeleted) {
            // Nếu muốn lấy cả các giá trị đã xóa, không thêm điều kiện
        } else {
            // Nếu chỉ muốn lấy các giá trị chưa xóa, thêm điều kiện kiểm tra trường daXoa
            if (MethodUtils.getAccessibleMethod(clazz, "isDaXoa", new Class<?>[0]) != null) {
                qry.where(Expressions.booleanPath(ePath, "daXoa").isFalse());
            }
        }
        return qry;
    }

    public <C> JPAQuery<C> query() {
        return new JPAQuery<C>(getEm()).setHint("org.hibernate.cacheable", SystemPropertyUtils.resolvePlaceholders("${conf.defcacheable:true}"));
    }

    /***
     *
     * @param obj
     * @param force: Is record deleted in database? true mean yes
     */
    public void deleteModel(final Model obj, final boolean force) {
        if (!obj.noId()) {
            core.transactioner().execute(new TransactionCallbackWithoutResult() {
                @Override
                protected void doInTransactionWithoutResult(final TransactionStatus arg0) {
                    if (!force) {
                        obj.setDeleted(true);
                        saveModel(obj);
                    } else {
                        getEm().remove(getEm().merge(obj));
                    }
                }
            });
        }
    }

    public void deleteModel(final Model obj) {
        deleteModel(obj, false);
    }

    public void saveModel(final Model obj) {
        if (obj.getClass().isAnnotationPresent(Entity.class)) {
            core.transactioner().execute(new TransactionCallbackWithoutResult() {
                @Override
                protected void doInTransactionWithoutResult(final TransactionStatus arg0) {
                    BasicService.this.setMetaData(obj);
                    if (obj.noId()) {
                        getEm().persist(obj);
                    } else {
                        getEm().merge(obj);
                    }
                }
            });
        }
    }

    private void setMetaData(Model obj) {
        if (obj.getCreateDate() == null) {
            obj.setCreateDate(new Date());
        }
        obj.setEditDate(new Date());
/*        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        if (authentication != null) {
            Object principal = authentication.getPrincipal();
            if (principal instanceof UserDetails) {
                CustomUserDetails currentUser = (CustomUserDetails) principal;
                if (obj.getNguoiTao() == null) {
                    obj.setNguoiTao(currentUser.getUsername());
                }
                obj.setNguoiSua(currentUser.getUsername());
            }
        }*/
    }

    @SuppressWarnings("unchecked")
    public <B, A extends SimpleQuery<?> & Fetchable<B>> A page(final A qry, int size, int page) {
        if (size < 0) { // unlimited
            return qry;
        }
        long count;
        if (qry instanceof JPAQuery && !((JPAQuery<?>) qry).getMetadata().getGroupBy().isEmpty()) {
            final JPAQuery<?> jpa = (JPAQuery<?>) qry;
            Expression<?> pro = jpa.getMetadata().getProjection();
            if (pro == null) {
                pro = jpa.getMetadata().getJoins().get(0).getTarget();
            }
            count = jpa.select(Expressions.ZERO).fetch().size();
            jpa.select(pro);
        } else {
            count = qry.fetchCount();
        }
        if (count <= (long) page * size) {
            page = 0;
        }
        return (A) qry.offset((long) page * size).limit(size);
    }

    public EntityManager getEm() {
        if (em == null) {
            em = core != null ? core.em() : null;
        }
        return em;
    }
}
