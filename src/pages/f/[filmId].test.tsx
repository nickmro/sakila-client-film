import renderer from 'react-test-renderer';
import FilmPage from './[filmId]';

jest.mock("../../apollo/film")

const film = {
  filmId: 1,
  title: "ACADEMY DINOSAUR",
  description: "A Epic Drama of a Feminist And a Mad Scientist who must Battle a Teacher in The Canadian Rockies",
  length: 86,
  rating: "PG",
  releaseYear: 2006,
  actors: [
    {
      actorId: 1,
      firstName: "PENELOPE",
      lastName: "GUINESS"
    },
    {
      actorId: 2,
      firstName: "CHRISTIAN",
      lastName: "GABLE"
    }
  ],
};

describe('FilmPage', () => {
  test('it renders', () => {
    const filmPage = renderer.create(<FilmPage film={film}></FilmPage>);
    expect(filmPage).toMatchSnapshot();
  });

  test('it renders the film title', () => {
    const filmPage = renderer.create(<FilmPage film={film}></FilmPage>);
    const title = filmPage.root.findByProps({ className: "title" }).props.children;
    expect(title).toEqual(film.title);
  });

  test('it renders the description', () => {
    const filmPage = renderer.create(<FilmPage film={film}></FilmPage>);
    const description = filmPage.root.findByProps({ className: "description" }).props.children
    expect(description).toEqual(film.description)
  });

  test('it renders the rating', () => {
    const filmPage = renderer.create(<FilmPage film={film}></FilmPage>);
    const rating = filmPage.root.findByProps({ className: "rating" }).props.children
    expect(rating).toEqual(film.rating)
  });

  test('it renders the duration', () => {
    const filmPage = renderer.create(<FilmPage film={film}></FilmPage>);
    const duration = filmPage.root.findByProps({ className: "duration" }).props.children
    expect(duration).toEqual("1h 26m")
  });

  test('it render the release year', () => {
    const filmPage = renderer.create(<FilmPage film={film}></FilmPage>);
    const releaseYear = filmPage.root.findByProps({ className: "release-year" }).props.children
    expect(releaseYear).toEqual(film.releaseYear)
  });

  test('it renders the actors', () => {
    const filmPage = renderer.create(<FilmPage film={film}></FilmPage>);
    const actors = filmPage.root.findByProps({ className: "actors" }).props.children
    expect(actors).toEqual("PENELOPE GUINESS, CHRISTIAN GABLE")
  });
});