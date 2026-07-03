import React from 'react';

const AnimatedEmoji = ({ 
  icon: Icon, 
  size = '4rem', 
  color = 'text-warning',
  animation = 'bounce',
  className = ''
}) => (
  <div 
    className={`mb-4 ${className}`} 
    style={{ 
      fontSize: size, 
      animation: `${animation} 2s infinite`,
      display: 'inline-block'
    }}
  >
    <Icon className={color} />
  </div>
);

export default AnimatedEmoji;