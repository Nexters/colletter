package com.nexters.colletter.config;

import com.nexters.colletter.domain.model.Category;
import com.nexters.colletter.domain.model.User;
import com.nexters.colletter.domain.repository.CategoryRepository;
import com.nexters.colletter.domain.repository.UserRepository;
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
                new Category("DESIGN", "디자인", null),
                new Category("EDUCATION", "교육", null),
                new Category("DEVELOPMENT", "개발", null),
                new Category("ART_CULTURE", "문화예술", null),
                new Category("COMMON_SENSE", "상식", null),
                new Category("ENTERPRISE", "기업", null),
                new Category("FINANCE", "금융", null),
                new Category("IT_STARTUP", "IT-스타트업", null),
                new Category("POLITICS", "정치", null),
                new Category("RELIGION", "종교", null),
                new Category("TREND", "트렌드", null)
        ));

        userRepository.save(User.builder()
                .email("colletter")
                .name("뒤끝")
                .role(UserRole.ADMIN)
                .image("")
                .access_token("")
                .refresh_token("")
                .theme(ThemeStatus.WHITE)
                .build()
        );
    }
}
