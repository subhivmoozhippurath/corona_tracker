import React, { useState ,useEffect} from 'react';
import {covidData,MARKER_URL} from '../utils/constants';
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";
import "leaflet/dist/leaflet.css";

const Map = () => {
    const [selectedStateData,setSelectedStateData] = useState(null);
    const states = Object.keys(covidData.India.States);
    console.log('states',states);
    useEffect(() => {
        // Default to a specific state (for example, Kerala) on initial render
        setSelectedStateData(covidData.India.States.Kerala);
      }, []);
  return (
   <div className="h-full">
      <MapContainer center={[20.5937, 78.9629]} zoom={5} scrollWheelZoom={true} className="h-full">
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        
        {/* Loop through the states and add markers */}
        {Object.keys(covidData.India.States).map((state) => {
          const stateInfo = covidData.India.States[state];
          return (
            <Marker
              key={state}
              position={[stateInfo.lat, stateInfo.lon]} // Assuming you have lat and lon data in your state data
              icon={new Icon({ iconUrl: `${MARKER_URL}`, iconSize: [25, 25] })}
            >
              <Popup>
                <div>
                  <h3>{state}</h3>
                  <p><strong>Total Cases:</strong> {stateInfo.Total}</p>
                  <p><strong>Active Cases:</strong> {stateInfo.Active}</p>
                  <p><strong>Recovered:</strong> {stateInfo.Recovered}</p>
                  <p><strong>Deaths:</strong> {stateInfo.Deaths}</p>
                </div>
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>
    </div>  )
}

export default Map
