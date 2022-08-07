package com.revature.Commerce.controllers;

import com.revature.Commerce.models.ClientMessage;
import com.revature.Commerce.models.User;
import com.revature.Commerce.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import java.util.List;

import static com.revature.Commerce.utils.ClientMessageUtils.*;
//@CrossOrigin(allowedHeaders = {"Access-Control-Allow-Origin", url})
@CrossOrigin(origins = {"http://127.0.0.1:5500"})
@RestController
@RequestMapping("/commerce")
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping(value = "/user")
    public @ResponseBody User getUserById(@RequestParam int userId){
        return userService.getUserById(userId);
    }

    @GetMapping("/users")
    public @ResponseBody List<User> getAllUsers(){
        return userService.getAllUsers();
    }

    @GetMapping("/userbyusername")
    @ResponseStatus(HttpStatus.ACCEPTED)
    public @ResponseBody User getUserByUsername(@RequestParam String userName,String userPassword){ //@RequestParam(name="username-sign-in") @RequestParam(name="password-sign-in")
        System.out.println(userName);
        System.out.println(userPassword);
        return userService.getByUsername(userName, userPassword);
    }

    @PostMapping("/user")
    @ResponseStatus(HttpStatus.ACCEPTED)
    public @ResponseBody ClientMessage createUser(@RequestBody User user){
        return userService.createUser(user) ? CREATION_SUCCESSFUL:CREATION_FAILED;
    }

    @PutMapping("/user")
    public @ResponseBody ClientMessage updateUser(@RequestBody User user){
        return userService.updateUser(user) > 0 ? UPDATE_SUCCESSFUL:UPDATE_FAILED;
    }

    @DeleteMapping("/user")
    public @ResponseBody ClientMessage deleteUser(@RequestBody User user){
        return userService.deleteUser(user) ? DELETION_SUCCESSFUL:DELETION_FAILED;
    }
}
