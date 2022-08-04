package com.revature.Commerce.repos;

import com.revature.Commerce.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.io.Serializable;

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

    @Modifying
    @Query(value = "UPDATE users SET username=?1, u_password=?2, u_email=?3, u_first_name=?4, u_last_name=?5, u_address=?6, u_balance=?7 WHERE u_id=?8", nativeQuery = true)
    int update(String userName, String userPassword, String userEmail, String userFirstName, String userLastName, String address, double balance, int userId);

    @Query(value = "SELECT * FROM users WHERE u_id=?1", nativeQuery = true)
    User findById(int userId);
}

