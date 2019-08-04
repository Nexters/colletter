package com.nexters.colletter.app;

import com.nexters.colletter.app.dto.UserDto;
import com.nexters.colletter.domain.error.InvalidValueException;
import com.nexters.colletter.domain.model.User;
import com.nexters.colletter.domain.repository.UserRepository;
import com.nexters.colletter.domain.value.UserRole;
import com.nexters.colletter.web.jwt.JwtTokenHelper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AuthenticationService {
    @Autowired
    private UserRepository userRepository;
    @Autowired
    JwtTokenHelper jwtTokenHelper;

    public String login(UserDto userDto) {
        // TODO : OAuth2.0 validation logic
        validation();
        // check OAuth

        String jwt = jwtTokenHelper.generateToken(userDto.getEmail());

        User user = User.builder()
                .name(userDto.getName())
                .role(UserRole.NORMAL)
                .email(userDto.getEmail())
                .image(userDto.getImage())
                .access_token(jwt)
                .build();

        if (!userRepository.existsByEmail(userDto.getEmail())) {
            userRepository.save(user);
        }

        return "Bearer " + jwt;
    }

    // TODO : extract all validation logic
    private void validation() {}

    private User getUserById(long id) {
        return userRepository.findById(id).orElseThrow(() -> new InvalidValueException("No Matched user id"));
    }
}
