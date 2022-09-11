import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import flow from 'lodash/fp/flow';
import last from 'lodash/fp/last';
import split from 'lodash/fp/split';

import TabsUnstyled from '@mui/base/TabsUnstyled';

import { RoutesConstants } from '../../routing/routes.constants';
import { Tab, TabsList } from '../../base/tabs/Tabs.component';

const SeriesTabs = () => {
  const { pathname } = useLocation();
  const [state, setState] = useState(RoutesConstants.SERIES.subRoutes.inProcess);

  useEffect(() => {
    const state = flow(split('/'), last)(pathname) || RoutesConstants.SERIES.subRoutes.inProcess;
    setState(state);
  }, [pathname]);

  return (
    <TabsUnstyled value={state} onChange={() => {}} selectionFollowsFocus>
      <TabsList>
        <Tab
          value={RoutesConstants.SERIES.subRoutes.inProcess}
          to={RoutesConstants.SERIES.subRoutes.inProcess}
          components={{ Root: Link }}>
          In process
        </Tab>
        <Tab
          value={RoutesConstants.SERIES.subRoutes.finished}
          to={RoutesConstants.SERIES.subRoutes.finished}
          components={{ Root: Link }}>
          Finished
        </Tab>
        <Tab
          value={RoutesConstants.SERIES.subRoutes.forFuture}
          to={RoutesConstants.SERIES.subRoutes.forFuture}
          components={{ Root: Link }}>
          For future
        </Tab>{' '}
        <Tab
          value={RoutesConstants.SERIES.subRoutes.waitingForSeason}
          to={RoutesConstants.SERIES.subRoutes.waitingForSeason}
          components={{ Root: Link }}>
          Waiting for season
        </Tab>{' '}
        <Tab
          value={RoutesConstants.SERIES.subRoutes.redundant}
          to={RoutesConstants.SERIES.subRoutes.redundant}
          components={{ Root: Link }}>
          Redundant
        </Tab>
      </TabsList>
    </TabsUnstyled>
  );
};

export default SeriesTabs;
