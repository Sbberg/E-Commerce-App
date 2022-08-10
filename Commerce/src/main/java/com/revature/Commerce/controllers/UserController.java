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
import static org.springframework.http.MediaType.APPLICATION_JSON;
import static org.springframework.http.MediaType.APPLICATION_JSON_VALUE;

@CrossOrigin
@RestController
@RequestMapping("/commerce")
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping("/user")
    public @ResponseBody User getUserById(@RequestParam int userId){
        return userService.getUserById(userId);
    }

    @GetMapping("/users")
    public @ResponseBody List<User> getAllUsers(){
        return userService.getAllUsers();
    }

    @PostMapping(value = "/userusername", consumes = MediaType.APPLICATION_JSON_VALUE)
    @ResponseStatus(HttpStatus.ACCEPTED)
    public @ResponseBody User getUserByUsername(@RequestBody User user){
        System.out.println(user);
        String userName = user.getUserName();
        String userPassword = user.getUserPassword();
        System.out.println(userName);
        System.out.println(userPassword);
        return userService.getByUsername(userName, userPassword);
    }

    @PostMapping(value = "/userId", consumes = MediaType.APPLICATION_JSON_VALUE)
    @ResponseStatus(HttpStatus.ACCEPTED)
    public @ResponseBody User postUserId(@RequestBody User user){
        int userId = user.getUserId();
        return userService.getUserById(userId);
    }

    @PostMapping("/user")
    @ResponseStatus(HttpStatus.ACCEPTED)
    public @ResponseBody ClientMessage createUser(@RequestBody User user){
        return userService.createUser(user) ? CREATION_SUCCESSFUL:CREATION_FAILED;
    }

    @PutMapping(value="/userupdate", consumes = MediaType.APPLICATION_JSON_VALUE)
    public @ResponseBody ClientMessage updateUser(@RequestBody User user){
        System.out.println(user);
        System.out.println("id: " + user.getUserId());
        System.out.println("balance: " + user.getBalance());
        System.out.println("email: " +  user.getUserEmail());
        System.out.println("username: " + user.getUserName() );
        System.out.println("password: " + user.getUserPassword());
        System.out.println("last: " + user.getUserLastName() );
        System.out.println("first: " + user.getUserFirstName());
        return userService.updateUser(user) > 0 ? UPDATE_SUCCESSFUL:UPDATE_FAILED;
    }

    @DeleteMapping("/user")
    public @ResponseBody ClientMessage deleteUser(@RequestBody User user){
        return userService.deleteUser(user) ? DELETION_SUCCESSFUL:DELETION_FAILED;
    }
}
