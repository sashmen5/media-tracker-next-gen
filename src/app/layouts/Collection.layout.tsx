import React, { ReactNode } from 'react';
import { Outlet } from 'react-router-dom';

import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';

import { DrawerHeader } from '../../base/drawer/DrawerHeader.component';
import Sidebar from '../../app/sidebar/Sidebar.component';
import { Header } from '../../base/header/header.component';
import { BottomRoutes } from '../bottom-navigation/BottomNavigation.component';

interface Props {
  tabs: ReactNode;
}

export const CollectionLayout = ({ tabs }: Props) => {
  const [open, setOpen] = React.useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <Sidebar open={open} close={handleDrawerClose} />
      <Header position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: 'none' })
            }}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Mini variant drawer after commit
          </Typography>
        </Toolbar>
      </Header>

      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        {tabs}
        <Outlet />
        <BottomRoutes />
      </Box>
    </Box>
  );
};
