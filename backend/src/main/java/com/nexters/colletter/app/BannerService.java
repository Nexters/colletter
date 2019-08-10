package com.nexters.colletter.app;

import com.nexters.colletter.app.dto.BannerDto;
import com.nexters.colletter.app.dto.NewsDto;
import com.nexters.colletter.domain.error.InvalidValueException;
import com.nexters.colletter.domain.model.Banner;
import com.nexters.colletter.domain.repository.BannerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@Service
public class BannerService {
    private final String BANNER_DIRECTORY = "banner";

    private final BannerRepository bannerRepository;
    private final S3Service s3Service;

    public BannerService(BannerRepository bannerRepository, S3Service s3Service) {
        this.bannerRepository = bannerRepository;
        this.s3Service = s3Service;
    }

    public List<Banner> getAllBanners() {
        return bannerRepository.findAll();
    }

    public List<Banner> getBanners(int count) {
        Pageable pageable = PageRequest.of(0, count, new Sort(Sort.Direction.ASC, "priority"));
        return bannerRepository.findAll(pageable).getContent();
    }

    public long registerBanner(BannerDto bannerDto, MultipartFile imageFile) throws IOException {
        String imageUrl = s3Service.upload(imageFile, BANNER_DIRECTORY, bannerDto.getName());

        Banner banner = Banner.builder()
                .name(bannerDto.getName())
                .image(imageUrl)
                .priority(bannerDto.getPriority())
                .build();

        return bannerRepository.save(banner).getId();
    }

    public void changeBannerPriotiry(long bannerId, int priority) {
        Banner banner = getBannerById(bannerId);
        banner.changePriority(priority);
        bannerRepository.save(banner);
    }

    public void deleteBanner(long bannerId) {
        bannerRepository.deleteById(bannerId);
    }

    private Banner getBannerById(long bannerId) {
        return bannerRepository.findById(bannerId).orElseThrow(() -> new InvalidValueException("No Match banner id"));
    }
}
