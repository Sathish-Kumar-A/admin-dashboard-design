import React from 'react';
import "./profile.css";

export const Profile = ({name,image}) => {
  return (
      <div className='d-flex align-items-center'>
          <p className='mb-0'>{name}</p>
          <img className="rounded-circle profile_img mx-3" src={image}/>
      </div>
  )
}
