import React from 'react';
import './BackDrop.css';

const BackDrop = ({show, setShowOrderModal}) => (
  show ? <div className="BackDrop" onClick={() => setShowOrderModal(false)}/> : null
);

export default BackDrop;
