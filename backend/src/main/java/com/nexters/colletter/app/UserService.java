package com.nexters.colletter.app;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.nexters.colletter.app.dto.UserDto;
import com.nexters.colletter.domain.error.InvalidValueException;
import com.nexters.colletter.domain.model.User;
import com.nexters.colletter.domain.repository.UserRepository;
import com.nexters.colletter.domain.service.BookmarkService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.ui.ModelMap;

import java.util.Optional;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;
    @Autowired
    ModelMapper modelMapper;

    public UserDto getUserProfile(long userId) {
        User user = getUserById(userId);
        UserDto userDto = new UserDto(user);
        return userDto;
    }

    private User getUserById(long userId) {
        return userRepository.findById(userId).orElseThrow(() -> new InvalidValueException("No Matched user id"));
    }
}
