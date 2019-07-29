package com.nexters.colletter.domain.repository;

import com.nexters.colletter.domain.model.Category;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CategoryRepository extends JpaRepository<Category, String> {
}
