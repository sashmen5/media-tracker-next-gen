import React from 'react';

import Sheet from '@mui/joy/Sheet';
import Typography from '@mui/joy/Typography';
import TextField from '@mui/joy/TextField';
import Button from '@mui/joy/Button';

const LoginPage = () => {
  return (
    <div>
      <Sheet
        variant="soft"
        sx={{
          maxWidth: 400,
          mx: 'auto', // margin left & right
          my: 'auto', // margin top & botom
          py: 3, // padding top & bottom
          px: 2, // padding left & right
          display: 'flex',
          flexDirection: 'column',
          gap: 2
        }}>
        <div>
          <Typography sx={{ mb: 4 }} textAlign="center" level="h3" component="h1">
            <b>Welcome!</b>
          </Typography>
          <TextField sx={{ mb: 3 }} name="email" type="email" placeholder="johndoe@email.com" label="Email" />
          <TextField sx={{ mb: 3 }} name="password" type="password" placeholder="password" label="Password" />
        </div>
        <Sheet
          variant="soft"
          sx={{
            px: 6,
            display: 'flex'
          }}>
          <Button fullWidth>Log in</Button>
        </Sheet>
      </Sheet>
    </div>
  );
};

export default LoginPage;
