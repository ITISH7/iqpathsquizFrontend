import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthService } from "../../axios/Auth";
import { AuthContext } from "../../context/AuthContext";
import * as Components from './login.js';
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from './login.module.css';

const Log = ({ onSwitchToSignup }) => {
  const [errorMessage, setErrorMessage] = useState("");
  const [signIn, toggle] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    mobileNo: ''
  });
  

  const navigate = useNavigate();
  const authService = new AuthService();
  const { setIsLoggedIn, setUserId, setUser } = useContext(AuthContext);

  useEffect(() => {
    // Hide the footer when this component mounts
    const footer = document.querySelector("footer");
    if (footer) footer.style.display = "none";

    // Show the footer when this component unmounts
    return () => {
      if (footer) footer.style.display = "block";
    };
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const session = await authService.login(formData);
      setUser(session.data.data);
      localStorage.setItem("user", JSON.stringify(session.data.data));
      const ID = session.data.data._id;
      setUserId(ID);
      console.log("current user id is ", ID);
      if (session) {
        setIsLoggedIn(true);
        loginPopup()
        navigate("/");
      }
    } catch (error) {
      setIsLoggedIn(false);
      loginFailedPopup()
      setErrorMessage("Failed to login. Please try again.");
      console.log(error);
    }
  };

  
  const handleSignup = async(e) => {
    e.preventDefault();
    try {
        const userData = await authService.createAccount(formData);
        setUser(userData.data.data);
        localStorage.setItem('user', JSON.stringify(userData.data.data));
        const ID = userData.data.data._id;
        console.log("current user id is ", ID);
        setUserId(ID);
        if(userData){
          console.log("User account created successfully")
          setIsLoggedIn(true);
          signupPopup()
          navigate('/')
        }
    } catch (error) {
        setIsLoggedIn(false);
        signupFailedPopup()
        setErrorMessage('Failed to create account. Please try again.');
        throw error;
    }
  };

  //--------------------------------------------------------------popup for login and signup--------------------------------------------------------------

  //logged in successful popup
  const loginPopup = () => {
    toast.success('Login Successful', {
      position: "top-right",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "light",
      className: 'customToast',
    });
  };

  //login failed popup
  const loginFailedPopup = () => {
    toast.error('Login Failed', {
      position: "top-right",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "light",
      className: 'customToast',
    });
  };

  //signup successful popup
  const signupPopup = () => {
    toast.success('Signup Successful', {
      position: "top-right",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "light",
      className: 'customToast',
    });
  };

  //signup failed popup
  const signupFailedPopup = () => {
    toast.error('Signup Failed', {
      position: "top-right",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "light",
      className: 'customToast',
    });
  };

  return (
    <Components.Container>
      <Components.SignUpContainer signinIn={signIn}>
        <Components.Form onSubmit={handleSignup}>
          <Components.Title>Create Account</Components.Title>

          {/* {errorMessage && (
          <Components.ErrorMessage>{errorMessage}</Components.ErrorMessage>
        )}
   */}
          <Components.Input
            type="text"
            placeholder="Name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
          <Components.Input
            type="email"
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
          <Components.Input
            type="password"
            placeholder="Password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
          <Components.Input
            type="tel"
            placeholder="Mobile Number"
            name="mobileNo"
            value={formData.mobileNo}
            onChange={handleInputChange}
            required
          />

          <Components.Button type="submit">Sign Up</Components.Button>
        </Components.Form>
      </Components.SignUpContainer>

      <Components.SignInContainer signinIn={signIn}>
        <Components.Form onSubmit={handleLogin}>
          <Components.Title>Sign in</Components.Title>

          {errorMessage && (
            <Components.ErrorMessage>{errorMessage}</Components.ErrorMessage>
          )}

          <Components.Input
            type="email"
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
          <Components.Input
            type="password"
            placeholder="Password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
          <Components.Anchor href="#">Forgot your password?</Components.Anchor>
          <Components.Button type="submit">Sign In </Components.Button>
          <button className={styles.googleButton}>
            <img
              src="src/assets/googleLogo.png"
              alt="Google Logo"
              className={styles.googleLogo}
            />
            Sign in with Google
          </button>
        </Components.Form>
      </Components.SignInContainer>

      <Components.OverlayContainer signinIn={signIn}>
        <Components.Overlay signinIn={signIn}>
          <Components.LeftOverlayPanel signinIn={signIn}>
            <Components.Title>Welcome Back!</Components.Title>
            <Components.Paragraph>
              To keep connected with us, please login with your personal info
            </Components.Paragraph>
            <Components.GhostButton onClick={() => toggle(true)}>
              Sign In
            </Components.GhostButton>
            <button className={styles.googleButton}>
            <img
              src="src/assets/googleLogo.png"
              alt="Google Logo"
              className={styles.googleLogo}
            />
            Sign up with Google
          </button>
          </Components.LeftOverlayPanel>

          <Components.RightOverlayPanel signinIn={signIn}>
            <Components.Title>Hello, Friend!</Components.Title>
            <Components.Paragraph>
              Enter your personal details and start your journey with us
            </Components.Paragraph>
            <Components.GhostButton onClick={() => toggle(false)}>
              Sign Up
            </Components.GhostButton>
            
          </Components.RightOverlayPanel>
        </Components.Overlay>
      </Components.OverlayContainer>
    </Components.Container>
  );
};

export default Log;
