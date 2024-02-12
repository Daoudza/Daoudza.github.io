// Button.js
import React from 'react';

export default function Button({ text, onClick, backgroundColor }) {
  return (
    <button
      onClick={onClick}
      style={{ backgroundColor: backgroundColor }}
    >
      {text}
    </button>
  );
}
