import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import flow from 'lodash/fp/flow';
import last from 'lodash/fp/last';
import split from 'lodash/fp/split';

import TabsUnstyled from '@mui/base/TabsUnstyled';

import { RoutesConstants } from '../../routing/routes.constants';
import { Tab, TabsList } from '../../base/tabs/Tabs.component';

const MoviesTabs = () => {
  const { pathname } = useLocation();
  const [state, setState] = useState(RoutesConstants.MOVIES.subRoutes.forFuture);

  useEffect(() => {
    const state = flow(split('/'), last)(pathname) || RoutesConstants.MOVIES.subRoutes.forFuture;
    setState(state);
  }, [pathname]);

  return (
    <TabsUnstyled value={state} onChange={() => {}} selectionFollowsFocus>
      <TabsList>
        <Tab
          value={RoutesConstants.MOVIES.subRoutes.favorites}
          to={RoutesConstants.MOVIES.subRoutes.favorites}
          components={{ Root: Link }}>
          Favorite
        </Tab>
        <Tab
          value={RoutesConstants.MOVIES.subRoutes.watched}
          to={RoutesConstants.MOVIES.subRoutes.watched}
          components={{ Root: Link }}>
          Watched
        </Tab>
        <Tab
          value={RoutesConstants.MOVIES.subRoutes.forFuture}
          to={RoutesConstants.MOVIES.subRoutes.forFuture}
          components={{ Root: Link }}>
          For future
        </Tab>
      </TabsList>
    </TabsUnstyled>
  );
};

export default MoviesTabs;
