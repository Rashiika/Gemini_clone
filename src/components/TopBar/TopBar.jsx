import { useState } from "react";
import ModelSelector from "../Dropdown/Dropdown";
import './TopBar.css'; 

const TopBar = ({ selectedModel, setSelectedModel }) => {
  return (
    <div className="topbar " >
      
      <div className="topbar-left">
        <span className="topbar-title">Gemini</span>
        <ModelSelector 
          selectedModel={selectedModel} 
          setSelectedModel={setSelectedModel} 
        />
      </div>

     
      <div className="topbar-right">
        <button className="upgrade-btn">Upgrade</button>
        <div className="user-avatar">R</div>
      </div>
    </div>
  );
};

export default TopBar;
