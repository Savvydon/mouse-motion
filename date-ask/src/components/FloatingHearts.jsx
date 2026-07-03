import React, { useState, useEffect } from 'react';
import { HeartFill } from 'react-bootstrap-icons';

const FloatingHearts = ({ count = 15, interval = 800 }) => {
  const [hearts, setHearts] = useState([]);

  useEffect(() => {
    const timer = setInterval(() => {
      setHearts(prev => {
        const newHeart = {
          id: Date.now(),
          left: Math.random() * 100,
          size: Math.random() * 20 + 15,
          duration: Math.random() * 3 + 4,
          delay: Math.random() * 2,
          opacity: Math.random() * 0.4 + 0.3
        };
        return [...prev, newHeart].slice(-count);
      });
    }, interval);

    return () => clearInterval(timer);
  }, [count, interval]);

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      pointerEvents: 'none',
      overflow: 'hidden',
      zIndex: 0
    }}>
      {hearts.map(heart => (
        <div
          key={heart.id}
          style={{
            position: 'absolute',
            left: `${heart.left}%`,
            bottom: '-50px',
            fontSize: `${heart.size}px`,
            color: `rgba(255, 107, 129, ${heart.opacity})`,
            animation: `floatUp ${heart.duration}s ease-in ${heart.delay}s forwards`,
          }}
        >
          <HeartFill />
        </div>
      ))}
    </div>
  );
};

export default FloatingHearts;