import React, { useState, useRef, useEffect } from 'react';

function Home() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const messagesEndRef = useRef(null);

  const sendMessage = () => {
    if (name.trim() === '' || message.trim() === '') {
      alert('Nama dan Pesan harus diisi!');
      return;
    }

    const newMessage = { name: name.trim(), text: message.trim() };
    setMessages([...messages, newMessage]);
    setMessage('');
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const styles = {
    container: {
      maxWidth: '600px',
      height: '90vh',
      margin: '2rem auto',
      border: '1px solid #ccc',
      borderRadius: '10px',
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: '#ffffff',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
      fontFamily: 'Arial, sans-serif'
    },
    header: {
      padding: '1rem',
      borderBottom: '1px solid #ddd',
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: '1.2rem',
      backgroundColor: '#f5f5f5',
    },
    messages: {
      flex: 1,
      padding: '1rem',
      overflowY: 'auto',
      backgroundColor: '#f9f9f9',
    },
    inputArea: {
      display: 'flex',
      padding: '1rem',
      borderTop: '1px solid #ddd',
      gap: '0.5rem',
      backgroundColor: '#fff'
    },
    input: {
      padding: '0.5rem',
      fontSize: '1rem',
      borderRadius: '5px',
      border: '1px solid #ccc',
      flex: 1
    },
    nameInput: {
      width: '30%'
    },
    messageInput: {
      width: '55%'
    },
    button: {
      width: '15%',
      backgroundColor: '#007bff',
      color: '#fff',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      fontWeight: 'bold'
    },
    messageItem: {
      marginBottom: '1rem',
      display: 'flex',
      alignItems: 'flex-start'
    },
    nameBadge: {
      marginRight: '0.5rem',
      backgroundColor: '#007bff',
      color: '#fff',
      padding: '0.25rem 0.5rem',
      borderRadius: '5px',
      fontSize: '0.85rem',
      fontWeight: 'bold'
    },
    messageBox: {
      backgroundColor: '#fff',
      padding: '0.5rem 1rem',
      borderRadius: '8px',
      boxShadow: '0 0 5px rgba(0,0,0,0.05)'
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>Chat Room</div>

      <div style={styles.messages}>
        {messages.map((msg, idx) => (
          <div key={idx} style={styles.messageItem}>
            <span style={styles.nameBadge}>{msg.name}</span>
            <div style={styles.messageBox}>{msg.text}</div>
          </div>
        ))}
        <div ref={messagesEndRef}></div>
      </div>

      <div style={styles.inputArea}>
        <input
          style={{ ...styles.input, ...styles.nameInput }}
          type="text"
          placeholder="Nama Anda"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          style={{ ...styles.input, ...styles.messageInput }}
          type="text"
          placeholder="Ketik pesan..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
        />
        <button style={styles.button} onClick={sendMessage}>Kirim</button>
      </div>
    </div>
  );
}

export default Home
