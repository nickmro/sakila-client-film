import { getHomePageUrl } from '~/config/env';
import { Actor } from '~/types/actor';
import { Film } from '~/types/film';

const actorSchema = (actor: Actor): Record<string, unknown> => {
  const { firstName, lastName } = actor;
  return {
    '@type': 'Person',
    name: `${firstName} ${lastName}`,
  };
};

export const filmSchema = (film: Film): Record<string, unknown> => {
  const {
    actors,
    description,
    filmId,
    rating,
    releaseYear,
    title,
  } = film;

  return {
    '@context': 'https://schema.org/',
    '@type': 'Movie',
    '@id': filmId,
    name: title,
    description,
    url: getHomePageUrl(`/f/${filmId}`),
    actor: actors.map(actorSchema),
    copyrightYear: `${releaseYear}`,
    contentRating: rating,
  };
};

export default { filmSchema };
