//SIGN UP/LOGIN

package com.josh.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.josh.config.JwtProvider;
import com.josh.exception.UserException;
import com.josh.model.User;
import com.josh.repository.UserRepository;
import com.josh.request.LoginRequest;
import com.josh.response.AuthResponse;
import com.josh.service.CustomUserServiceImplementation;

@RestController
@RequestMapping("/auth")
public class AuthController {
	
	private UserRepository userRepository;
	private JwtProvider jwtProvider;
	private PasswordEncoder passwordEncoder;
	private CustomUserServiceImplementation customUserServiceImplementation;
	
	
	public AuthController(UserRepository userRepository,PasswordEncoder passwordEncoder, JwtProvider jwtProvider, CustomUserServiceImplementation customUserServiceImplementation) {
		this.userRepository = userRepository;
		this.passwordEncoder = passwordEncoder;
		this.jwtProvider = jwtProvider;
		this.customUserServiceImplementation = customUserServiceImplementation;
	}
	
	//SignUp Method
	@PostMapping("/signup")
	public ResponseEntity<AuthResponse>createUserHandler(@RequestBody User user) throws UserException{
		
		String  email = user.getEmail();
		String password = user.getPassword();
		String firstName = user.getFirstName();
		String lastName = user.getLastName();
		
		User isEmailExist = userRepository.findByEmail(email);
		
		if(isEmailExist != null) {
			throw new UserException("Email is Already Registered, Please Use another Email");
		}
		
		
		User createdUser = new User();
		createdUser.setEmail(email);
		createdUser.setPassword(passwordEncoder.encode(password));
		createdUser.setFirstName(firstName);
		createdUser.setLastName(lastName);
		
		
		User savedUser = userRepository.save(createdUser);
		
		
		Authentication authentication = new UsernamePasswordAuthenticationToken(savedUser.getEmail(), savedUser.getPassword());
		
		SecurityContextHolder.getContext().setAuthentication(authentication);
		
		
		String token = jwtProvider.generateToken(authentication);
		
		
		AuthResponse authResponse = new AuthResponse(token, "SignUp Success");
		
		return new ResponseEntity<AuthResponse>(authResponse, HttpStatus.CREATED);
				
		
	}
	
	
	
	//Login Method
	@PostMapping("/signin")
	public ResponseEntity<AuthResponse>loginUserHandler(@RequestBody LoginRequest loginRequest){
		
		String username = loginRequest.getEmail();
		String password = loginRequest.getPassword();
		
		Authentication authentication = Authenticate(username, password);
		SecurityContextHolder.getContext().setAuthentication(authentication);
		
		
		String token = jwtProvider.generateToken(authentication);
		
		AuthResponse authResponse = new AuthResponse(token, "SignIn Success");
		
		return new ResponseEntity<AuthResponse>(authResponse, HttpStatus.CREATED);
		
		
		
	}

	
	
	private Authentication Authenticate(String username, String password) {
		
		UserDetails userDetails = customUserServiceImplementation.loadUserByUsername(username);
		
		if(userDetails == null) {
			throw new BadCredentialsException("Invalid Username...");
		}
		
		if(!passwordEncoder.matches(password, userDetails.getPassword())) {
			throw new BadCredentialsException("Invalid Password...");
		}
		
		
		return new UsernamePasswordAuthenticationToken(userDetails, null, userDetails.getAuthorities());
	
	}
	
	
	
}
