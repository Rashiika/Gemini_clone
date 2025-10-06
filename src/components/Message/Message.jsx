
import React from 'react';
import ReactMarkdown from 'react-markdown';
import './Message.css'; 
import { FaUser, FaRobot } from 'react-icons/fa'; 
import geminiIcon from '../../assets/gemini-icon.png'; 

const Message = ({ role, text }) => {
  const isUser = role === 'user';

  return (
    <>

    <div className={`message-wrapper ${isUser ? 'user-message' : 'bot-message'}`}>
        {!isUser && (
        <img src={geminiIcon} alt="Gemini" className="gemini-icon" />
      )}
      
      <div className="message-content">
        {isUser ? (
          <p>{text}</p>
        ) : (
         
          <ReactMarkdown>{text}</ReactMarkdown>
        )}
      </div>
    </div>
    </>
  );
};

export default Message;