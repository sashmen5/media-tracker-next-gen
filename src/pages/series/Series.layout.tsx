import React from 'react';
import { CollectionLayout } from '../../app/layouts/Collection.layout';
import SeriesTabs from './SeriesTabs.component';

const SeriesLayout = () => {
  return <CollectionLayout tabs={<SeriesTabs />} />;
};

export default SeriesLayout;
