package com.example.Review.service;

import com.example.Review.dao.UserMapper;
import com.example.Review.domain.User;
import org.apache.ibatis.annotations.Param;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.UUID;
@Service
public class UserServiceImpl implements UserService {
    @Autowired
    private UserMapper userMapper;
    public User selectByUsernamePass(@Param("param")User param){
        User user=userMapper.selectByUsernamePass(param);
        if(user!=null){
            String uuid= UUID.randomUUID().toString();
            user.setToken(uuid);
            user.setLogintime(new Date());
            userMapper.updateByPrimaryKey(user);
        }
        return user;
    }
}
