import React, { useMemo } from 'react';
import { Message } from '../types/message';

interface MessageListProps {
  messages: Message[];
}

export const MessageList: React.FC<MessageListProps> = ({ messages }) => {
  const renderedMessages = useMemo(() => {
    if (messages.length === 0) {
      return <p className="empty">Нет сообщений 😶</p>;
    }

    return messages.map(msg => (
      <div key={msg.id} className="message">
        <div className="text">{msg.text}</div>
        <span className="time">{msg.time}</span>
      </div>
    ));
  }, [messages]);

  return <div className="message-list">{renderedMessages}</div>;
};