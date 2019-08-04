package com.nexters.colletter.app;

import com.nexters.colletter.domain.error.InvalidValueException;
import com.nexters.colletter.domain.model.User;
import com.nexters.colletter.domain.repository.UserRepository;
import com.nexters.colletter.domain.service.BookmarkService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    public User getUserById(long id) {
        return userRepository.findById(id).orElseThrow(() -> new InvalidValueException("No Matched user id"));
    }
}
