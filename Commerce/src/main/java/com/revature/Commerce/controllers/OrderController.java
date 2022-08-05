package com.revature.Commerce.controllers;

import static com.revature.Commerce.utils.ClientMessageUtils.*;
import com.revature.Commerce.models.ClientMessage;
import com.revature.Commerce.models.Order;
import com.revature.Commerce.models.User;
import com.revature.Commerce.services.OrderService;
import com.revature.Commerce.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.MediaType;

import java.util.List;

@CrossOrigin(origins = {"http://127.0.0.1:5500"})
@RestController
@RequestMapping("/commerce")
public class OrderController {

    @Autowired
    private OrderService orderService;


    //WORKS WITH POSTMAN
    @GetMapping(value = "/order")// consumes = {MediaType.APPLICATION_JSON_VALUE})
    public @ResponseBody Order getById(@RequestParam int orderId){
        return orderService.getOrderById(orderId);
    }
    //WORKS WITH POSTMAN

    //WORKS WITH POSTMAN
    @GetMapping("/orders")
    public @ResponseBody List<Order> getAllOrders(){
        return orderService.getAllOrders();
    }
    //WORKS WITH POSTMAN

    //WORKS WITH POSTMAN
    @PostMapping("/order")
    @ResponseStatus(HttpStatus.ACCEPTED)
    public @ResponseBody ClientMessage createOrder(@RequestBody Order order){
        //userService.createUser(user);
        return orderService.createOrder(order) ? CREATION_SUCCESSFUL:CREATION_FAILED;
    }
    //WORKS WITH POSTMAN

    //WORKS WITH POSTMAN
    @PutMapping("/order")
    public @ResponseBody ClientMessage updateOrder(@RequestBody Order order){
        return orderService.updateOrderById(order) > 0 ? UPDATE_SUCCESSFUL: CREATION_FAILED;
    }
    //WORKS WITH POSTMAN


    //WORKS WITH POSTMAN
    @DeleteMapping("/order")
    public @ResponseBody ClientMessage deleteOrder(@RequestBody Order order){
        return orderService.deleteOrder(order) ? DELETION_SUCCESSFUL:DELETION_FAILED;
    }
    //WORKS WITH POSTMAN

}
