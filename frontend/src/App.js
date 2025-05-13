import React, { useState, useEffect} from 'react';
import './App.css';

function App() {

  const [items, setItems] = useState([]);
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/api/items`);
    const data = await response.json();
    setItems(data);
  }

  const addItem = async () => {
    if (!name) return;

    const item = { name }
    const response = await fetch(`${process.env.REACT_APP_API_URL}/api/items`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(item),
    });

    if (response.ok) {
      setMessage('Item added successfully');
      setName('');
      fetchItems();
    } else {
      setMessage('Failed to add item');
    }
  }

  return (
    <div className="App">
      <h1>Item List</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter item name"
      />
      <button onClick={addItem}>Add Item</button>
      {message && <p>{message}</p>}
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
