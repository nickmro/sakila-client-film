import React from 'react';
import renderer from 'react-test-renderer';
import { FilmPage } from './[filmId].page';

const film = {
  filmId: 1,
  title: 'ACADEMY DINOSAUR',
  description: 'A Epic Drama of a Feminist And a Mad Scientist who must Battle a Teacher in The Canadian Rockies',
  length: 86,
  rating: 'PG',
  releaseYear: 2006,
  actors: [
    {
      actorId: 1,
      firstName: 'PENELOPE',
      lastName: 'GUINESS',
    },
    {
      actorId: 2,
      firstName: 'CHRISTIAN',
      lastName: 'GABLE',
    },
  ],
};

describe('FilmPage', () => {
  beforeEach(() => {
    jest.mock('~/apollo/film');
  });

  test('it renders', () => {
    const filmPage = renderer.create(<FilmPage film={film} />);
    expect(filmPage).toBeTruthy();
  });

  test('it renders the film title', () => {
    const filmPage = renderer.create(<FilmPage film={film} />);
    const title = filmPage.root.findByProps({ children: film.title });
    expect(title).toBeTruthy();
  });

  test('it renders the description', () => {
    const filmPage = renderer.create(<FilmPage film={film} />);
    const description = filmPage.root.findByProps({ children: film.description });
    expect(description).toBeTruthy();
  });

  test('it renders the rating', () => {
    const filmPage = renderer.create(<FilmPage film={film} />);
    const rating = filmPage.root.findByProps({ children: film.rating });
    expect(rating).toBeTruthy();
  });

  test('it renders the duration', () => {
    const filmPage = renderer.create(<FilmPage film={film} />);
    const duration = filmPage.root.findByProps({ children: '1h 26m' });
    expect(duration).toBeTruthy();
  });

  test('it renders the release year', () => {
    const filmPage = renderer.create(<FilmPage film={film} />);
    const releaseYear = filmPage.root.findByProps({ children: film.releaseYear });
    expect(releaseYear).toBeTruthy();
  });

  test('it renders the actors', () => {
    const filmPage = renderer.create(<FilmPage film={film} />);
    const actors = filmPage.root.findByProps({ children: 'PENELOPE GUINESS, CHRISTIAN GABLE' });
    expect(actors).toBeTruthy();
  });
});
