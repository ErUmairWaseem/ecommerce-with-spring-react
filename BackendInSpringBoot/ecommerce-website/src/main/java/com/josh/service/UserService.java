package com.josh.service;

import com.josh.exception.UserException;
import com.josh.model.User;

public interface UserService {
	
	public User findUserById(Long userId) throws UserException;
	
	public User findUserProfileByJwt(String jwt) throws UserException;




}


