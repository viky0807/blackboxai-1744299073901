import { useState } from 'react';

export default function ChatInterface() {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  const handleSend = () => {
    if (message.trim()) {
      setMessages([...messages, { text: message, sender: 'You' }]);
      setMessage('');
      // TODO: Add blockchain message sending
    }
  };

  return (
    <div className="bg-white rounded-lg shadow p-4">
      <div className="h-64 overflow-y-auto mb-4">
        {messages.map((msg, index) => (
          <div key={index} className="mb-2">
            <p className="font-semibold">{msg.sender}</p>
            <p>{msg.text}</p>
          </div>
        ))}
      </div>
      <div className="flex">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="flex-1 border rounded-l-lg p-2"
          placeholder="Type your message..."
        />
        <button
          onClick={handleSend}
          className="bg-blue-500 text-white px-4 py-2 rounded-r-lg"
        >
          Send
        </button>
      </div>
    </div>
  );
}
