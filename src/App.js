import { useState, useEffect } from 'react';
import './App.css';
import 'rsuite/dist/styles/rsuite-default.css';

function App() {
  const [ip, setIp] = useState('')

  useEffect(() => {
    fetch(`https://geo.ipify.org/api/v1?apiKey=${process.env.REACT_APP_IPIFY_API_KEY}`)
      .then(res => res.json())
      .then(result => setIp(result.ip));
  })
  
  return (
    <div className="App">
      <h1>{ip}</h1>
      
    </div>
  );
}

export default App;
