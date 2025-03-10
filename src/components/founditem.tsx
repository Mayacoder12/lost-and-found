import { useState } from 'react';
import logo1 from './phone.jpg';
import logo2 from './charger.jpeg';
import logo3 from './earbuds.webp';
import logo4 from './watch.jpg';

const FoundItems = () => {
  const [searchQuery, setSearchQuery] = useState('');

 
  const foundItems = [
    { id: 1, name: "Mobile", location: "Library", date: "20/02/2025", imageUrl: logo1, description: "Mobile has been found." },
    { id: 2, name: "Charger", location: "Cafeteria", date: "18/02/2025", imageUrl: logo2, description: "Charger has been found." },
    { id: 3, name: "Earbuds", location: "Lecture Hall 3", date: "17/02/2025", imageUrl: logo3, description: "Earbuds has been found." },
    { id: 4, name: "Watch", location: "Gym", date: "15/02/2025", imageUrl: logo4, description: "Watch has been found." }
  ];

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '20px'
    }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>FOUND ITEMS</h1>

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
        {foundItems.map((item) => (
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

export default FoundItems;
