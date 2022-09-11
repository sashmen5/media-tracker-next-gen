import Sheet from '@mui/joy/Sheet';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import BottomNavigation from '@mui/material/BottomNavigation';
import { RoutesConstants } from '../../routing/routes.constants';
import { Link, useLocation } from 'react-router-dom';

const AvailableRoutes: string[] = [
  RoutesConstants.MOVIES.default,
  RoutesConstants.SERIES.default,
  RoutesConstants.SEARCH
];

export const BottomRoutes = () => {
  const location = useLocation();
  const indexValue = AvailableRoutes.indexOf(location.pathname);

  return (
    <Sheet
      sx={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        boxShadow: 'lg'
      }}>
      <BottomNavigation showLabels value={indexValue}>
        <BottomNavigationAction
          to={RoutesConstants.MOVIES.default}
          component={Link}
          label="Movies"
          icon={<RestoreIcon />}
        />
        <BottomNavigationAction
          to={RoutesConstants.SERIES.default}
          component={Link}
          label="Series"
          icon={<FavoriteIcon />}
        />
        <BottomNavigationAction
          to={RoutesConstants.SEARCH}
          component={Link}
          label="Search"
          icon={<LocationOnIcon />}
        />
      </BottomNavigation>
    </Sheet>
  );
};
