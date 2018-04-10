package com.moviesList;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.Assert.assertEquals;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import java.util.ArrayList;
import java.util.List;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mockito;
import org.mockito.MockitoAnnotations;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.RequestBuilder;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.web.context.WebApplicationContext;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.moviesList.model.Movie;
import com.moviesList.repository.MoviesRepository;
import com.moviesList.service.MovieListService;


/**
 * @author bnarasim
 * This class will perform unit test for the methods in service class.
 *
 */
@RunWith(SpringJUnit4ClassRunner.class)
@WebMvcTest(value = MovieListService.class,secure=false)
public class MovieListServiceTest {
	
	@MockBean
 	private MoviesRepository moviesRepository;
 
 	@InjectMocks
    private MovieListService movieListService;
 	
 	
 	/**
 	 * Initializing the mocks.
 	 */
 	@Before
	public void setup(){
		MockitoAnnotations.initMocks(this);
	}
 	
 	/**
 	 * This method is used to test the whether the list of movies are coming or not.
 	 */
 	@Test
	public void testGetMovies(){
		Movie movie1 = new Movie();
	 	movie1.setTitle("Bahubali");
	 	movie1.setDirector("Rajamouli");
	 	movie1.setCast("Prabhas/Anushka");
	 	movie1.setGenre("Action");
	 	movie1.setId((long) 18L); 	
	 	
	 	Movie movie2 = new Movie();
	 	movie2.setTitle("Robo 2.0");
	 	movie2.setDirector("Shankar");
	 	movie2.setCast("Rajinikanth/Aishwarya Rai");
	 	movie2.setGenre("Action, Drama");
	 	movie2.setId((long) 19L); 
	 	List<Movie> movieList = new ArrayList<>();
	 	movieList.add(movie1);
	 	movieList.add(movie2);
	 	when(moviesRepository.findAll()).thenReturn(movieList);
		List<Movie> result = movieListService.getMovies();
		assertEquals(2, result.size());
	}
 	
 	/**
 	 * This method is used to test whether the new movie is creating or not.
 	 */
 	@Test
	public void testCreateMovie(){
 		Movie movie1 = new Movie();
	 	movie1.setTitle("Rangasthalam");
	 	movie1.setDirector("Sukumar");
	 	movie1.setCast("Ramcharan/Samantha");
	 	movie1.setGenre("Drama");
	 	movie1.setId((long) 50L);
	 	
		when(moviesRepository.save(movie1)).thenReturn(movie1);
		Movie result = movieListService.createMovie(movie1);
		assertEquals("Rangasthalam", result.getTitle());
		assertEquals("Sukumar", result.getDirector());
	}
	
	/**
	 * This method is used to test whether the movie is deleting or not.
	 */
	@Test
	public void removeToDo(){
		Movie movie1 = new Movie();
	 	movie1.setTitle("Rangasthalam");
	 	movie1.setDirector("Sukumar");
	 	movie1.setCast("Ramcharan/Samantha");
	 	movie1.setGenre("Drama");
	 	movie1.setId((long) 50L);
	 	Boolean result = movieListService.delete(movie1.getId());
	 	assertEquals(true, result);
	}
	
 	
 }
