import React from 'react';
import "./card.css";

export const Card = ({number,text,Icon,color,progerss}) => {
  return (
      <div className = {`d-flex justify-content-around align-items-center card_wrapper px-4 py-4 border border-top-0 border-right-0 border-bottom-0 border-${color}`}>
          <div className='d-flex flex-column'>
              <p className={`mb-0 text-${color} card_text`}>{text}</p>
              <p className='mb-0  card_number text-secondary'>{number}</p>
          </div>
          {Icon && <Icon className="card_icon"/>}
    </div>
  )
}
