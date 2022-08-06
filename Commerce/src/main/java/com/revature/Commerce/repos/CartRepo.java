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


@Repository
@Transactional
public interface CartRepo extends JpaRepository<Cart,Integer> {

    @Modifying
    @Query(value = "UPDATE carts SET c_total_price=?1, c_total_quantity=?2, c_address=?3 WHERE c_id=?4", nativeQuery = true)
    int updateCartByCartId(double cartTotalPrice, int totalQuantityOfProductsInCart, String cartAddress, int cartId);

    @Modifying
    @Query(value = "UPDATE carts SET c_total_price=?1, c_total_quantity=?2, c_address=?3 WHERE user_id=?4", nativeQuery = true)
    int updateCartByUserId(double cartTotalPrice, int totalQuantityOfProductsInCart, String cartAddress, int userId);

    @Query(value = "SELECT * FROM carts WHERE c_id=?1", nativeQuery = true)
    Cart findByCartId(int cartId);

    @Query(value = "SELECT * FROM carts WHERE user_id=?1", nativeQuery = true)
    Cart findByUserId(int userId);


}
