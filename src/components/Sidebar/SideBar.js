import React, { useState } from 'react';
import { FaSmileWink } from "react-icons/fa";
import { AiOutlineDashboard } from "react-icons/ai";
import {AiOutlineAreaChart} from "react-icons/ai";

import { SidebarOption } from '../SidebarOption/SidebarOption';
import "./sidebar.css";

const SideBar = () => {
  const [active, setActive] = useState("Dashboard");
  return (
      <div className="wrapper">
      <div className="inner_wrapper">
        <div className="logo_text d-flex align-items-center justify-content-center">
          <FaSmileWink className='smiley mt-3'/>
          <h5 className='mt-3'>SB ADMIN<sup className='mx-2'>2</sup></h5>
        </div>
          <hr />
        <SidebarOption
          text="Dashboard"
          isActive={active === "Dashboard"}
          setActive={setActive}
          Icon={AiOutlineDashboard}
        />
        <SidebarOption
          text="Chart"
          isActive={active === "Chart"}
          setActive={setActive}
          Icon={AiOutlineAreaChart}
        />
        </div>
    </div>
  )
}

export default SideBar