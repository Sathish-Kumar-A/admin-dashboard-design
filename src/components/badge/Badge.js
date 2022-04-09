import React from 'react';
import "./badge.css";

export const Badge = ({count}) => {
  return (
      <div className='rounded-circle badge'>{count}</div>
  )
}
