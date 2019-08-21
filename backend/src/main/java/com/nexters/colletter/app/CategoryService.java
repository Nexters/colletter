package com.nexters.colletter.app;

import com.nexters.colletter.app.dto.CategoryDto;
import com.nexters.colletter.domain.error.AlreadyExistException;
import com.nexters.colletter.domain.model.Category;
import com.nexters.colletter.domain.model.News;
import com.nexters.colletter.domain.repository.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@Service
public class CategoryService {
    private final String CATEGORY_DIRECTORY = "category";
    @Autowired
    private CategoryRepository categoryRepository;
    @Autowired
    private S3Service s3Service;

    public List<Category> getAllCategories() {
        return categoryRepository.findAll();
    }

    public long registerCategory(CategoryDto categoryDto, MultipartFile imageFile) throws IOException {
        Category category = Category.builder()
                .nameEN(categoryDto.getNameEN())
                .nameKR(categoryDto.getNameKR())
                .build();
        if (isRegistered(category)) {
            throw new AlreadyExistException("Already registered category");
        }
        String url = s3Service.upload(imageFile, CATEGORY_DIRECTORY, categoryDto.getNameKR() + "_" + categoryDto.getNameEN());
        category.addImage(url);

        return categoryRepository.save(category).getId();
    }

    public void modifyCategory(long categoryId, Category category) {

    }

    public void deleteCategoryById(long categoryId) {
        categoryRepository.deleteById(categoryId);
    }
  
    // TODO : 중복되는 조건?
    private boolean isRegistered(Category category) {
        if (categoryRepository.existsByNameENOrNameKR(category.getNameEN(), category.getNameKR())) {
            return true;
        }

        return false;
    }
}
