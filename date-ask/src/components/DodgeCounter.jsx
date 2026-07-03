import React from 'react';
import { Badge } from 'react-bootstrap';

const DodgeCounter = ({ count }) => {
  if (count <= 0) return null;

  return (
    <div className="mt-3" style={{ animation: 'fadeIn 0.5s ease' }}>
      <Badge bg="warning" text="dark" className="px-3 py-2 fs-6">
        Dodged: {count} time{count !== 1 ? 's' : ''}
      </Badge>
    </div>
  );
};

export default DodgeCounter;