import React from 'react';
import { BiSearch } from "react-icons/bi";
import { IoMdNotifications } from "react-icons/io";
import { HiMail } from "react-icons/hi";
import { Profile } from '../profile/Profile';
import { Badge } from '../badge/Badge';
import "./header.css";

export const Header = () => {
    const name = "sathish kumar";
    const count = 5;
    const img ="https://pbs.twimg.com/profile_images/1507710778442682372/oph2HWZC.jpg";
  return (
      <div className='header_wrapper d-flex align-items-center justify-content-between'>
          <div className = 'd-flex py-3 mx-4 left_header'>
              <input className='form-control' placeholder='search for...'/>
              <BiSearch className='search_icon'/>
          </div>
          <div className = 'right-header d-flex'>
              <div className='header_separator d-flex'>
                  <div className='icon'>
                      <IoMdNotifications className='notify_icon' />
                      <Badge count={count}/>
                  </div>
                  <div className='icon'>
                      <HiMail className='notify_icon1' />
                      <Badge count={count}/>
                  </div>
              </div>
              <Profile name={name} image={img}/>
          </div>
    </div>
  )
}
