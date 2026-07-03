// import React from 'react';
// import { Card, Row, Col } from 'react-bootstrap';

// const GlassCard = ({ 
//   children, 
//   animation = 'fadeIn',
//   className = '',
//   bodyClassName = ''
// }) => (
//   <Row className="justify-content-center w-100 position-relative" style={{ zIndex: 1 }}>
//     <Col xs={11} sm={10} md={8} lg={6} xl={5}>
//       <Card 
//         className={`border-0 shadow-lg text-center ${className}`}
//         style={{
//           background: 'rgba(255, 255, 255, 0.95)',
//           backdropFilter: 'blur(10px)',
//           borderRadius: '24px',
//           padding: '20px',
//           animation: animation === 'scaleIn' ? 'scaleIn 0.8s ease-out' : 'none'
//         }}
//       >
//         <Card.Body className={`p-4 p-md-5 ${bodyClassName}`}>
//           {children}
//         </Card.Body>
//       </Card>
//     </Col>
//   </Row>
// );

// export default GlassCard;
import React, { forwardRef } from 'react';
import { Card, Row, Col } from 'react-bootstrap';

const GlassCard = forwardRef(({ 
  children, 
  animation = 'fadeIn',
  className = '',
  bodyClassName = ''
}, ref) => (
  <Row className="justify-content-center w-100 position-relative" style={{ zIndex: 1 }}>
    <Col xs={11} sm={10} md={8} lg={6} xl={5}>
      <Card 
        ref={ref}
        className={`border-0 shadow-lg text-center ${className}`}
        style={{
          background: 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(10px)',
          borderRadius: '24px',
          padding: '20px',
          animation: animation === 'scaleIn' ? 'scaleIn 0.8s ease-out' : 'none',
          position: 'relative', // Important: establishes positioning context
          overflow: 'visible'  // Allow button to be visible (but we'll constrain it)
        }}
      >
        <Card.Body className={`p-4 p-md-5 ${bodyClassName}`}>
          {children}
        </Card.Body>
      </Card>
    </Col>
  </Row>
));

export default GlassCard;