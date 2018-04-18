import { Film } from './film';

describe('Film', () => {
  it('should create an instance', () => {
    expect(new Film()).toBeTruthy();
  });

  it('should accept values in the constructor', () => {
    let film = new Film({
      title: "Ready Player One",
      director: "Steven Spielberg",
      genre: "Action",
      cast: "Olivia Cooke/Tye Sheridan",
      selected: false
    });
    expect(film.title).toEqual("Ready Player One");
    expect(film.director).toEqual("Steven Spielberg");
    expect(film.genre).toEqual("Action");
    expect(film.cast).toEqual("Olivia Cooke/Tye Sheridan");
    expect(film.selected).toEqual(false);
  });
});
