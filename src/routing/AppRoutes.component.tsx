import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from '../pages/login/Login.page';
import MoviesLayout from '../pages/movies/Movies.layout';
import SeriesPage from '../pages/series/Series.page';
import { RoutesConstants } from './routes.constants';
import MoviesPage from '../pages/movies/Movies.page';
import SeriesLayout from '../pages/series/Series.layout';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/">
        <Route path={RoutesConstants.LOGIN} element={<LoginPage />} />
        <Route path={RoutesConstants.MOVIES.root} element={<MoviesLayout />}>
          <Route path={RoutesConstants.MOVIES.subRoutes.favorites} element={<h1>Favorites</h1>} />
          <Route path={RoutesConstants.MOVIES.subRoutes.watched} element={<h1>Watched</h1>} />
          <Route path={RoutesConstants.MOVIES.subRoutes.forFuture} element={<h1>For future</h1>} />
          <Route path={''} element={<Navigate to={RoutesConstants.MOVIES.default} />} />
        </Route>
        <Route path={RoutesConstants.SERIES.root} element={<SeriesLayout />}>
          <Route path={RoutesConstants.SERIES.subRoutes.inProcess} element={<h1>inProcess</h1>} />
          <Route path={RoutesConstants.SERIES.subRoutes.finished} element={<h1>finished</h1>} />
          <Route path={RoutesConstants.SERIES.subRoutes.forFuture} element={<h1>forFuture</h1>} />
          <Route
            path={RoutesConstants.SERIES.subRoutes.waitingForSeason}
            element={<h1>waitingForSeason</h1>}
          />
          <Route path={RoutesConstants.SERIES.subRoutes.redundant} element={<h1>redundant</h1>} />
          <Route path={''} element={<Navigate to={RoutesConstants.SERIES.default} />} />
        </Route>
        <Route path={RoutesConstants.SEARCH} element={<SeriesPage />} />
        <Route path={''} element={<Navigate to={RoutesConstants.MOVIES.default} />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
