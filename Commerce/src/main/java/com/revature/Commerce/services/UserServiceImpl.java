package com.revature.Commerce.services;

import com.revature.Commerce.models.User;
import com.revature.Commerce.repos.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class UserServiceImpl implements UserService{

    @Autowired
    private UserRepo userRepo;

    @Autowired
    public UserServiceImpl (UserRepo userRepo){
        this.userRepo=userRepo;
    }
    @Override
    public boolean createUser(User user) {
        int pk = userRepo.save(user).getUserId();
        return (pk > 0) ? true:false;
    }

    @Override
    public User getUserById(int userId) {
        return userRepo.findById(userId);
    }

    @Override
    public List<User> getAllUsers() {
        return userRepo.findAll();
    }

    @Override
    public int updateUser(User user) {
        return userRepo.update(user.getUserName(), user.getUserPassword(), user.getUserEmail(), user.getUserFirstName(), user.getUserLastName(), user.getAddress(), user.getBalance(), user.getUserId());
    }

    @Override
    public boolean deleteUser(User user) {
        userRepo.delete(user);
        return true;
    }
}
