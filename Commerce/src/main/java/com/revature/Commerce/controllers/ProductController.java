package com.revature.Commerce.controllers;

import static com.revature.Commerce.utils.ClientMessageUtils.*;
import com.revature.Commerce.models.ClientMessage;
import com.revature.Commerce.models.Product;
import com.revature.Commerce.services.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = {"http://127.0.0.1:5500"})
@RestController
@RequestMapping("/commerce")
public class ProductController {

    @Autowired
    private ProductService productService;

    //WORKS WITH POSTMAN!
    @GetMapping(value = "/product")// consumes = {MediaType.APPLICATION_JSON_VALUE})
    public @ResponseBody Product getById(@RequestParam int id){
        return productService.getProductById(id);
    }
    //WORKS WITH POSTMAN!

    //WORKS WITH POSTMAN!
    @GetMapping("/products")
    public @ResponseBody List<Product> getAll(){
        return productService.getAllProducts();
    }
    //WORKS WITH POSTMAN!

    //WORKS WITH POSTMAN!
    @PostMapping("/product")
    @ResponseStatus(HttpStatus.ACCEPTED)
    public @ResponseBody ClientMessage createProduct(@RequestBody Product product){
        return productService.createProduct(product) ? CREATION_SUCCESSFUL:CREATION_FAILED;
    }
    //WORKS WITH POSTMAN!

    //WORKS WITH POSTMAN!
    @PutMapping("/product")
    public @ResponseBody ClientMessage updateProduct(@RequestBody Product product){
        return productService.updateProduct(product) > 0 ? UPDATE_SUCCESSFUL:UPDATE_FAILED;
    }
    //WORKS WITH POSTMAN!

    //WORKS WITH POSTMAN!
    @DeleteMapping("/product")
    public @ResponseBody ClientMessage deleteProduct(@RequestBody Product product){
        return productService.deleteProduct(product) ? DELETION_SUCCESSFUL:DELETION_FAILED;
    }
    //WORKS WITH POSTMAN!
}
