package com.revature.Commerce.models;

import lombok.Data;
import com.revature.Commerce.models.*;
import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "users")
@Data
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "u_id")
    private int id;

    @Column(name = "username", nullable = false, unique = true)
    private String userName;

    @Column(name = "u_password", nullable = false)
    private String userPassword;

    @Column(name = "u_email",nullable = false,unique = true)
    private String userEmail;

    @Column(name = "u_firstName",nullable = false)
    private String userFirstName;

    @Column(name = "u_lastName",nullable = false)
    private String userLastName;

    @Column(name="u_balance",nullable = false, columnDefinition = "NUMERIC(12,2) DEFAULT 0.00")
    private double balance;

    @OneToMany
    @JoinColumn(name = "u_cartProducts", referencedColumnName = "p_id")
    private List<Product> cartProducts;

    @OneToMany
    @JoinColumn(name = "u_purchasedProducts", referencedColumnName = "p_id")
    private List<Product> purchasedProducts;

    public Customer() {
        super();
    }

    public Customer(String customerUsername, String customerPassword, String customerEmail, String customerFirstName, String customerLastName) {
        super();
        this.customerUsername = customerUsername;
        this.customerPassword = customerPassword;
        this.customerEmail = customerEmail;
        this.customerFirstName = customerFirstName;
        this.customerLastName = customerLastName;
    }

    public Customer(String customerUsername, String customerPassword) {
        super();
        this.customerUsername = customerUsername;
        this.customerPassword = customerPassword;
    }

    public Customer(int id, String customerUsername, String customerPassword, String customerEmail, String customerFirstName, String customerLastName, double balance, List<Product> cartProducts, List<Product> purchasedProducts) {
        super();
        this.id = id;
        this.customerUsername = customerUsername;
        this.customerPassword = customerPassword;
        this.customerEmail = customerEmail;
        this.customerFirstName = customerFirstName;
        this.customerLastName = customerLastName;
        this.balance = balance;
        this.cartProducts = cartProducts;
        this.purchasedProducts = purchasedProducts;
    }
}
