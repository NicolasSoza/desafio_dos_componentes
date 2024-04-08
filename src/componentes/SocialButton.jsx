// SocialButton.jsx
import React from 'react';

function SocialButton({ icon }) {
  return (
    <button>
      <i className={`fab ${icon}`} />
    </button>
  );
}

export default SocialButton;
