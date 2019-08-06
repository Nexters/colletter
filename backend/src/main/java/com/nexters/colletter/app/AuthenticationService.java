package com.nexters.colletter.app;

import com.nexters.colletter.app.dto.UserDto;
import com.nexters.colletter.domain.error.InvalidValueException;
import com.nexters.colletter.domain.model.User;
import com.nexters.colletter.domain.repository.UserRepository;
import com.nexters.colletter.domain.value.UserRole;
import com.nexters.colletter.web.jwt.JwtTokenHelper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Objects;
import java.util.Optional;

@Service
public class AuthenticationService {
    @Autowired
    private UserRepository userRepository;
    @Autowired
    JwtTokenHelper jwtTokenHelper;

    // TODO : polish
    public String adminLogin(String identifier) {
        getUserByEmail(identifier);
        String jwt = jwtTokenHelper.generateToken(identifier);
        return "Bearer " + jwt;
    }

    /**
     *
     * @param userDto
     * @return "Bearer " + jwt
     *
     * 이미 가입 된 유저면 token만 교체, 아니면 유저 생성
     */
    public String login(UserDto userDto) {
        // TODO : OAuth2.0 validation logic
        validation();
        // check OAuth

        String jwt = jwtTokenHelper.generateToken(userDto.getEmail());

        User user = userRepository.findByEmail(userDto.getEmail())
                .orElseGet(() -> User.builder()
                        .name(userDto.getName())
                        .role(UserRole.NORMAL)
                        .email(userDto.getEmail())
                        .image(userDto.getImage())
                        .access_token(jwt)
                        .build());
        user.changeImage(userDto.getImage());
        user.changeName(userDto.getName());
        user.changeAccessToken(jwt);

        userRepository.save(user);
        return "Bearer " + jwt;
    }

    // TODO : extract all validation logic
    private void validation() {}

    private User getUserById(long id) {
        return userRepository.findById(id).orElseThrow(() -> new InvalidValueException("No Matched user id"));
    }

    private User getUserByEmail(String email) {
        return userRepository.findByEmail(email).orElseThrow(() -> new InvalidValueException("No Matched user email"));
    }
}
