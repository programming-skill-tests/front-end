package com.moviesList;

import static org.assertj.core.api.Assertions.assertThat;
import static org.hamcrest.CoreMatchers.equalTo;
import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertThat;
import static org.mockito.Mockito.times;

import java.util.ArrayList;
import java.util.List;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.mock.web.MockHttpServletResponse;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.RequestBuilder;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.web.context.WebApplicationContext;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.moviesList.controller.MoviesListController;
import com.moviesList.model.Movie;
import com.moviesList.repository.MoviesRepository;
import com.moviesList.service.MovieListService;

@RunWith(SpringRunner.class)
@WebMvcTest(value = MoviesListController.class,secure=false)
public class MoviesListControllerTest {

	private MockMvc mockMvc;
	
	 	@Autowired
	 	private WebApplicationContext webApplicationContext;
	 
	 	@MockBean
	    private MovieListService movieListService;
	 	
	 	@MockBean
	 	private MoviesRepository moviesRepository;
	 	
	 	private String inputInJson = null;
	 	private String outputInJson = null;
	 	private String expectedJson = null;
	 	private String URI = null;

	 	@Before
	    public void setUp() {
	        mockMvc = MockMvcBuilders.webAppContextSetup(webApplicationContext).build();
	    }
	 	
	 	@Test
	    public void testGetMovies() throws Exception {
		 	Movie movie1 = new Movie();
		 	movie1.setTitle("Bahubali 3");
		 	movie1.setDirector("Rajamouli");
		 	movie1.setCast("Prabhas/Anushka");
		 	movie1.setGenre("Action");
		 	movie1.setId((long) 101); 	
		 	
		 	Movie movie2 = new Movie();
		 	movie2.setTitle("Bahubali 4");
		 	movie2.setDirector("Rajamouli");
		 	movie2.setCast("Prabhas/Anushka");
		 	movie2.setGenre("Drama");
		 	movie2.setId((long) 102); 
		 	
		 	List<Movie> movieList = new ArrayList<>();
		 	movieList.add(movie1);
		 	movieList.add(movie2);
		 	
		 	URI = "/api/moviesList";
		 	
		 	Mockito.when(movieListService.getMovies()).thenReturn(movieList);
		 	RequestBuilder requestBuilder = MockMvcRequestBuilders
		 									.get(URI)
		 									.accept(MediaType.APPLICATION_JSON);
		 	MvcResult result = mockMvc.perform(requestBuilder).andReturn();
		 	expectedJson = this.mapToJson(movieList);
		 	outputInJson = result.getResponse().getContentAsString();
		 	assertThat(outputInJson).isEqualTo(expectedJson);
	    }
	 	
	 	
	 	@Test
	    public void testCreateMovie() throws Exception {
		 	Movie movie = new Movie();
		 	movie.setTitle("Bahubali 2");
		 	movie.setDirector("Rajamouli");
		 	movie.setCast("Prabhas/Anushka");
		 	movie.setGenre("Action");
		 	movie.setId((long) 180); 	
		 	inputInJson = this.mapToJson(movie);
		 	URI = "/api/createMovieData";
		 	Mockito.when(movieListService.createMovie(Mockito.any(Movie.class))).thenReturn(movie);
		 	RequestBuilder requestBuilder = MockMvcRequestBuilders
		 									.post(URI)
		 									.accept(MediaType.APPLICATION_JSON).content(inputInJson)
		 									.contentType(MediaType.APPLICATION_JSON);
		 	MvcResult result = mockMvc.perform(requestBuilder).andReturn();
		 	MockHttpServletResponse response = result.getResponse();
		 	String outputInJson = response.getContentAsString();
		 	assertThat(outputInJson).isEqualTo(inputInJson);
		 	assertEquals(HttpStatus.OK.value(), response.getStatus());
	    }
	 
		@Test
	    public void testDeleteMovie() throws Exception {
		 	Movie movie = new Movie();
		 	Mockito.when(movieListService.findMovie(18L))
            .thenReturn(movie);
		 	final boolean result = movieListService.delete(18L);
		 	assertThat(result, equalTo(false));
	    }

	   	
	 	private String mapToJson(Object object) throws JsonProcessingException{
	 		ObjectMapper objectMapper =  new ObjectMapper();
	 		return objectMapper.writeValueAsString(object);
	 	}
}
