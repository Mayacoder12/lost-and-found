import { useState } from 'react';
import logo1 from './phone.jpg';
import logo2 from './charger.jpeg';
import logo3 from './earbuds.webp';
import logo4 from './watch.jpg';

const LostItems = () => {
  const [searchQuery, setSearchQuery] = useState('');


  const lostItems = [
    { id: 1, name: "Laptop", location: "Library", date: "20/02/2024", imageUrl: logo1, description: "Black Dell laptop lost near study tables." },
    { id: 2, name: "Headphones", location: "Cafeteria", date: "18/02/2024", imageUrl: logo2, description: "Wireless headphones lost on a cafeteria chair." },
    { id: 3, name: "Notebook", location: "Lecture Hall 3", date: "17/02/2024", imageUrl: logo3, description: "Red spiral notebook left on the desk." },
    { id: 4, name: "Bag", location: "Gym", date: "15/02/2024", imageUrl: logo4, description: "Blue sports bag left near the treadmill." }
  ];

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '20px'
    }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>LOST ITEMS</h1>

      <input
        type="text"
        placeholder="Search items..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        style={{
          width: '300px',
          padding: '10px',
          fontSize: '16px',
          marginBottom: '30px',
          borderRadius: '5px',
          border: '1px solid #ccc'
        }}
      />

      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        width: '100%',
        gap: '20px',
        padding: '0 20px'
      }}>
        {lostItems.map((item) => (
          <div key={item.id} style={{
            flex: '1',
            minWidth: '250px',
            padding: '15px',
            border: '1px solid #ccc',
            borderRadius: '8px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
            display: 'flex',
            flexDirection: 'column',
            gap: '10px'
          }}>
            <h3>Location: {item.location}</h3>
            <p>Date: {item.date}</p>

            <div style={{
              width: '100%',
              height: '150px',
              backgroundColor: '#f0f0f0',
              marginBottom: '10px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <img src={item.imageUrl} alt={item.name} 
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  borderRadius: '4px'
                }}
              />
            </div>

            <h4>{item.name}</h4>
            <p>{item.description}</p>

            <button style={{
              padding: '8px 15px',
              backgroundColor: '#007bff',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer'
            }}>
              Contact
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LostItems;
