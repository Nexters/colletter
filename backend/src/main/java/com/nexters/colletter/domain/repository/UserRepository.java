package com.nexters.colletter.domain.repository;

import com.nexters.colletter.domain.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
}
