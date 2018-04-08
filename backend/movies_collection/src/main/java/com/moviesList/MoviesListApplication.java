package com.moviesList;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

/**
 * @author Bodicherla Narasimha Rao
 * This class is used to bootstrap the application. The execution will start from here.
 *
 */
@SpringBootApplication
public class MoviesListApplication {

	public static void main(String[] args) {
		SpringApplication.run(MoviesListApplication.class, args);
	}
}
