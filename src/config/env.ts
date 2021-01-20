const { HOME_PAGE_URL, FILM_SERVICE_URL } = process.env;

/**
 * Returns the home page URL.
 */
export const getHomePageUrl = (): string => HOME_PAGE_URL;

/**
 * Returns the film service URL.
 */
export const getFilmServiceUrl = (): string => FILM_SERVICE_URL;
