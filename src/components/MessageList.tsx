import React from 'react';
import { Message } from '../types/message';

interface MessageListProps {
  messages: Message[];
}

export const MessageList: React.FC<MessageListProps> = ({ messages }) => {
  return (
    <div className="message-list">
      {messages.length === 0 && <p className="empty">Нет сообщений 😶</p>}
      {messages.map(msg => (
        <div key={msg.id} className="message">
          <div className="text">{msg.text}</div>
          <span className="time">{msg.time}</span>
        </div>
      ))}
    </div>
  );
};