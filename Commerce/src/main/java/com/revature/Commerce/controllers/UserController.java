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

@CrossOrigin(origins = {"http://127.0.0.1:5500"})
@RestController
@RequestMapping("/commerce")
public class UserController {

    @Autowired
    private UserService userService;

    //WORKS WITH POSTMAN
    @GetMapping(value = "/user") // consumes = {MediaType.APPLICATION_JSON_VALUE}
    public @ResponseBody User getUserById(@RequestParam int userId){
        return userService.getUserById(userId);
    }
    //WORKS WITH POSTMAN

    //WORKS WITH POSTMAN
    @GetMapping("/users")
    public @ResponseBody List<User> getAllUsers(){
        return userService.getAllUsers();
    }
    //WORKS WITH POSTMAN

    //WORKS WITH POSTMAN
    @GetMapping("/userbyusername")
    public @ResponseBody User getUserByUsername(@RequestParam String userName, String userPassword){
        return userService.getByUsername(userName, userPassword);
    }
    //WORKS WITH POSTMAN

    //WORKS WITH POSTMAN
    @PostMapping("/user")
    @ResponseStatus(HttpStatus.ACCEPTED)
    public @ResponseBody ClientMessage createUser(@RequestBody User user){
        return userService.createUser(user) ? CREATION_SUCCESSFUL:CREATION_FAILED;
    }
    //WORKS WITH POSTMAN!

    //WORKS WITH POSTMAN!
    @PutMapping("/user")
    public @ResponseBody ClientMessage updateUser(@RequestBody User user){
        return userService.updateUser(user) > 0 ? UPDATE_SUCCESSFUL:UPDATE_FAILED;
    }
    //WORKS WITH POSTMAN!

    //WORKS WITH POSTMAN!
    @DeleteMapping("/user")
    public @ResponseBody ClientMessage deleteUser(@RequestBody User user){
        return userService.deleteUser(user) ? DELETION_SUCCESSFUL:DELETION_FAILED;
    }
    //WORKS WITH POSTMAN!
}
