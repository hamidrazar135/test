import React, { useState, useEffect } from 'react';

const App = () => {
  const [data, setData] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    fetch('https://fakestoreapi.com/users')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="app">
 <div className="div">
 <div className="item-list">
        {data.map((item, index) => (
          <div key={index} className="item" onClick={() => setSelectedItem(item)}>
            {item.username} {/* Adjust based on your data structure */}
          </div>
        ))}
      </div>
      <div className="item-details">
        {selectedItem ? (
          <div>
            <h2>{selectedItem.username}</h2>
            <p>{selectedItem.email}</p>
            <p>{selectedItem.phone}</p>
            {/* Render more details as needed */}
          </div>
        ) : <p>no data found</p>}
      </div>
 </div>
    </div>
  );
};

export default App;
