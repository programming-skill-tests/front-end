package com.moviesList.controller;

import java.util.ArrayList;
import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.moviesList.model.Movie;
import com.moviesList.repository.MoviesRepository;
import com.moviesList.service.MovieListService;

/**
 * @author Bodicherla Narasimha Rao
 * This Class is a controller which consists of methods for Creating/Deleting movie data
 * and getting the list of movie data available.
 *
 */
@RestController
@RequestMapping("/api")
@CrossOrigin(origins= {"http://localhost:4200"})

public class MoviesListController {

	
	
	@Autowired
	MovieListService movieListService;
	


	/**
	 * @return 
	 * @returns the list of movies data available in the system.
	 */
	@GetMapping("/moviesList")
	public List<Movie> getMoviesList() {
		return movieListService.getMovies();
	}

	/**
	 * @param employee
	 * @saves the movie data created by the end user.
	 */
	@PostMapping("/createMovieData")
	public Movie createMovieInfo(@Valid @RequestBody Movie employee) {
		return movieListService.createMovie(employee);
	}


	/**
	 * @param movieId
	 * @deletes the selected movies list from the database.
	 */
	@DeleteMapping("/deleteMovieData/{id}")
	public ResponseEntity<Movie> deleteMovie(@PathVariable(value = "id") String movieId) {
		return movieListService.deleteMovie(movieId);
	}
}
