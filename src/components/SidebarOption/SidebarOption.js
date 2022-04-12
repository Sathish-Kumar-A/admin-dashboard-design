import React from 'react';
import "./sideoption.css";
import { useNavigate } from 'react-router-dom';


export const SidebarOption = ({ isActive, text, setActive, Icon, redirectTo }) => {
  const navigate = useNavigate();
  const clickAction = () => {
    setActive(text);
    navigate(redirectTo);
  }
    return (
      <div>
            <div
                onClick={clickAction}
                className={`${isActive ? "active_text" : "text-muted"} sideoption`}>
                {Icon && <Icon className="mx-2"/>}
                    <p className="mb-0">{text}</p>
            </div>
            <hr />
      </div>

  )
}
