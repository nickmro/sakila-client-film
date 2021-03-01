import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
  NormalizedCacheObject,
} from '@apollo/client';
import { getFilmServiceUrl } from '~/config/env';

const filmClient = (): ApolloClient<NormalizedCacheObject> => new ApolloClient({
  ssrMode: true,
  link: createHttpLink({
    uri: getFilmServiceUrl(),
    credentials: 'same-origin',
  }),
  cache: new InMemoryCache(),
});

export default filmClient;
