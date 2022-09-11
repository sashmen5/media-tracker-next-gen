import React, { PropsWithChildren } from 'react';

import { CssVarsProvider } from '@mui/joy/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeConstants } from './theme.constants';

const ThemeProvider = ({ children }: PropsWithChildren) => {
  return (
    <CssVarsProvider theme={ThemeConstants.theme}>
      <CssBaseline />
      {children}
    </CssVarsProvider>
  );
};

export default ThemeProvider;
