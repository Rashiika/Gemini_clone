import React, { useState } from 'react';
import TopBar from './components/TopBar/TopBar.jsx';
import Chat from './components/Chat/Chat.jsx';
import './App.css';

function App() {
   const [selectedModel, setSelectedModel] = useState("gemini-1.5-flash");

  return (
     <div className="app-layout">
      <TopBar selectedModel={selectedModel} setSelectedModel={setSelectedModel} />
      <Chat selectedModel={selectedModel} />
    </div>
  );
}

export default App;