package com.revature.Commerce.services;

import com.revature.Commerce.models.Cart;

import java.util.List;

public interface CartService {

boolean createCart(Cart cart);

Cart getCartByCartId(int cartId);

Cart getCartByUserId(int userId);

List<Cart> getAllCarts();

int updateCartByCartId(Cart cart);

int updateCartByUserId(Cart cart);

boolean deleteCart(Cart cart);

}
