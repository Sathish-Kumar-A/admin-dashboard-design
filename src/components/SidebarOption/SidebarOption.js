import React from 'react';
import "./sideoption.css";


export const SidebarOption = ({isActive,text,setActive,Icon}) => {
    return (
      <div>
            <div
                onClick={() => setActive(text)}
                className={`${isActive ? "active_text" : "text-muted"} sideoption`}>
                {Icon && <Icon className="mx-2"/>}
                    <p className="mb-0">{text}</p>
            </div>
            <hr />
      </div>

  )
}
