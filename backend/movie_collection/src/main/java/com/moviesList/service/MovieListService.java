package com.moviesList.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.moviesList.model.Movie;
import com.moviesList.repository.MoviesRepository;

/**
 * @author bnarasim
 * In this service we will perform the get, create and delete operations on movies.
 *
 */
@Service
public class MovieListService {
	
	@Autowired
	MoviesRepository moviesRepository;
	
	private Long deleteId;
	final boolean result = false;
	
	
	/**
	 * @return movieList
	 * This method will return the list of movies information available in the database.
	 */
	public List<Movie> getMovies() {
		List<Movie> movieList = new ArrayList<Movie>();
		try {
			movieList = moviesRepository.findAll();
		}catch(Exception e) {
			e.printStackTrace();
		}
		return movieList;
	}

	
	
	/**
	 * @param employee
	 * This method is used to save the movie information to the database. 
	 */
	public Movie createMovie(Movie movie) {
		if(movie!=null) {
			return moviesRepository.save(movie);
		}
		return null;
	}
	
	
	
	/**
	 * @param movieId
	 * This method takes an input put movieId as input string and later it will parsed based on the comma separation values.
	 * Each item will be deleted, which will be selected by the user.
	 */
	public ResponseEntity<Movie> deleteMovie(String movieId) {
		try {
			if(movieId!=null && !movieId.isEmpty()) {
				if(movieId.contains(",")){
					String id[]=movieId.split(",");
					for (int i = 0; i < id.length; i++) { 
						deleteId=Long.parseLong(id[i]);
						Movie moviesList = moviesRepository.findOne(deleteId);
						if (moviesList == null) {
							return ResponseEntity.notFound().build();
						}
						moviesRepository.delete(moviesList);
					}
				}else{
					deleteId=Long.parseLong(movieId);
					Movie moviesList = moviesRepository.findOne(deleteId);
					if (moviesList == null) {
						return ResponseEntity.notFound().build();
					}
					moviesRepository.delete(moviesList);
				}

			}
		}catch(Exception e) {
			e.printStackTrace();
		}
		return ResponseEntity.ok().build();
	}
	
	
	 /**
	 * @param id
	 * @return true/false
	 * This method is used to check, whether the movie is deleted or not.
	 */
	public boolean delete(Long id) {
	        Movie movie = findMovie(id);
	        if (movie != null) {
	        	moviesRepository.delete(movie);
	        }
	        Movie removed = findMovie(id);
	        if (removed != null) {
	            return false;
	        }
	        return true;
	   }	
	 
	 /**
	 * @param id
	 * @return movie
	 * This method is used to get the movie information for the selected movie by passing the id.
	 */
	public Movie findMovie(Long id) {
	 	Movie movie = moviesRepository.findOne(id);
	 	return movie;
	 }
}
