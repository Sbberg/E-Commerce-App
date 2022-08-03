package com.revature.Commerce.services;

import com.revature.Commerce.models.Cart;
import com.revature.Commerce.repos.CartRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class CartServiceImpl implements CartService{

    @Autowired
    private CartRepo cartRepo;

    @Autowired
    public CartServiceImpl(CartRepo cartRepo){
        this.cartRepo=cartRepo;
    }


    @Override
    public boolean createCart(Cart cart) {
        int pk = cartRepo.save(cart).getCartId();
        return (pk > 0) ? true:false;
    }

    @Override
    public Cart getCartByCartId(int cartId) {
        return cartRepo.findByCartId(cartId);
    }

    @Override
    public Cart getCartByUserId(int userId) {
        return cartRepo.findByUserId(userId);
    }

    @Override
    public List<Cart> getAllCarts() {
        return cartRepo.findAll();
    }

    @Override
    public int updateCartByCartId(Cart cart) {
        return cartRepo.updateCartByCartId(cart.getCartTotalPrice(), cart.getTotalQuantityOfProductsInCart(), cart.getCartProducts(), cart.getCartId());
    }

    @Override
    public int updateCartByUserId(Cart cart) {
        return cartRepo.updateCartByUserId(cart.getCartTotalPrice(), cart.getTotalQuantityOfProductsInCart(), cart.getCartProducts(), cart.getCartUser().getUserId());
    }

    @Override
    public boolean deleteCart(Cart cart) {
        cartRepo.delete(cart);
        return true;
    }
}
