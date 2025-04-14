import './App.css';
import { useState } from 'react';

export const Chatbot=()=> {
  const [messages, setMessages] = useState('');
  const [response, setResponse] = useState('');

  const handleSend = async () => {
    try {
      const res = await fetch('http://localhost:3001/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: messages }),
      });

      const data = await res.json();
      setResponse(data.reply);
    } catch (error) {
      console.error('❌ Error:', error);
    }
  };

  return (
    <div className="App">
      <h2>Shenskho Chatbot</h2>

      <div>
        <input
          onChange={(e) => setMessages(e.target.value)}
          type="text"
          placeholder="Ask something..."
        />
        <button onClick={handleSend}>Send</button>
      </div>

      {response && (
        <div style={{ marginTop: '1rem', padding: '1rem', border: '1px solid #ccc' }}>
          <strong>Gemini:</strong> {response}
        </div>
      )}
    </div>
  );
}


