import React from 'react';
import ChatMessage from './ChatMessage';

const ChatWindow: React.FC = () => {
  const messages = [
    { message: 'Hello!', sender: 'User1' },
    { message: 'Hi there!', sender: 'User2' },
  ];

  return (
    <div className="chat-window">
      {messages.map((msg, index) => (
        <ChatMessage key={index} message={msg.message} sender={msg.sender} />
      ))}
    </div>
  );
};

export default ChatWindow;
