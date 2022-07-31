package com.revature.Commerce.repos;

import com.revature.Commerce.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

/*
    Extending the JpaRepository should implement the following CRUD operations for us:
    save()
    saveAll()
    findById()
    existsById()
    findAll()
    findAllById()
    count()
    deleteById()
    delete()
    deleteAll()

    DOES NOT HAVE UPDATE methods

 */

@Repository
@Transactional
public interface UserRepo extends JpaRepository<User,Integer> {

    @Query(value = "UPDATE users SET username=?1, u_password=?2, u_email=?3, u_firstName=?4, u_lastName=?5, u_address=?6, u_balance=?7 WHERE u_id=?8", nativeQuery = true)
    public int update(String userName, String userPassword, String userEmail, String userFirstName, String userLastName, String address, double balance, int userId);

    @Query(value = "SELECT * FROM users WHERE u_id=?1", nativeQuery = true)
    public User findById(int userId);
}

/*
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

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "u_id")
    private int userId;

 */