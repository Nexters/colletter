package com.nexters.colletter.domain.repository;

import com.nexters.colletter.domain.model.Category;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface CategoryRepository extends JpaRepository<Category, Long> {
    boolean existsByNameENOrNameKR(String nameEN, String nameKR);
}
