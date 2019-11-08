package com.example.Review.domain;

import java.io.Serializable;
import java.util.Date;

public class User implements Serializable {
    private static final long serialVersionUID = 1L;

    private Integer uid;

    private String username;

    private String password;

    private String accesstype;

    private Date createtime;

    private Date logintime;

    private String token;

    public Date getCreatetime() {
        return createtime;
    }

    public Date getLogintime() {
        return logintime;
    }

    public String getToken() {
        return token;
    }

    public void setCreatetime(Date createtime) {
        this.createtime = createtime;
    }

    public void setLogintime(Date logintime) {
        this.logintime = logintime;
    }

    public void setToken(String token) {
        this.token = token;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getUsername() {
        return username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Integer getUid() {
        return uid;
    }

    public String getAccesstype() {
        return accesstype;
    }

    public void setUid(Integer uid) {
        this.uid = uid;
    }

    public void setAccesstype(String accesstype) {
        this.accesstype = accesstype;
    }
}
