const HOME_PAGE_URL = process.env.HOME_PAGE_URL;
const FILM_SERVICE_URL = process.env.FILM_SERVICE_URL;

/**
 * Returns the home page URL.
 */
export const getHomePageUrl = (): string => {
  return HOME_PAGE_URL;
}

/**
 * Returns the film service URL.
 */
export const getFilmServiceUrl = (): string => {
  return FILM_SERVICE_URL;
}
