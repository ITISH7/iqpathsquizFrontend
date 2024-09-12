import React, { useState } from 'react';
import { TextField, Button, Box, Typography, Link } from '@mui/material';
import { AuthService } from '../../axios/Auth';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { useContext } from 'react';
import axios from 'axios';

const Sign = ({ onSwitchToLogin }) => {

  const { setIsLoggedIn } = useContext(AuthContext);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    mobileNo: ''
  });
  const [mobileNo, setMobileNo] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const navigate = useNavigate();
  const authService = new AuthService(); 

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSignup = async(e) => {
    e.preventDefault();
    try {
        const userData = await authService.createAccount(formData);
        if(userData){
            console.log("User account created successfully")
            setIsLoggedIn(true);
            navigate('/')
        }
    } catch (error) {
        setIsLoggedIn(false);
        setErrorMessage('Failed to create account. Please try again.');
        throw error;
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSignup}
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
      <Typography variant="h5" mb={2} textAlign="center">Signup</Typography>

      {errorMessage && (
        <Typography variant="body2" color="error" textAlign="center" mb={2}>
          {errorMessage}
        </Typography>
      )}


      <TextField
        label="Name"
        type="text"
        name="name"
        fullWidth
        margin="normal"
        value={formData.name}
        onChange={handleInputChange}
        required
      />
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
      <TextField
        label="Mobile Number"
        type="tel"
        name="mobileNo"
        fullWidth
        margin="normal"
        value={formData.mobileNo}
        onChange={handleInputChange}
        required
      />
      <Button
        type="submit"
        variant="contained"
        fullWidth
        sx={{ mt: 2, mb: 2 }}
      >
        Signup
      </Button>
      <Typography variant="body2" textAlign="center">
        Already have an account? <Link href="/login" onClick={onSwitchToLogin}>Login here</Link>
      </Typography>
    </Box>
  );
};

export default Sign;