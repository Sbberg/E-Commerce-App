package com.revature.Commerce.repos;

import com.revature.Commerce.models.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Repository
@Transactional
public interface ProductRepo extends JpaRepository<Product,Integer> {

    @Modifying
    @Query(value = "UPDATE products SET p_inventory=?1 WHERE p_id=?2", nativeQuery = true)
    int updateInventory(int inventory, int productId);

    @Modifying
    @Query(value = "UPDATE products SET p_name=?1, p_price=?2, p_category=?3, p_inventory=?4 WHERE p_id=?5", nativeQuery = true)
    int updateWholeProduct(String productName, double price, String productCategory, int inventory, int productId);

    @Query(value = "SELECT * FROM products WHERE p_id=?1", nativeQuery = true)
    Product findById(int productId);


}

//    @Query(value = "UPDATE products SET p_name=?1, p_price=?2, p_category=?3, p_inventory=?4 WHERE p_id=?5", nativeQuery = true)
//    int update(String productName, double price, String productCategory, int inventory, int productId);