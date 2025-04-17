// import './App.css';
import { useState } from 'react';
import './Chatbot.css';

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

      <div className='input-container'>
        <input
          onChange={(e) => setMessages(e.target.value)}
          type="text"
          placeholder="Ask something..."
        />
        <button onClick={handleSend}>Send</button>
      </div>

      {response && (
        <div>
          <strong>Shenskho:</strong> {response}
        </div>
      )}
    </div>
  );
}


