import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Badge } from 'react-bootstrap';
import { HeartFill, BalloonHeartFill, Stars } from 'react-bootstrap-icons';

import GradientBackground from '../components/GradientBackground';
import GlassCard from '../components/GlassCard';
import FloatingHearts from '../components/FloatingHearts';
import Confetti from '../components/Confetti';
import AnimatedEmoji from '../components/AnimatedEmoji';
import GlobalStyles from '../components/GlobalStyles';

const SuccessPage = () => {
  const navigate = useNavigate();

  const handleReset = () => {
    navigate('/');
  };

  return (
    <GradientBackground
      gradient="linear-gradient(135deg, #f093fb 0%, #f5576c 50%, #ffd93d 100%)"
    >
      <GlobalStyles />
      <Confetti particleCount={50} />
      <FloatingHearts />

      <GlassCard animation="scaleIn">
        <AnimatedEmoji 
          icon={BalloonHeartFill} 
          size="5rem" 
          color="text-danger"
          animation="bounce"
        />

        <h1 
          className="mb-3 fw-bold"
          style={{
            background: 'linear-gradient(45deg, #f5576c, #f093fb)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontSize: 'clamp(1.8rem, 5vw, 2.5rem)'
          }}
        >
          Congratulations!
        </h1>

        <div 
          className="mb-4 p-3 rounded-3"
          style={{
            background: 'linear-gradient(135deg, rgba(245, 87, 108, 0.1), rgba(240, 147, 251, 0.1))',
            border: '2px dashed #f5576c'
          }}
        >
          <h3 className="fw-bold mb-2" style={{ color: '#e84393' }}>
            <HeartFill className="me-2" style={{ animation: 'pulse 1s infinite' }} />
            You Will Be Going Out With Me!
            <HeartFill className="ms-2" style={{ animation: 'pulse 1s infinite' }} />
          </h3>
        </div>

        <p className="text-muted fs-5 mb-4">
          I knew you'd say yes!
          <span className="d-block mt-2">Can't wait for our date! </span>
        </p>

        <div className="d-flex justify-content-center gap-3 mb-4 flex-wrap">
          <Badge bg="danger" className="px-3 py-2 fs-6">
            <HeartFill className="me-1" /> Love Level: 100%
          </Badge>
          <Badge bg="warning" text="dark" className="px-3 py-2 fs-6">
            <Stars className="me-1" /> Excitement: Max
          </Badge>
        </div>

        <Button
          variant="outline-primary"
          size="lg"
          className="rounded-pill px-4"
          onClick={handleReset}
          style={{
            borderWidth: '2px',
            fontWeight: '600'
          }}
        >
          Ask Again
        </Button>
      </GlassCard>
    </GradientBackground>
  );
};

export default SuccessPage;