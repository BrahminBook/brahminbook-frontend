import React from 'react';

const BrahminList = ({ brahmins, onSelectBrahmin }) => {
  return (
    <div>
      <h2>Brahmins</h2>
      <ul>
        {brahmins.map((brahmin) => (
          <li key={brahmin.id} onClick={() => onSelectBrahmin(brahmin)}>
            {brahmin.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BrahminList;
