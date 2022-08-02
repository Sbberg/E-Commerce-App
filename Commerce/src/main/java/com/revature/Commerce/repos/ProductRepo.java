package com.revature.Commerce.repos;

import com.revature.Commerce.models.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

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
public interface ProductRepo extends JpaRepository<Product,Integer> {

    @Modifying
    @Query(value = "UPDATE products SET p_name=?1, p_price=?2, p_category=?3, p_inventory=?4 WHERE p_id=?5", nativeQuery = true)
    public int update(String productName, double price, String productCategory, int inventory, int productId);

    @Query(value = "SELECT * FROM products WHERE p_id=?1", nativeQuery = true)
    public Product findById(int productId);
}

/*
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "p_id")
    private int productId;

    @Column(name = "p_name", nullable = false, unique = true)
    private String productName;

    @Column(name="p_price",nullable = false)
    private double price;

    @Column(name = "p_category",nullable = false)
    private String productCategory;

    @Column(name="p_inventory",nullable = false)
    private int inventory;

 */