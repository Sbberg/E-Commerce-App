package com.revature.Commerce.models;

import javax.persistence.*;
import java.util.Objects;

@Entity
@Table(name = "products")
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "p_id")
    private int productId;

    @Column(name = "p_name", nullable = false)
    private String productName;

    @Column(name="p_price",nullable = false)
    private double price;

    @Column(name = "p_category",nullable = false)
    private String productCategory;


    @Column(name="p_inventory",nullable = false)
    private int inventory;


    public Product() {
        super();
    }

    public Product(int productId) {
        super();
        this.productId = productId;
    }

    public Product(int productId, int inventory) {
        super();
        this.productId = productId;
        this.inventory = inventory;
    }

    public Product(String productName) {
        this.productName = productName;
    }

    public Product(String productName, double price, String productCategory, int inventory) {
        super();
        this.productName = productName;
        this.price = price;
        this.productCategory = productCategory;
        this.inventory = inventory;
    }

    public Product(int productId, String productName, double price, String productCategory, int inventory) {
        super();
        this.productId = productId;
        this.productName = productName;
        this.price = price;
        this.productCategory = productCategory;
        this.inventory = inventory;
    }

    public int getProductId() {
        return productId;
    }

    public void setProductId(int productId) {
        this.productId = productId;
    }

    public String getProductName() {
        return productName;
    }

    public void setProductName(String productName) {
        this.productName = productName;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public String getProductCategory() {
        return productCategory;
    }

    public void setProductCategory(String productCategory) {
        this.productCategory = productCategory;
    }

    public int getInventory() {
        return inventory;
    }

    public void setInventory(int inventory) {
        this.inventory = inventory;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Product product = (Product) o;
        return productId == product.productId && Double.compare(product.price, price) == 0 && inventory == product.inventory && Objects.equals(productName, product.productName) && Objects.equals(productCategory, product.productCategory);
    }

    @Override
    public int hashCode() {
        return Objects.hash(productId, productName, price, productCategory, inventory);
    }

    @Override
    public String toString() {
        return "Product{" +
                "productId=" + productId +
                ", productName='" + productName + '\'' +
                ", price=" + price +
                ", productCategory='" + productCategory + '\'' +
                ", inventory=" + inventory +
                '}';
    }
}
