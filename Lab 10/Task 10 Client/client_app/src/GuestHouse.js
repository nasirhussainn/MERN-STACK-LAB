import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './GuestHouse.css'; 

const GuestHouse = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/api/guesthouse/data')
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className="container"> 
      <h1 className="heading">Guest House</h1>
      <table className="data-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Room Number</th>
            <th>Type</th>
            <th>Price Per Night</th>
          </tr>
        </thead>
        <tbody>
          {data.rooms && data.rooms.map((room) => (
            <tr key={room._id} className="data-row">
              <td>{room._id}</td>
              <td>{room.roomNumber}</td>
              <td>{room.type}</td>
              <td>${room.pricePerNight}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GuestHouse;
