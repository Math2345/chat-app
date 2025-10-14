import React, { useState } from 'react';
import { Message } from '../types/message';
import { MessageList } from './MessageList';
import { MessageInput } from './MessageInput';

export const ChatWindow: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);

  const addMessage = (text: string) => {
    if (!text.trim()) return;
    const newMessage: Message = {
      id: Date.now(),
      text,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };
    setMessages(prev => [...prev, newMessage]);
  };

  return (
    <div className="chat-container">
      <h2>Мини-чат 💬</h2>
      <MessageList messages={messages} />
      <MessageInput onSend={addMessage} />
    </div>
  );
};