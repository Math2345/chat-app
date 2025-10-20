import React, { useState, useCallback } from 'react';

interface MessageInputProps {
  onSend: (text: string) => void;
}

export const MessageInput: React.FC<MessageInputProps> = ({ onSend }) => {
  const [text, setText] = useState('');

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  }, []);

  const handleSend = useCallback(() => {
    if (!text.trim()) return;
    onSend(text);
    setText('');
  }, [text, onSend]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter') handleSend();
    },
    [handleSend]
  );

  return (
    <div className="input-container">
      <input
        type="text"
        placeholder="Введите сообщение..."
        value={text}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      <button onClick={handleSend}>Отправить</button>
    </div>
  );
};