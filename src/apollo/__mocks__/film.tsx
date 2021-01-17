import { Film } from "../../types/film";

export const getFilm = (): Film => {
  return {
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
  }
}