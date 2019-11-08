package com.example.Review.controller;

import com.example.Review.domain.User;
import com.example.Review.entity.R;
import com.example.Review.entity.ResponseResult;
import com.example.Review.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/user")
public class UserController {
    @Autowired
    UserService userService;
    @RequestMapping(value = "/login", method = RequestMethod.POST)
    public ResponseResult login(@RequestBody User user){
        try{
            User user1=userService.selectByUsernamePass(user);
            if(user1!=null){
                return R.OK("ok", user1);
            }else{
                return R.FAIL("Fail");
            }
        }catch (Exception e){
            e.printStackTrace();
            return R.exception(e);
        }
    }
}
