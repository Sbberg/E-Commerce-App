package com.revature.Commerce.controllers;

import com.revature.Commerce.models.Cart;
import com.revature.Commerce.models.ClientMessage;
import com.revature.Commerce.services.CartService;
import org.springframework.http.HttpStatus;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import static com.revature.Commerce.utils.ClientMessageUtils.*;
@CrossOrigin
@RestController
@RequestMapping("/commerce")
public class CartController {

    @Autowired
    private CartService cartService;


    @GetMapping(value = "/cartByCartId") 
    public @ResponseBody Cart getByCartId(@RequestParam int cartId){
        return cartService.getCartByCartId(cartId);
    }

    @GetMapping(value = "/cartByUserId") 
    public @ResponseBody Cart getByUserId(@RequestParam int userId){
        return cartService.getCartByUserId(userId);
    }

    @GetMapping(value = "/carts") 
    public @ResponseBody List<Cart> getAll(){
        System.out.println("Getting all Carts");
        return cartService.getAllCarts();
    }

    @PostMapping(value = "/cart", consumes = MediaType.APPLICATION_JSON_VALUE)
    @ResponseStatus(HttpStatus.ACCEPTED)
    public @ResponseBody ClientMessage createCart(@RequestBody Cart cart){
        System.out.println(cart);
        System.out.println(cart.getCartId());
        System.out.println(cart.getCartAddress());
        System.out.println(cart.getCartTotalPrice());
        System.out.println(cart.getTotalQuantityOfProductsInCart());
        System.out.println(cart.getCartUser());
        return cartService.createCart(cart) ? CREATION_SUCCESSFUL:CREATION_FAILED;
    }


    @PutMapping(value = "/cartByCartId")
    public @ResponseBody ClientMessage updateCartByCartId(@RequestBody Cart cart){
        return cartService.updateCartByCartId(cart) > 0 ? UPDATE_SUCCESSFUL:UPDATE_FAILED;
    }

    @PutMapping(value = "/cartByUserId")
    public @ResponseBody ClientMessage updateCartByUserId(@RequestBody Cart cart){
        return cartService.updateCartByUserId(cart) > 0 ? UPDATE_SUCCESSFUL:UPDATE_FAILED;
    }

    @DeleteMapping("/cart")
    public @ResponseBody ClientMessage deleteCart(@RequestBody Cart cart){
        return cartService.deleteCart(cart) ? DELETION_SUCCESSFUL:DELETION_FAILED;
    }
}
