import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function Dashboard() {
  const navigate = useNavigate();
  const [fileTypes, setFileTypes] = useState({});

  useEffect(() => {
    const savedFiles = localStorage.getItem('uploadedFiles');
    if (savedFiles) {
      setFileTypes(JSON.parse(savedFiles));
    }
  }, []);

  return (
    <div className="page-container">
      <h1>Dashboard</h1>
      
      <div className="section">
        <h2>File Summary</h2>
        <div className="file-summary">
          {Object.keys(fileTypes).length > 0 ? (
            <div className="file-type-grid">
              {Object.entries(fileTypes).map(([type, count]) => (
                <div key={type} className="file-type-card">
                  <div className="file-type-icon">
                    {type.toUpperCase()}
                  </div>
                  <div className="file-type-details">
                    <span className="file-count">{count}</span>
                    <span className="file-label">
                      {count === 1 ? 'file' : 'files'}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="no-files">No files uploaded yet.</p>
          )}
        </div>
      </div>

      <div className="section">
        <h2>Overview</h2>
        <p>Welcome to your PINN AI dashboard.</p>
      </div>
      
      <div className="section">
        <h3>Recent Activity</h3>
        <p>Your files are being processed and analyzed.</p>
      </div>
    </div>
  );
}
