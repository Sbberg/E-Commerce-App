package com.revature.Commerce.services;

import com.revature.Commerce.models.Product;

import java.util.List;

public interface ProductService {

    boolean createProduct(Product product);

    Product getProductById(int id);

    List<Product> getAllProducts();

    boolean updateProduct(Product product);

    boolean deleteProduct(Product product);

}
