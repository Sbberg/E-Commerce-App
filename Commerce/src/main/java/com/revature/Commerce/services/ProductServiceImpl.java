package com.revature.Commerce.services;

import com.revature.Commerce.models.Product;
import com.revature.Commerce.repos.ProductRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class ProductServiceImpl implements ProductService {

    @Autowired
    private ProductRepo productRepo;

    @Autowired
    public ProductServiceImpl(ProductRepo productRepo){
        this.productRepo=productRepo;
    }

    @Override
    public boolean createProduct(Product product) {
        int pk = productRepo.save(product).getProductId();
        return (pk > 0) ? true:false;
    }

    @Override
    public Product getProductById(int id) {
        return productRepo.findById(id);
    }

    @Override
    public List<Product> getAllProducts() {
        return productRepo.findAll();
    }

    @Override
    public int updateProductInventory(Product product) {
        return productRepo.updateInventory(product.getInventory(), product.getProductId());
    }

    @Override
    public int updateWholeProduct(Product product){
        return productRepo.updateWholeProduct(product.getProductName(), product.getPrice(), product.getProductCategory(), product.getInventory(), product.getProductId());
    }


    @Override
    public boolean deleteProduct(Product product) {
        productRepo.delete(product);
        return true;
    }
}
