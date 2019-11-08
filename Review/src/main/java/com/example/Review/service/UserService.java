package com.example.Review.service;

import com.example.Review.domain.User;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Service;


@Service
public interface UserService {
    User selectByUsernamePass(@Param("param")User param);
}
