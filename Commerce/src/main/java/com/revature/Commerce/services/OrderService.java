package com.revature.Commerce.services;

import com.revature.Commerce.models.Order;
import org.aspectj.weaver.ast.Or;

import java.util.List;

public interface OrderService {

    boolean createOrder(Order order);

    Order getOrderById(int orderId);

    List<Order> getAllOrders();

    int updateOrderById(Order order);

    boolean deleteOrder(Order order);
}
