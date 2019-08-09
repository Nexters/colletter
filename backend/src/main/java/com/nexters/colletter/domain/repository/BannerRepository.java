package com.nexters.colletter.domain.repository;

import com.nexters.colletter.domain.model.Banner;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BannerRepository extends JpaRepository<Banner, Long> {
}
