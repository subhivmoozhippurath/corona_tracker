import React,{useState} from 'react';
import './Header.css';
import {covidData} from '../utils/constants'
import { useDispatch } from 'react-redux';
import {setSelectedStateData} from '../utils/stateSlice'

const Header = () => {
    const [selectedState, setSelectedStateLocal] = useState('All');
    const dispatch = useDispatch()
    const stateNames = Object.keys(covidData.India.States);

    const states = [
      { value: 'All', label: 'All' },
      ...stateNames.map(state => ({ value: state, label: state }))
    ];

    const handleStateChange = (e) => {
      const stateName = e.target.value;
      setSelectedStateLocal(stateName);
  
      // Get state data based on the selected state
      const stateData = stateName === 'All' ? covidData.India : covidData.India.States[stateName];
  
      // Dispatch action to store the selected state and its data in Redux store
      dispatch(setSelectedStateData({ stateName, stateData }));
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
