package com.revature.Commerce.repos;

import com.revature.Commerce.models.Order;
import com.revature.Commerce.models.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;

/*
    Extending the JpaRepository should implement the following CRUD operations for us:
    save()
    saveAll()
    findById()
    existsById()
    findAll()
    findAllById()
    count()
    deleteById()
    delete()
    deleteAll()

    DOES NOT HAVE UPDATE methods

 */

@Repository
@Transactional
public interface OrderRepo extends JpaRepository<Order,Integer> {

    @Modifying
    @Query(value = "UPDATE orders SET o_total_price=?1, o_total_quantity=?2, o_address=?3, order_products=?4 WHERE o_id=?5", nativeQuery = true)
    int updateByOrderId(double orderTotalPrice, int totalQuantityOfProductsInOrder, String orderAddress, Product orderedProducts, int orderId);

    @Query(value = "SELECT * FROM orders WHERE o_id=?1", nativeQuery = true)
    Order findById(int orderId);
}

/*
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "o_id")
    private int orderId;

    @Column(name="o_totalPrice",nullable = false)
    private double orderTotalPrice;

    //Total Amount of products in order
    @Column(name = "o_totalQuantity",nullable = false)
    private int totalQuantityOfProductsInOrder;


    @ManyToOne
    @JoinColumn(name = "user_id", referencedColumnName = "u_id")
    //I didn't see an issue with having a "user_id" column in the carts table AND another "user_id" column in the
    //orders table
    private User orderUser;

    @OneToOne(fetch = FetchType.LAZY)
    //One order goes to one address
    @JoinColumn(name="o_address", referencedColumnName = "u_address")
    private String orderAddress;

    @Column(name = "created_Date")
    private Date orderCreatedDate;

    @OneToMany(fetch = FetchType.LAZY)
    @JoinColumn(name = "ordered_Products", referencedColumnName = "p_name")
//    Set doesn't allow for repeats
//    EX: if 2 bottles of shampoo are bought, the shampoo product name would show up only once-
//      A List would show the shampoo name twice
    private Set<Product> orderedProducts;
 */
