//package com.revature.Commerce;
//
//import com.revature.Commerce.controllers.UserController;
//import com.revature.Commerce.models.ClientMessage;
//import com.revature.Commerce.models.User;
//import com.revature.Commerce.services.UserService;
//import com.revature.Commerce.services.UserServiceImpl;
//import org.hibernate.annotations.Parameter;
//import org.junit.jupiter.api.extension.ExtendWith;
//import org.junit.jupiter.api.extension.ParameterResolver;
//import org.junit.jupiter.params.ParameterizedTest;
//import org.junit.jupiter.params.provider.ValueSource;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.MediaType;
//import org.springframework.test.context.junit.jupiter.SpringExtension;
//import org.springframework.test.web.servlet.MockMvc;
//import org.springframework.test.web.servlet.MvcResult;
//import org.springframework.test.web.servlet.RequestBuilder;
//import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
//import org.springframework.web.bind.annotation.*;
//import java.util.List;
//
//import static com.revature.Commerce.utils.ClientMessageUtils.*;
//import static org.junit.jupiter.api.Assertions.assertEquals;
//
//import org.junit.jupiter.api.Test;
//import org.springframework.boot.test.context.SpringBootTest;
//
////@ExtendWith(SpringExtension.class)
////@WebMvcTest(UserController.class)
//
//@SpringBootTest
//@Configuration
//public class UserControllerTest {
//
//	@Autowired
//	public UserService userService;
//
//	@Autowired
//	public UserServiceImpl userServiceImpl;
//
////	@Autowired
////	private MockMvc mvc;
//
//
//	@Test
//	public void getUserById(@RequestParam int userId){
//		RequestBuilder request = MockMvcRequestBuilders.get("/commerce/user");
////		MvcResult result = mvc.perform(request).andReturn();
//		UserController userController = new UserController();
//		User eric = new User(1, "ericcurielput", "ericpasswordput", "brokenapex22@gmail.comput", "eric", "curiel", "123 Revature Lane", 600);
//		User testUser = userController.getUserById(1);
//		assertEquals(eric, testUser);
//	}
//}
