import React, { useState } from 'react';
import { TextField, Button, Box, Typography, Link } from '@mui/material';

const Login = ({ onSwitchToSignup }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Perform login logic here
  };

  return (
    <Box
      component="form"
      onSubmit={handleLogin}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        maxWidth: 400,
        margin: 'auto',
        padding: 3,
        boxShadow: 3,
        borderRadius: 2,
      }}
    >
      <Typography variant="h5" mb={2} textAlign="center">Login</Typography>
      <TextField
        label="Email"
        type="email"
        fullWidth
        margin="normal"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <TextField
        label="Password"
        type="password"
        fullWidth
        margin="normal"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <Button
        type="submit"
        variant="contained"
        fullWidth
        sx={{ mt: 2, mb: 2 }}
      >
        Login
      </Button>
      <Typography variant="body2" textAlign="center">
        Don't have an account? <Link href="/signup" onClick={onSwitchToSignup}>Sign up here</Link>
      </Typography>
    </Box>
  );
};

export default Login;
