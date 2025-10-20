import React, { useState, useCallback, useMemo } from 'react';
import { Message } from '../types/message';
import { MessageList } from './MessageList';
import { MessageInput } from './MessageInput';

export const ChatWindow: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);

  // useCallback — мемоизация функции, чтобы не пересоздавалась при каждом рендере
  const addMessage = useCallback((text: string) => {
    if (!text.trim()) return;

    const newMessage: Message = {
      id: Date.now(),
      text,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages(prev => [...prev, newMessage]);
  }, []);

  // useMemo — вычисляем список сообщений один раз, пока не изменятся данные
  const memoizedMessages = useMemo(() => messages, [messages]);

  return (
    <div className="chat-container">
      <h2>Мини-чат 💬</h2>
      <MessageList messages={memoizedMessages} />
      <MessageInput onSend={addMessage} />
    </div>
  );
};