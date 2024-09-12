import React, { useState } from 'react';
import { TextField, Button, Box, Typography, Link } from '@mui/material';
import { AuthService } from '../../axios/Auth';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { useContext } from 'react';

const Login = ({ onSwitchToSignup }) => {
  const [errorMessage, setErrorMessage] = useState('');
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const navigate = useNavigate();
  const authService = new AuthService(); 
  const { setIsLoggedIn } = useContext(AuthContext);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleLogin = async(e) => {
    e.preventDefault();
    try {
      const session = await authService.login(formData)
      console.log("session", session)
      if(session){
          console.log("User logged in successfully")
          setIsLoggedIn(true);
          navigate('/')
      }
    } catch (error) {
        setIsLoggedIn(false);
        setErrorMessage('Failed to login. Please try again.');
        throw error;
    }
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

      {errorMessage && (
        <Typography variant="body2" color="error" textAlign="center" mb={2}>
          {errorMessage}
        </Typography>
      )}

      <TextField
        label="Email"
        type="email"
        name="email"
        fullWidth
        margin="normal"
        value={formData.email}
        onChange={handleInputChange}
        required
      />
      <TextField
        label="Password"
        type="password"
        name="password"
        fullWidth
        margin="normal"
        value={formData.password}
        onChange={handleInputChange}
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
