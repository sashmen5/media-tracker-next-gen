import * as React from 'react';

import AppRoutes from './routing/AppRoutes.component';
import ThemeProvider from './app/theme/ThemeProvider.component';

function App() {
  return (
    <ThemeProvider>
      <AppRoutes />
    </ThemeProvider>
  );
}

export default App;

//============================ App Drawer =============================
