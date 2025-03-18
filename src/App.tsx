import React from 'react';
import ChatInput from './components/ChatInput';
import ChatWindow from './components/ChatWindow';

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="chat-container">
        <ChatWindow />
        <ChatInput />
      </div>
    </div>
  );
}

export default App;
