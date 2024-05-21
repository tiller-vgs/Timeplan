import React, { useState, useEffect } from 'react';

//Not finished, I repeat, NOT FINISHED

function DataDisplay() {

const [data, setData] = useState([]);

useEffect(() => {
  fetch('/api/getData')
  .then(response => response.json())
  .then(data => setData(data))
  .catch(error => console.error('Error fetching data:', error));

}, []);

return (
    <div>
      <h1></h1>
      <ul>
        {data.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};
export default DataDisplay;