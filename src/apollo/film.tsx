import {
  ApolloClient,
  createHttpLink,
  gql,
  InMemoryCache,
} from "@apollo/client";
import { getFilmServiceUrl } from "../config/env";
import { Film } from "../types/film";

const FILM_QUERY = gql`
  query Film($filmId: Int!) {
    film(filmId: $filmId) {
      filmId
      title
      description
      length
      rating
      releaseYear
      actors {
        actorId
        firstName
        lastName
      }
    }
  }
`;

const FILMS_QUERY = gql`
  {
    films(limit: 100) {
      filmId
      title
    }
  }
`

const filmClient = new ApolloClient({
  ssrMode: true,
  link: createHttpLink({
    uri: getFilmServiceUrl(),
    credentials: 'same-origin',
  }),
  cache: new InMemoryCache(),
});

export const getFilm = async (filmId: number) => {
  return filmClient.query<{ film: Film }>({
    query: FILM_QUERY,
    variables: { filmId },
  })
}

export const getFilms = async () => {
  return filmClient.query<{ films: Film[] }>({
    query: FILMS_QUERY,
  })
}
