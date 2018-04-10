package com.moviesList;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

import com.moviesList.repository.MoviesRepository;

/**
 * @author Bodicherla Narasimha Rao
 * This class is used to bootstrap the application. The execution will start from here.
 *
 */
@SpringBootApplication
public class MoviesListApplication {

	/**
	 * @param args
	 * This is the main method, from where the spring boot application execution will start.
	 */
	public static void main(String[] args) {
		SpringApplication.run(MoviesListApplication.class, args);
	}
}
