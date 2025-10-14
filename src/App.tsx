import { useState } from "react";
import "./App.css";

interface Message {
  id: number;
  text: string;
  from: "user" | "bot";
}

export const App: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");

  const handleSend = () => {
    if (!inputValue.trim()) return;

    const newMessage: Message = {
      id: Date.now(),
      text: inputValue.trim(),
      from: "user",
    };

    setMessages((prev) => [...prev, newMessage]);
    setInputValue("");

    // Имитация ответа бота
    setTimeout(() => {
      const botMessage: Message = {
        id: Date.now() + 1,
        text: "Бот: Привет! 😊",
        from: "bot",
      };
      setMessages((prev) => [...prev, botMessage]);
    }, 1000);
  };

  return (
    <div className="chat-container">
      <h2 className="chat-title">💬 Мини-чат</h2>

      <div className="chat-box">
        {messages.length === 0 && (
          <p className="no-messages">Нет сообщений</p>
        )}

        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`message ${msg.from === "user" ? "user" : "bot"}`}
          >
            {msg.text}
          </div>
        ))}
      </div>

      <div className="input-box">
        <input
          className="chat-input"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Введите сообщение..."
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
        />
        <button className="send-button" onClick={handleSend}>
          ➤
        </button>
      </div>
    </div>
  );
};