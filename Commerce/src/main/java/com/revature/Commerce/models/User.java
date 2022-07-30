package com.revature.Commerce.models;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "u_id")
    private int userId;

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

    @Column(name="u_address", nullable = false)
    private String address;

    @Column(name="u_balance",nullable = false, columnDefinition = "NUMERIC(12,2) DEFAULT 0.00")
    private double balance;

    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name = "u_cartProducts", referencedColumnName = "p_id")
    private List<Product> userCartProducts;

    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name = "u_purchasedProducts", referencedColumnName = "p_id")
    private List<Product> purchasedProducts;

    public User() {
        super();
    }

    public User(int userId) {
        super();
        this.userId = userId;
    }

    public User(String userName, String userPassword, String userEmail, String userFirstName, String userLastName, String address) {
        super();
        this.userName = userName;
        this.userPassword = userPassword;
        this.userEmail = userEmail;
        this.userFirstName = userFirstName;
        this.userLastName = userLastName;
        this.address = address;
    }

    public User(int userId, String userName, String userPassword, String userEmail, String userFirstName, String userLastName, String address, double balance, List<Product> userCartProducts, List<Product> purchasedProducts) {
        super();
        this.userId = userId;
        this.userName = userName;
        this.userPassword = userPassword;
        this.userEmail = userEmail;
        this.userFirstName = userFirstName;
        this.userLastName = userLastName;
        this.address = address;
        this.balance = balance;
        this.userCartProducts = userCartProducts;
        this.purchasedProducts = purchasedProducts;
    }

    public User(int userId, String userName, String userPassword, String userEmail, String userFirstName, String userLastName, String address) {
        super();
        this.userId = userId;
        this.userName = userName;
        this.userPassword = userPassword;
        this.userEmail = userEmail;
        this.userFirstName = userFirstName;
        this.userLastName = userLastName;
        this.address = address;
    }

    public User(int userId, String userName, String userPassword, String userEmail, String userFirstName, String userLastName, String address, double balance) {
        super();
        this.userId = userId;
        this.userName = userName;
        this.userPassword = userPassword;
        this.userEmail = userEmail;
        this.userFirstName = userFirstName;
        this.userLastName = userLastName;
        this.address = address;
        this.balance = balance;
    }



}
