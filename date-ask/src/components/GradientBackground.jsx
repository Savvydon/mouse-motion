import React from 'react';
import { Container } from 'react-bootstrap';

const GradientBackground = ({ 
  children, 
  gradient = 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)',
  className = ''
}) => (
  <Container 
    fluid 
    className={`d-flex align-items-center justify-content-center min-vh-100 position-relative overflow-hidden ${className}`}
    style={{ background: gradient }}
  >
    {children}
  </Container>
);

export default GradientBackground;