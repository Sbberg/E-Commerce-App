package com.revature.Commerce.models;

import javax.persistence.*;
import java.util.List;
import java.util.Objects;

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

    public User() {
        super();
    }

    public User(int userId) {
        super();
        this.userId = userId;
    }

    public User(String userName, String userPassword) {
        super();
        this.userName = userName;
        this.userPassword = userPassword;
    }

    public User(String userName) {
        this.userName = userName;
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

    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getUserPassword() {
        return userPassword;
    }

    public void setUserPassword(String userPassword) {
        this.userPassword = userPassword;
    }

    public String getUserEmail() {
        return userEmail;
    }

    public void setUserEmail(String userEmail) {
        this.userEmail = userEmail;
    }

    public String getUserFirstName() {
        return userFirstName;
    }

    public void setUserFirstName(String userFirstName) {
        this.userFirstName = userFirstName;
    }

    public String getUserLastName() {
        return userLastName;
    }

    public void setUserLastName(String userLastName) {
        this.userLastName = userLastName;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public double getBalance() {
        return balance;
    }

    public void setBalance(double balance) {
        this.balance = balance;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        User user = (User) o;
        return userId == user.userId && Double.compare(user.balance, balance) == 0 && Objects.equals(userName, user.userName) && Objects.equals(userPassword, user.userPassword) && Objects.equals(userEmail, user.userEmail) && Objects.equals(userFirstName, user.userFirstName) && Objects.equals(userLastName, user.userLastName) && Objects.equals(address, user.address);
    }

    @Override
    public int hashCode() {
        return Objects.hash(userId, userName, userPassword, userEmail, userFirstName, userLastName, address, balance);
    }

    @Override
    public String toString() {
        return "User{" +
                "userId=" + userId +
                ", userName='" + userName + '\'' +
                ", userPassword='" + userPassword + '\'' +
                ", userEmail='" + userEmail + '\'' +
                ", userFirstName='" + userFirstName + '\'' +
                ", userLastName='" + userLastName + '\'' +
                ", address='" + address + '\'' +
                ", balance=" + balance +
                '}';
    }
}
