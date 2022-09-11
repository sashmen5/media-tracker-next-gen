const movieRoute = 'movies';
const seriesRoute = 'series';
const forFuture = 'for-future';

export const RoutesConstants = {
  LOGIN: 'login',
  MOVIES: {
    root: movieRoute,
    default: '/movies/for-future',
    subRoutes: {
      watched: `watched`,
      forFuture: forFuture,
      favorites: `favorites`
    }
  },
  SERIES: {
    root: seriesRoute,
    default: '/series/in-process',
    subRoutes: {
      inProcess: 'in-process',
      finished: 'finished',
      forFuture: forFuture,
      waitingForSeason: `waiting-for-season`,
      redundant: `redundant`
    }
  },
  SEARCH: '/search'
};
