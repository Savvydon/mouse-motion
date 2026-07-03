import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { HeartFill, EmojiSmileFill, Stars } from 'react-bootstrap-icons';

import GradientBackground from '../components/GradientBackground';
import GlassCard from '../components/GlassCard';
import FloatingHearts from '../components/FloatingHearts';
import AnimatedEmoji from '../components/AnimatedEmoji';
import DodgeCounter from '../components/DodgeCounter';
import GlobalStyles from '../components/GlobalStyles';
import useNoButtonDodge from '../hooks/useNoButtonDodge';

const QuestionPage = () => {
  const navigate = useNavigate();
  
  const {
    isFloating,
    gridStyles,
    dodgeCount,
    showHint,
    handlers
  } = useNoButtonDodge();

  const handleYesClick = () => {
    navigate('/success');
  };

  return (
    <GradientBackground
      gradient="linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)"
    >
      <GlobalStyles />
      <FloatingHearts />
      
      <div className="w-100 d-flex justify-content-center">
        <GlassCard>
          <AnimatedEmoji 
            icon={EmojiSmileFill} 
            size="4rem" 
            color="text-warning"
            animation="bounce"
          />

          <h1 
            className="mb-4 fw-bold"
            style={{
              background: 'linear-gradient(45deg, #667eea, #764ba2)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontSize: 'clamp(1.8rem, 5vw, 2.5rem)'
            }}
          >
            Will You Be My Captain And Let's On Hotspot?
          </h1>

          <p className="text-muted mb-5 fs-5">
            What's your thought on it...
            <span className="d-block mt-2" style={{ fontSize: '0.9rem' }}>
              <HeartFill 
                className="text-danger me-1" 
                style={{ animation: 'pulse 1.5s infinite' }} 
              />
              Choose wisely!
            </span>
          </p>

          <div 
            className="position-relative"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gridTemplateRows: 'repeat(5, 60px)',
              gap: '8px',
              minHeight: '300px',
              placeItems: 'center',
              position: 'relative'
            }}
          >
            <div style={{ gridColumn: '2 / 4', gridRow: '2 / 4', zIndex: 10 }}>
              <YesButton onClick={handleYesClick} />
            </div>

            <NoButton 
              isFloating={isFloating}
              gridStyles={gridStyles}
              handlers={handlers}
            />

            {showHint && (
              <div 
                style={{ 
                  gridColumn: '1 / -1', 
                  gridRow: '5',
                  animation: 'fadeIn 1s ease',
                  textAlign: 'center'
                }}
                className="text-muted fst-italic"
              >
                <small>
                  <Stars className="me-1 text-warning" />
                  Hmm... seems like the "No" button doesn't want to be clicked!
                  <Stars className="ms-1 text-warning" />
                </small>
              </div>
            )}

            <div style={{ gridColumn: '1 / -1', gridRow: '5', marginTop: '30px' }}>
              <DodgeCounter count={dodgeCount} />
            </div>
          </div>
        </GlassCard>
      </div>
    </GradientBackground>
  );
};

const YesButton = ({ onClick }) => {
  const handleMouseEnter = (e) => {
    e.target.style.transform = 'scale(1.1)';
    e.target.style.boxShadow = '0 15px 40px rgba(17, 153, 142, 0.6)';
  };

  const handleMouseLeave = (e) => {
    e.target.style.transform = 'scale(1)';
    e.target.style.boxShadow = '0 10px 30px rgba(17, 153, 142, 0.4)';
  };

  return (
    <Button
      variant="success"
      size="lg"
      className="px-5 py-3 fw-bold border-0"
      onClick={onClick}
      style={{
        background: 'linear-gradient(45deg, #11998e, #38ef7d)',
        borderRadius: '50px',
        fontSize: '1.3rem',
        boxShadow: '0 10px 30px rgba(17, 153, 142, 0.4)',
        transition: 'all 0.3s ease',
        whiteSpace: 'nowrap'
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <HeartFill className="me-2" />
      Yes
    </Button>
  );
};

const NoButton = ({ isFloating, gridStyles, handlers }) => {
  if (!isFloating) {
    return (
      <Button
        variant="danger"
        size="lg"
        className="px-5 py-3 fw-bold border-0"
        style={{
          background: 'linear-gradient(45deg, #eb3349, #f45c43)',
          borderRadius: '50px',
          fontSize: '1.3rem',
          boxShadow: '0 10px 30px rgba(235, 51, 73, 0.4)',
          cursor: 'not-allowed',
          transition: 'all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
          whiteSpace: 'nowrap'
        }}
        {...handlers}
      >
        No
      </Button>
    );
  }

  return (
    <Button
      variant="danger"
      size="lg"
      className="fw-bold border-0"
      style={{
        ...gridStyles,
        width: '100%',
        maxWidth: '140px',
        height: '50px',
        padding: '0',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(45deg, #eb3349, #f45c43)',
        borderRadius: '50px',
        fontSize: '1.1rem',
        boxShadow: '0 10px 30px rgba(235, 51, 73, 0.4)',
        cursor: 'not-allowed',
        transition: 'all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        zIndex: 100,
        whiteSpace: 'nowrap'
      }}
      {...handlers}
    >
      No
    </Button>
  );
};

export default QuestionPage;