package com.revature.Commerce.services;

import com.revature.Commerce.models.Order;
import com.revature.Commerce.repos.OrderRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class OrderServiceImpl implements OrderService {

    @Autowired
    private OrderRepo orderRepo;

    @Autowired
    public OrderServiceImpl(OrderRepo orderRepo){
        super();
        this.orderRepo=orderRepo;
    }


    @Override
    public boolean createOrder(Order order) {
        int pk = orderRepo.save(order).getOrderId();
        return pk > 0 ? true:false;
    }

    @Override
    public Order getOrderById(int orderId) {
        return orderRepo.findById(orderId);
    }

    @Override
    public List<Order> getAllOrders() {
        return orderRepo.findAll();
    }

    @Override
    public int updateOrderById(Order order) {
        return orderRepo.updateByOrderId(order.getOrderTotalPrice(), order.getTotalQuantityOfProductsInOrder(), order.getOrderAddress(), order.getOrderedProducts(), order.getOrderId());
    }

    @Override
    public boolean deleteOrder(Order order) {
        orderRepo.delete(order);
        return true;
    }
}
