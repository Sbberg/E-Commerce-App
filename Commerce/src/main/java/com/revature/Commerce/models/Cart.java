package com.revature.Commerce.models;

import javax.persistence.*;
import java.util.Objects;
import java.util.Set;

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

    @ManyToOne
    @JoinColumn(name = "user_id", referencedColumnName = "u_id")
    //I didn't see an issue with having a "user_id" column in the carts table AND another "user_id" column in the
    //order table
    private User cartUser;

    @OneToMany(fetch = FetchType.LAZY)
    @JoinColumn(name = "cart_Products", referencedColumnName = "p_name")
//    Set doesn't allow for repeats
//    EX: if 2 bottles of shampoo are in the cart, the shampoo product name would show up only once-
//      A List would show the shampoo name twice
    private Set<Product> cartProducts;

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

    public Cart(double cartTotalPrice, int totalQuantityOfProductsInCart, User cartUser, Set<Product> cartProducts) {
        super();
        this.cartTotalPrice = cartTotalPrice;
        this.totalQuantityOfProductsInCart = totalQuantityOfProductsInCart;
        this.cartUser = cartUser;
        this.cartProducts = cartProducts;
    }

    public Cart(int cartId, double cartTotalPrice, int totalQuantityOfProductsInCart, User cartUser, Set<Product> cartProducts) {
        this.cartId = cartId;
        this.cartTotalPrice = cartTotalPrice;
        this.totalQuantityOfProductsInCart = totalQuantityOfProductsInCart;
        this.cartUser = cartUser;
        this.cartProducts = cartProducts;
    }

    public Cart(double cartTotalPrice, int totalQuantityOfProductsInCart, Set<Product> cartProducts, int cartId) {
        super();
        this.cartTotalPrice = cartTotalPrice;
        this.totalQuantityOfProductsInCart = totalQuantityOfProductsInCart;
        this.cartProducts = cartProducts;
        this.cartId = cartId;
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

    public Set<Product> getCartProducts() {
        return cartProducts;
    }

    public void setCartProducts(Set<Product> cartProducts) {
        this.cartProducts = cartProducts;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Cart cart = (Cart) o;
        return cartId == cart.cartId && Double.compare(cart.cartTotalPrice, cartTotalPrice) == 0 && totalQuantityOfProductsInCart == cart.totalQuantityOfProductsInCart && Objects.equals(cartUser, cart.cartUser) && Objects.equals(cartProducts, cart.cartProducts);
    }

    @Override
    public int hashCode() {
        return Objects.hash(cartId, cartTotalPrice, totalQuantityOfProductsInCart, cartUser, cartProducts);
    }

    @Override
    public String toString() {
        return "Cart{" +
                "cartId=" + cartId +
                ", cartTotalPrice=" + cartTotalPrice +
                ", totalQuantityOfProductsInCart=" + totalQuantityOfProductsInCart +
                ", cartUser=" + cartUser +
                ", cartProducts=" + cartProducts +
                '}';
    }
}
