import React, { useState, useEffect } from 'react';

const Confetti = ({ particleCount = 50 }) => {
  const [confetti, setConfetti] = useState([]);
  const colors = ['#ff6b81', '#feca57', '#48dbfb', '#ff9ff3', '#54a0ff', '#5f27cd', '#00d2d3', '#ff9f43'];

  useEffect(() => {
    const newConfetti = Array.from({ length: particleCount }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      color: colors[Math.floor(Math.random() * colors.length)],
      size: Math.random() * 10 + 5,
      duration: Math.random() * 3 + 2,
      delay: Math.random() * 2,
      isCircle: Math.random() > 0.5
    }));
    setConfetti(newConfetti);
  }, [particleCount]);

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
      {confetti.map(c => (
        <div
          key={c.id}
          style={{
            position: 'absolute',
            left: `${c.left}%`,
            top: '-20px',
            width: `${c.size}px`,
            height: `${c.size}px`,
            backgroundColor: c.color,
            borderRadius: c.isCircle ? '50%' : '0',
            animation: `confettiFall ${c.duration}s ease-out ${c.delay}s forwards`,
            transform: `rotate(${Math.random() * 360}deg)`
          }}
        />
      ))}
    </div>
  );
};

export default Confetti;