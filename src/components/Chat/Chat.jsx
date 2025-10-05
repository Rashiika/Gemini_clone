
import React, { useState } from 'react';
import Message from '../Message/Message.jsx';
import { generateContent } from '../../api/gemini.js';
import { IoSend } from 'react-icons/io5';
import './Chat.css'; 

function Chat() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = { role: 'user', text: input.trim() };
   
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
     
      const aiResponseText = await generateContent(userMessage.text);
      const botMessage = { role: 'bot', text: aiResponseText };
      
     
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      const errorMessage = { role: 'bot', text: 'Error: Failed to get response from AI.' };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="chat-container">
      
      <div className="chat-history">
        {messages.length === 0 ? (
          <div className="welcome-message">
            <h1>Hello, I am a Gemini Clone!</h1>
            <p>Ask me anything to start a conversation.</p>
          </div>
        ) : (
          messages.map((msg, index) => (
            <Message key={index} role={msg.role} text={msg.text} />
          ))
        )}
        
        {isLoading && <Message role="bot" text="Thinking..." />}
      </div>

     
      <form onSubmit={handleSubmit} className="chat-input-form">
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter a prompt here..."
          rows="1"
          disabled={isLoading}
        />
        <button type="submit" disabled={isLoading}>
          <IoSend size={24} />
        </button>
      </form>
    </div>
  );
}

export default Chat;