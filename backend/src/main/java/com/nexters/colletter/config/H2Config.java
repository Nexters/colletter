package com.nexters.colletter.config;

import com.zaxxer.hikari.HikariDataSource;
import org.h2.tools.Server;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.boot.jdbc.DataSourceBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;

import javax.sql.DataSource;
import java.sql.SQLException;

@Configuration
@Profile("test")
public class H2Config {
    @Bean
    @ConfigurationProperties("spring.datasource.test")
    public DataSource dataSource() throws SQLException {
//        Server.createTcpServer("-tcp", "-tcpAllowOthers", "-tcpPort", "9092").start();
        return DataSourceBuilder.create().type(HikariDataSource.class).build();
    }
}
