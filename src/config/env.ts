/* eslint-disable prefer-destructuring */
const FILM_SERVICE_URL = process.env.FILM_SERVICE_URL;
const HOMEPAGE_URL = process.env.HOMEPAGE_URL;

/**
 * Returns the home page URL.
 */
export const getHomePageUrl = (): string => HOMEPAGE_URL;

/**
 * Returns the film service URL.
 */
export const getFilmServiceUrl = (): string => FILM_SERVICE_URL;
