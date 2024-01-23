import React from 'react';

const BrahminProfile = ({ brahmin }) => {
  return (
    <div>
      <h2>Brahmin Profile</h2>
      <div>
        <p>Name: {brahmin.name}</p>
        <p>City: {brahmin.city}</p>
        {/* Add more details as needed */}
      </div>
    </div>
  );
};

export default BrahminProfile;
