package com.example.Review.dao;

import com.example.Review.domain.User;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

@Mapper
public interface UserMapper {
    User selectByUsernamePass(@Param("param") User param);
    int updateByPrimaryKey(@Param("param") User record);
}
