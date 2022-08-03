package com.revature.Commerce.controllers;

import static com.revature.Commerce.utils.ClientMessageUtils.*;
import com.revature.Commerce.models.ClientMessage;
import com.revature.Commerce.models.Order;
import com.revature.Commerce.services.OrderService;
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

    @GetMapping(value = "/order", consumes = {MediaType.APPLICATION_JSON_VALUE})
    public @ResponseBody Order getById(@RequestParam int orderId){
        return orderService.getOrderById(orderId);
    }

    @GetMapping("/orders")
    public @ResponseBody List<Order> getAll(){
        return orderService.getAllOrders();
    }

    @PostMapping("/order")
    @ResponseStatus(HttpStatus.ACCEPTED)
    public @ResponseBody ClientMessage createOrder(@RequestBody Order order){
        return orderService.createOrder(order) ? CREATION_SUCCESSFUL:CREATION_FAILED;
    }

    @PutMapping("/order")
    public @ResponseBody ClientMessage updateOrder(@RequestBody Order order){
        return orderService.updateOrderById(order) > 0 ? UPDATE_SUCCESSFUL: CREATION_FAILED;
    }

    @DeleteMapping("/order")
    public @ResponseBody ClientMessage deleteCandy(@RequestBody Order order){
        return orderService.deleteOrder(order) ? DELETION_SUCCESSFUL:DELETION_FAILED;
    }
}
