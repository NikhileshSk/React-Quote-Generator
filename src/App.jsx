import { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  const fetchQuote = async () => {
    try {
      const response = await axios.get('https://dummyjson.com/quotes');
      const randomQuote = response.data.quotes[Math.floor(Math.random() * response.data.quotes.length)];
      setQuote(randomQuote.quote);
      setAuthor(randomQuote.author);
    } catch (error) {
      console.error('Error fetching quote:', error);
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <>
      <div style={styles.container}>
        <div style={styles.quoteBox}>
          <h1 style={{color:'red',margin:'10px'}}>Random Quote Generator</h1>
          <h1 style={styles.quote}>"{quote}"</h1>
          <h3 style={styles.author}>- {author}</h3>
          <button style={styles.button} onClick={fetchQuote}>New Quote</button>
        </div>
      </div>
    </>
  );
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    background: 'linear-gradient(135deg, #89f7fe, #66a6ff)',
    fontFamily: '"Poppins", sans-serif',
  },
  quoteBox: {
    backgroundColor: '#fff',
    padding: '3rem',
    borderRadius: '15px',
    boxShadow: '0 6px 20px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    maxWidth: '600px',
    animation: 'fadeIn 1s ease',
  },
  quote: {
    fontSize: '2rem',
    fontStyle: 'italic',
    color: '#333',
    marginBottom: '1.5rem',
  },
  author: {
    fontSize: '1.3rem',
    fontWeight: 'bold',
    color: '#555',
    marginBottom: '2rem',
  },
  button: {
    backgroundColor: '#ff4081',
    color: '#fff',
    padding: '12px 30px',
    border: 'none',
    borderRadius: '25px',
    cursor: 'pointer',
    fontSize: '1.1rem',
    transition: 'background 0.3s ease, transform 0.2s ease',
  },
};

export default App;
