package com.revature.Commerce.repos;

import com.revature.Commerce.models.Cart;
import com.revature.Commerce.models.Product;
import com.revature.Commerce.models.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

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
public interface CartRepo extends JpaRepository<Cart,Integer> {

    @Modifying
    @Query(value = "UPDATE carts SET c_totalPrice=?1, c_totalQuantity=?2, cart_Products=?3 WHERE c_id=?4", nativeQuery = true)
    int updateCartByCartId(double cartTotalPrice, int totalQuantityOfProductsInCart, Set<Product> cartProducts, int cartId);

    @Modifying
    @Query(value = "UPDATE carts SET c_totalPrice=?1, c_totalQuantity=?2, cart_Products=?3 WHERE user_id=?4", nativeQuery = true)
    int updateCartByUserId(double cartTotalPrice, int totalQuantityOfProductsInCart, Set<Product> cartProducts, int userId);

    @Query(value = "SELECT * FROM carts WHERE c_id=?1", nativeQuery = true)
    Cart findByCartId(int cartId);

    @Query(value = "SELECT * FROM carts WHERE user_id=?1", nativeQuery = true)
    Cart findByUserId(int userId);


}
/*
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "c_id")
    private int cartId;

    @Column(name="c_totalPrice",nullable = false)
    private double cartTotalPrice;

    @Column(name = "c_totalQuantity",nullable = false)
    private int totalQuantityOfProductsInCart;

    @ManyToOne
    @JoinColumn(name = "user_id", referencedColumnName = "u_id")
    //I didn't see an issue with having a "user_id" column in the carts table AND another "user_id" column in the
    //order table
    private User cartUser;

    @OneToMany(fetch = FetchType.LAZY)
    @JoinColumn(name = "cart_Products", referencedColumnName = "p_name")
//    Set doesn't allow for repeats
//    EX: if 2 bottles of shampoo are in the cart, the shampoo product name would show up only once-
//      A List would show the shampoo name twice
    private Set<Product> cartProducts;

 */