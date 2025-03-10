import { useState } from 'react';


function ReportLost() {
  const [formData, setFormData] = useState({
    name: '',
    item: '',
    location: '',
    date: '',
    photo: null
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  
  };

  const handleReset = () => {
    setFormData({
      name: '',
      item: '',
      location: '',
      date: '',
      photo: null
    });
  };

  return (
    
    <div className="report-lost-container">
      <form onSubmit={handleSubmit}>
        
        <h2>Report Lost Item</h2>

        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
          />
        </div>

        <div className="form-group">
          <label>Item name and Description:</label>
          <input
            style={{
              height: '50px',
              fontSize: '16px',
              padding: '6px'
            }}
            type="text"
            value={formData.item}
            onChange={(e) => setFormData({...formData, item: e.target.value})}
          />
        </div>

        <div className="form-group">
          <label>Location:</label>
          <input
            type="text"
            value={formData.location}
            onChange={(e) => setFormData({...formData, location: e.target.value})}
          />
        </div>
        
      

        <div className="form-group">
          <label>Date:</label>
          <input
            type="date"
            value={formData.date}
            onChange={(e) => setFormData({...formData, date: e.target.value})}
          />
        </div>

        <div className="form-group">
          <label>Upload Photo:</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setFormData({...formData, photo: e.target.files?.[0] || null})}
          />
        </div>

        <div className="button-group">
          <button type="submit">Submit</button>
          <button type="button" onClick={handleReset}>Reset</button>
        </div>
      </form>
    </div>
  );
}

export default ReportLost;
