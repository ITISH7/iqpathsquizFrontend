import React from 'react';
import { Link } from 'react-router-dom';

// 404 Error Page Component
const NotFoundPage = () => {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#f8f8f8',
    color: '#333',
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center',
    padding: '20px'
  };

  const titleStyle = {
    fontSize: '72px',
    fontWeight: 'bold',
    color: '#9069E7',
    marginBottom: '20px',
  };

  const subtitleStyle = {
    fontSize: '24px',
    color: '#555',
    marginBottom: '40px',
  };

  const homeButtonStyle = {
    backgroundColor: '#6F4EB9',
    color: '#fff',
    padding: '12px 30px',
    borderRadius: '5px',
    fontSize: '16px',
    border: 'none',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  };

  const homeButtonHoverStyle = {
    backgroundColor: '#4B0082',
  };

  const [isHovered, setHovered] = React.useState(false);

  

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>404</h1>
      <p style={subtitleStyle}>Oops! The page you're looking for doesn't exist.</p>
      <Link to="/">
      <button
        style={isHovered ? { ...homeButtonStyle, ...homeButtonHoverStyle } : homeButtonStyle}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        Go Back Home
      </button>
      </Link>
    </div>
  );
};

export default NotFoundPage;
