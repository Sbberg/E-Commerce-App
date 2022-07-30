package com.revature.Commerce.models;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "products")
public class Product {

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

    @OneToMany
    @JoinColumn(name = "p_inUserCart", referencedColumnName = "u_id")
    private List<User> productsInUserCart;

    @Column(name="p_inventory",nullable = false)
    private int inventory;


    public Product() {
        super();
    }

    public Product(int productId) {
        super();
        this.productId = productId;
    }

}
