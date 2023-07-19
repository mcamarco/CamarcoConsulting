import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <footer
      className="w-100 mt-auto p-4"
      style={{ backgroundColor: '#000', color: '#fff' }}
    >
      <div className="container text-center mb-5">
        {location.pathname !== '/' && (
          <button
            className="btn btn-dark mb-3"
            onClick={() => navigate(-1)}
          >
            &larr; Go Back
          </button>
        )}
        <h4 style={{ color: '#fff' }}>Camarco Consulting LLC</h4>
      </div>
    </footer>
  );
};

export default Footer;
