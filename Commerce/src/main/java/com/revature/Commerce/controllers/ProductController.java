package com.revature.Commerce.controllers;

import static com.revature.Commerce.utils.ClientMessageUtils.*;
import com.revature.Commerce.models.ClientMessage;
import com.revature.Commerce.models.Product;
import com.revature.Commerce.services.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/commerce")
public class ProductController {

    @Autowired
    private ProductService productService;

    @GetMapping("/product")
    public @ResponseBody Product getById(@RequestParam int id){
        return productService.getProductById(id);
    }

    @GetMapping("/products")
    public @ResponseBody List<Product> getAll(){
        return productService.getAllProducts();
    }

    @PostMapping("/product")
    @ResponseStatus(HttpStatus.ACCEPTED)
    public @ResponseBody ClientMessage createProduct(@RequestBody Product product){
        return productService.createProduct(product) ? CREATION_SUCCESSFUL:CREATION_FAILED;
    }

    @PutMapping(value = "/productinventory")
    public @ResponseBody ClientMessage updateProduct(@RequestBody Product product){
        System.out.println(product.getInventory());
        System.out.println(product.getProductId());
        return productService.updateProductInventory(product) > 0 ? UPDATE_SUCCESSFUL:UPDATE_FAILED;
    }

    @PutMapping(value = "/product")
    public @ResponseBody ClientMessage updateWholeProduct(@RequestBody Product product){
        return productService.updateWholeProduct(product) > 0 ? UPDATE_SUCCESSFUL:UPDATE_FAILED;
    }

    @DeleteMapping("/product")
    public @ResponseBody ClientMessage deleteProduct(@RequestBody Product product){
        return productService.deleteProduct(product) ? DELETION_SUCCESSFUL:DELETION_FAILED;
    }
}
