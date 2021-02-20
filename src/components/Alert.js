import React from 'react';

function Alert({ content, type }) {
  return (
    <div className={`alert alert-${type}`} role="alert">
      {content}
    </div>
  );
}

export default Alert;