import React from 'react';
import { useSelector } from 'react-redux';

const Main = () => {
  // Access the selected state data from Redux store
  const selectedStateData = useSelector(state => state.state.selectedStateData);

  return (
    <div className="main-content">
      <h2>Covid Data</h2>
      {selectedStateData.Total ? (
        <div>
          <h3>{selectedStateData.stateName || 'India'}</h3>
          <p>Total Cases: {selectedStateData.Total}</p>
          <p>Active Cases: {selectedStateData.Active}</p>
          <p>Recovered: {selectedStateData.Recovered}</p>
          <p>Deaths: {selectedStateData.Deaths}</p>
        </div>
      ) : (
        <p>Select a state to view data.</p>
      )}
    </div>
  );
};

export default Main;
