import React,{useState} from 'react';
import './Header.css';
import {covidData} from '../utils/constants'

const Header = () => {
    const [selectedState, setSelectedState] = useState('All');
    const stateNames = Object.keys(covidData.India.States);

    const states = [
      { value: 'All', label: 'All' },
      ...stateNames.map(state => ({ value: state, label: state }))
    ];

  const handleStateChange = (e) => {
    setSelectedState(e.target.value);
  };
  
  return (
    <header className="header">
    <div className="logo">
      <h1>Corona Tracker</h1>
    </div>
    <div className="dropdown">
      <select value={selectedState} onChange={handleStateChange} className="dropdown-select">
        {states.map((state) => (
          <option key={state.value} value={state.value}>
            {state.label}
          </option>
        ))}
      </select>
    </div>
  </header>
  )
}

export default Header
