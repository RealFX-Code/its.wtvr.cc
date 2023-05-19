import React from 'react';
import './FullScreenContainer.css'; // Add CSS styles for the container

const FullScreenContainer = ({ children }) => {
  return (
    <div className="full-screen-container">
      <div className="centered-content">
        {children}
      </div>
    </div>
  );
};

export default FullScreenContainer;