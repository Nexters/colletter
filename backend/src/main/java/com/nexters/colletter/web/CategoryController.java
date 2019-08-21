package com.nexters.colletter.web;

import com.nexters.colletter.app.CategoryService;
import com.nexters.colletter.domain.model.Category;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/category")
public class CategoryController {
    @Autowired
    private CategoryService categoryService;

    @GetMapping()
    public List<Category> getAllCategories() {
        return categoryService.getAllCategories();
    }
}
