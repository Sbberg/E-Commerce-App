package com.revature.Commerce.repos;

import com.revature.Commerce.models.Cart;
import com.revature.Commerce.models.Product;
import org.springframework.data.jpa.repository.JpaRepository;
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


//    @Query(value = "UPDATE carts SET c_totalPrice=?1, c_totalQuantity=?2, user_id=?3, cart_Products=?4, WHERE c_id=?5", nativeQuery = true)
//    public boolean update(int cartTotalPrice, int totalQuantityOfProductsInCart, int userId, Set<Product> cartProducts, int cartId);


}
