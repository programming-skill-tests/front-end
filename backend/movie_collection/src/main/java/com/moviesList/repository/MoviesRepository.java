package com.moviesList.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.moviesList.model.Movie;

/**
 * @author Bodicherla Narasimha Rao
 * This interface is used to interact with the database table.
 *
 */
public interface MoviesRepository extends JpaRepository<Movie, Long> {

}
