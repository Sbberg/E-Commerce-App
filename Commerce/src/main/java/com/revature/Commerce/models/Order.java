package com.revature.Commerce.models;

import com.fasterxml.jackson.annotation.JsonFormat;
import org.hibernate.Criteria;
import org.springframework.beans.factory.annotation.Autowired;
import com.revature.Commerce.models.Product;
import javax.persistence.*;
import java.io.Serializable;
import java.util.*;

import static org.springframework.data.repository.init.ResourceReader.Type.JSON;

@Entity
@Table(name = "orders")
public class Order {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "o_id")
    private int orderId;

    @Column(name="o_totalPrice",nullable = false)
    private double orderTotalPrice;

    //Total Amount of products in order
    @Column(name = "o_totalQuantity",nullable = false)
    private int totalQuantityOfProductsInOrder;


    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "user_id", referencedColumnName = "u_id")
    private User orderUser;

    @Column(name = "o_address")
    private String orderAddress;

    @Column(name = "created_Date")
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd")
    private Date orderCreatedDate;


    @OneToMany(fetch = FetchType.LAZY)
    //@JoinColumn(name = "order_Products", referencedColumnName = "p_id")
    private List<Product> orderedProducts;



//    @OneToMany
//    @JoinColumn(name="o_amountOfEachProductInOrder",referencedColumnName = "p_id")
//    Gives an array with each element showing how many of each item are in the order
//    private Array[] amountOfEachProductInOrder;


    public Order() {
        super();
    }

    public Order(int orderId) {
        super();
        this.orderId = orderId;
    }

    public Order(double orderTotalPrice) {
        super();
        this.orderTotalPrice = orderTotalPrice;
    }

    public Order(double orderTotalPrice, int totalQuantityOfProductsInOrder, Date orderCreatedDate) {
        super();
        this.orderTotalPrice = orderTotalPrice;
        this.totalQuantityOfProductsInOrder = totalQuantityOfProductsInOrder;
        this.orderCreatedDate = orderCreatedDate;
    }

    public Order(double orderTotalPrice, int totalQuantityOfProductsInOrder, User orderUser, String orderAddress) {
        super();
        this.orderTotalPrice = orderTotalPrice;
        this.totalQuantityOfProductsInOrder = totalQuantityOfProductsInOrder;
        this.orderUser = orderUser;
        this.orderAddress = orderAddress;
    }

    public Order(double orderTotalPrice, int totalQuantityOfProductsInOrder, String orderAddress, Date orderCreatedDate) {
        super();
        this.orderTotalPrice = orderTotalPrice;
        this.totalQuantityOfProductsInOrder = totalQuantityOfProductsInOrder;
        this.orderAddress = orderAddress;
        this.orderCreatedDate = orderCreatedDate;
    }

    public Order(double orderTotalPrice, int totalQuantityOfProductsInOrder, String orderAddress) {
        super();
        this.orderTotalPrice = orderTotalPrice;
        this.totalQuantityOfProductsInOrder = totalQuantityOfProductsInOrder;
        this.orderAddress = orderAddress;
    }

    public Order(double orderTotalPrice, int totalQuantityOfProductsInOrder, User orderUser, String orderAddress, Date orderCreatedDate, List<Product> orderedProducts) {
        super();
        this.orderTotalPrice = orderTotalPrice;
        this.totalQuantityOfProductsInOrder = totalQuantityOfProductsInOrder;
        this.orderUser = orderUser;
        this.orderAddress = orderAddress;
        this.orderCreatedDate = orderCreatedDate;
        this.orderedProducts = orderedProducts;
    }

    public Order(int orderId, double orderTotalPrice, int totalQuantityOfProductsInOrder, User orderUser, String orderAddress, Date orderCreatedDate, List<Product> orderedProducts) {
        super();
        this.orderId = orderId;
        this.orderTotalPrice = orderTotalPrice;
        this.totalQuantityOfProductsInOrder = totalQuantityOfProductsInOrder;
        this.orderUser = orderUser;
        this.orderAddress = orderAddress;
        this.orderCreatedDate = orderCreatedDate;
        this.orderedProducts = orderedProducts;
    }

    public Order(double orderTotalPrice, int totalQuantityOfProductsInOrder, String orderAddress, List<Product> orderedProducts, int orderId){
        super();
        this.orderTotalPrice = orderTotalPrice;
        this.totalQuantityOfProductsInOrder = totalQuantityOfProductsInOrder;
        this.orderAddress = orderAddress;
        this.orderedProducts = orderedProducts;
        this.orderId = orderId;
    }

    public int getOrderId() {
        return orderId;
    }

    public void setOrderId(int orderId) {
        this.orderId = orderId;
    }

    public double getOrderTotalPrice() {
        return orderTotalPrice;
    }

    public void setOrderTotalPrice(double orderTotalPrice) {
        this.orderTotalPrice = orderTotalPrice;
    }

    public int getTotalQuantityOfProductsInOrder() {
        return totalQuantityOfProductsInOrder;
    }

    public void setTotalQuantityOfProductsInOrder(int totalQuantityOfProductsInOrder) {
        this.totalQuantityOfProductsInOrder = totalQuantityOfProductsInOrder;
    }

    public User getOrderUser() {
        return orderUser;
    }

    public void setOrderUser(User orderUser) {
        this.orderUser = orderUser;
    }

    public String getOrderAddress() {
        return orderAddress;
    }

    public void setOrderAddress(String orderAddress) {
        this.orderAddress = orderAddress;
    }

    public Date getOrderCreatedDate() {
        return orderCreatedDate;
    }

    public void setOrderCreatedDate(Date orderCreatedDate) {
        this.orderCreatedDate = orderCreatedDate;
    }

    public List<Product> getOrderedProducts() {
        return (List<Product>) orderedProducts;
    }

    public void setOrderedProducts(List<Product> orderedProducts) {
        this.orderedProducts = orderedProducts;
    }



    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Order order = (Order) o;
        return orderId == order.orderId && Double.compare(order.orderTotalPrice, orderTotalPrice) == 0 && totalQuantityOfProductsInOrder == order.totalQuantityOfProductsInOrder && Objects.equals(orderUser, order.orderUser) && Objects.equals(orderAddress, order.orderAddress) && Objects.equals(orderCreatedDate, order.orderCreatedDate) && Objects.equals(orderedProducts, order.orderedProducts);
    }

    @Override
    public int hashCode() {
        return Objects.hash(orderId, orderTotalPrice, totalQuantityOfProductsInOrder, orderUser, orderAddress, orderCreatedDate, orderedProducts);
    }

    @Override
    public String toString() {
        return "Order{" +
                "orderId=" + orderId +
                ", totalPrice=" + orderTotalPrice +
                ", totalQuantityOfProductsInOrder=" + totalQuantityOfProductsInOrder +
                ", user=" + orderUser +
                ", orderAddress='" + orderAddress + '\'' +
                ", createdDate=" + orderCreatedDate +
                ", orderedProducts=" + orderedProducts +
                '}';
    }
}
