
import React from 'react';
import ReactMarkdown from 'react-markdown';
import './Message.css'; 
import { FaUser, FaRobot } from 'react-icons/fa'; 

const Message = ({ role, text }) => {
  const isUser = role === 'user';
  const icon = isUser ? <FaUser /> : <FaRobot />;
  const className = isUser ? 'user-message' : 'bot-message';

  return (
    <div className={`message-container ${className}`}>
      <div className="message-icon">{icon}</div>
      <div className="message-content">
        {isUser ? (
          <p>{text}</p>
        ) : (
         
          <ReactMarkdown>{text}</ReactMarkdown>
        )}
      </div>
    </div>
  );
};

export default Message;