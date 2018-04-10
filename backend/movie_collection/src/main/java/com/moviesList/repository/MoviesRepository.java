package com.moviesList.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

import com.moviesList.model.Movie;

/**
 * @author Bodicherla Narasimha Rao
 * This interface is used to interact with the database table.
 *
 */
@Repository
@Service
public interface MoviesRepository extends JpaRepository<Movie, Long> {

}
