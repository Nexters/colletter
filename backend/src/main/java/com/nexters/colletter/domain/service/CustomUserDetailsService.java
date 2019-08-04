package com.nexters.colletter.domain.service;

import com.nexters.colletter.domain.error.InvalidValueException;
import com.nexters.colletter.domain.model.User;
import com.nexters.colletter.domain.repository.UserRepository;
import com.nexters.colletter.web.dto.CustomUserDetail;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class CustomUserDetailsService implements UserDetailsService {
    @Autowired
    private UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String id) throws UsernameNotFoundException {
        User user = getUserById(Long.valueOf(id));
        return new CustomUserDetail(user);
    }

    private User getUserById(long id) {
        return userRepository.findById(id).orElseThrow(() -> new InvalidValueException("No Matched user id"));
    }
}
