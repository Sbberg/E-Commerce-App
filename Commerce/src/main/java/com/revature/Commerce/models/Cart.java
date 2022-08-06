package com.revature.Commerce.models;

import javax.persistence.*;
import java.util.Objects;


@Entity
@Table(name = "carts")
public class Cart {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "c_id")
    private int cartId;

    @Column(name="c_totalPrice",nullable = false)
    private double cartTotalPrice;

    @Column(name = "c_totalQuantity",nullable = false)
    private int totalQuantityOfProductsInCart;

    @Column(name="c_address", nullable = false)
    private String cartAddress;

    @ManyToOne
    @JoinColumn(name = "user_id", referencedColumnName = "u_id")
    private User cartUser;

    public Cart() {
        super();
    }

    public Cart(int cartId) {
        super();
        this.cartId = cartId;
    }

    public Cart(User cartUser) {
        super();
        this.cartUser = cartUser;
    }

    public Cart(double cartTotalPrice, int totalQuantityOfProductsInCart, User cartUser) {
        super();
        this.cartTotalPrice = cartTotalPrice;
        this.totalQuantityOfProductsInCart = totalQuantityOfProductsInCart;
        this.cartUser = cartUser;
    }

    public Cart(int cartId, double cartTotalPrice, int totalQuantityOfProductsInCart, User cartUser) {
        this.cartId = cartId;
        this.cartTotalPrice = cartTotalPrice;
        this.totalQuantityOfProductsInCart = totalQuantityOfProductsInCart;
        this.cartUser = cartUser;
    }

    public Cart(double cartTotalPrice, int totalQuantityOfProductsInCart, int cartId) {
        super();
        this.cartTotalPrice = cartTotalPrice;
        this.totalQuantityOfProductsInCart = totalQuantityOfProductsInCart;
        this.cartId = cartId;
    }

    public Cart(int cartId, double cartTotalPrice, int totalQuantityOfProductsInCart, String cartAddress, User cartUser) {
        this.cartId = cartId;
        this.cartTotalPrice = cartTotalPrice;
        this.totalQuantityOfProductsInCart = totalQuantityOfProductsInCart;
        this.cartAddress = cartAddress;
        this.cartUser = cartUser;
    }

    public Cart(double cartTotalPrice, int totalQuantityOfProductsInCart, String cartAddress, User cartUser) {
        this.cartTotalPrice = cartTotalPrice;
        this.totalQuantityOfProductsInCart = totalQuantityOfProductsInCart;
        this.cartAddress = cartAddress;
        this.cartUser = cartUser;
    }

    public int getCartId() {
        return cartId;
    }

    public void setCartId(int cartId) {
        this.cartId = cartId;
    }

    public double getCartTotalPrice() {
        return cartTotalPrice;
    }

    public void setCartTotalPrice(double cartTotalPrice) {
        this.cartTotalPrice = cartTotalPrice;
    }

    public int getTotalQuantityOfProductsInCart() {
        return totalQuantityOfProductsInCart;
    }

    public void setTotalQuantityOfProductsInCart(int totalQuantityOfProductsInCart) {
        this.totalQuantityOfProductsInCart = totalQuantityOfProductsInCart;
    }

    public User getCartUser() {
        return cartUser;
    }

    public void setCartUser(User cartUser) {
        this.cartUser = cartUser;
    }

    public String getCartAddress() {
        return cartAddress;
    }

    public void setCartAddress(String cartAddress) {
        this.cartAddress = cartAddress;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Cart cart = (Cart) o;
        return cartId == cart.cartId && Double.compare(cart.cartTotalPrice, cartTotalPrice) == 0 && totalQuantityOfProductsInCart == cart.totalQuantityOfProductsInCart && Objects.equals(cartAddress, cart.cartAddress) && Objects.equals(cartUser, cart.cartUser);
    }

    @Override
    public int hashCode() {
        return Objects.hash(cartId, cartTotalPrice, totalQuantityOfProductsInCart, cartAddress, cartUser);
    }

    @Override
    public String toString() {
        return "Cart{" +
                "cartId=" + cartId +
                ", cartTotalPrice=" + cartTotalPrice +
                ", totalQuantityOfProductsInCart=" + totalQuantityOfProductsInCart +
                ", cartAddress='" + cartAddress + '\'' +
                ", cartUser=" + cartUser +
                '}';
    }
}
