import React from 'react'
import { Header } from '../header/Header';
import { Card } from "../card/Card";
import { ImDownload3 } from "react-icons/im";
import { FaDollarSign } from "react-icons/fa";
import { CgNotes } from "react-icons/cg";
import { IoIosChatbubbles } from "react-icons/io";
import { BsFillCalendarFill } from "react-icons/bs";
import "./dashboard.css";

export const Dashboard = () => {
  return (
      <div className='dash_wrapper'>
        <Header />

      <div className = ' d-flex justify-content-between align-items-center my-3 mx-3'>
        <p className='dashboard_text'>Dashboard</p>
        <button className='btn btn-primary'>
          <ImDownload3 className='text-secondary mx-2'/>
          Generate Report
        </button>
      </div>

      <div className='dash_cards d-flex justify-content-around'>
        <Card
          number="$40,000"
          text="EARNINGS (MONTHLY)"
          color="primary"
          Icon={BsFillCalendarFill}
          progress={false}
        />
        <Card
          number="$215,000"
          text="EARNINGS (ANNUAL)"
          color="success"
          Icon={FaDollarSign}
          progress={false}
        />
        <Card
          number="50%"
          text="TASKS"
          color="info"
          Icon={CgNotes}
          progress={true}
        />
        <Card
          number="18"
          text="PENDING REQUESTS"
          color="warning"
          Icon={IoIosChatbubbles}
          progress={false}
        />
      </div>
    </div>
  )
}
