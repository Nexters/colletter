package com.nexters.colletter.config;

import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@Configuration
@EntityScan(basePackages = {"com.nexters.colletter.domain.model"})
@EnableJpaRepositories(basePackages = {"com.nexters.colletter.domain.repository"})
public class RepositoryConfig {
}
