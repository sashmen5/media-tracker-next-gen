import React from 'react';
import MoviesTabs from './MoviesTabs.component';
import { CollectionLayout } from '../../app/layouts/Collection.layout';

const MoviesLayout = () => {
  return <CollectionLayout tabs={<MoviesTabs />} />;
};

export default MoviesLayout;
