package com.nexters.colletter.domain.model;

import lombok.*;

import javax.persistence.*;

@Entity
@Table(name = "requestNews")
@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class RequestNews {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "request_news_id")
    private long id;
    @Column(name = "uri")
    private String uri;
    @Column(name = "description")
    private String description;
    @OneToOne
    @JoinColumn(name = "category_id")
    private Category category;
}
