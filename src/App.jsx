import { useState } from 'react'
import TopBar from './components/TopBar'
import ChatInput from './components/Chatbox'
import './App.css'

function App() {
 
  return (
    <div>
        <div className="flex flex-col h-screen">
           <TopBar />
        </div>

        <div className="relative h-screen bg-[#121212]">
          <div className="max-w-3xl mx-auto p-4 pb-20 overflow-y-auto h-full">
        
          </div>

         <ChatInput />
        </div>
    </div>
  )
}

export default App
