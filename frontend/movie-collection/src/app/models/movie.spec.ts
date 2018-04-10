import { Movie } from './movie';

describe('Movie', () => {
   it('should create an instance of Movie',() => {
       expect(new Movie()).toBeTruthy();
   });

   it('should accept values', () => {
    let movie = new Movie();
    movie = {
        id: "111",
        title: "Rangasthalam",
        director: "Rajamouli",
        cast: 'print "Hello"',
        genre: " ",
    }
    expect(movie.id).toEqual("111");
    expect(movie.title).toEqual("Rangasthalam");
    expect(movie.director).toEqual("Rajamouli");
});
})