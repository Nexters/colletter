package com.nexters.colletter.config;

import com.nexters.colletter.domain.model.Category;
import com.nexters.colletter.domain.model.User;
import com.nexters.colletter.domain.repository.CategoryRepository;
import com.nexters.colletter.domain.repository.UserRepository;
import com.nexters.colletter.domain.value.CategoryType;
import com.nexters.colletter.domain.value.ThemeStatus;
import com.nexters.colletter.domain.value.UserRole;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;

import javax.annotation.PostConstruct;
import java.util.Arrays;

@Configuration
@Profile("init")
public class InitDataConfig {
    @Autowired
    private CategoryRepository categoryRepository;
    @Autowired
    private UserRepository userRepository;

    @PostConstruct
    public void initData() {
        categoryRepository.saveAll(Arrays.asList(
                new Category("c_0", CategoryType.DESIGN.getName(), null),
                new Category("c_1", CategoryType.GAME.getName(), null),
                new Category("c_2", CategoryType.FOOD.getName(), null),
                new Category("c_3", CategoryType.EDUCATION.getName(), null),
                new Category("c_4", CategoryType.DEVELOPMENT.getName(), null),
                new Category("c_5", CategoryType.PLAN.getName(), null)
        ));

        userRepository.save(User.builder()
                .email("colletter")
                .name("뒤끝")
                .role(UserRole.ADMIN)
                .image("")
                .access_token("")
                .refresh_token("")
                .theme(ThemeStatus.WHITE)
                .bookmarkCount(0)
                .build()
        );
    }
}
