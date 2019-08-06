package com.nexters.colletter.app;

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
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        User user = getUserByEmail(email);
        return new CustomUserDetail(user);
    }

    private User getUserByEmail(String email) {
        return userRepository.findByEmail(email).orElseThrow(() -> new InvalidValueException("No Matched user id"));
    }
}
