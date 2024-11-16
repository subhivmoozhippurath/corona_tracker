import React from 'react';
import { useSelector } from 'react-redux';
import Plot from 'react-plotly.js';  // Import Plotly component
import '../../src/tailwind.css'

const Main = () => {
  // Access the selected state data from Redux store
  const selectedStateData = useSelector(state => state.state.selectedStateData);

  // Check if selected state data exists
  if (!selectedStateData.Total) {
    return <p>Select a state to view data.</p>;
  }

  // Prepare data for the Pie chart
  const pieData = [
    { label: 'Active', value: selectedStateData.Active },
    { label: 'Recovered', value: selectedStateData.Recovered },
    { label: 'Deaths', value: selectedStateData.Deaths },
    { label: 'Total', value: selectedStateData.Total - selectedStateData.Active - selectedStateData.Recovered - selectedStateData.Deaths }
  ];

  // Data for Line Chart (Example: Assuming you have historical data for the past 7 days)
  const lineData = {
    Total: [1000000, 950000, 900000, 850000, 800000, 750000, 700000],  // Example values
    Active: [200000, 180000, 160000, 140000, 120000, 100000, 80000],  // Example values
    Recovered: [700000, 710000, 720000, 730000, 740000, 750000, 760000],  // Example values
    Deaths: [50000, 51000, 52000, 53000, 54000, 55000, 56000]  // Example values
  };

  const dates = ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7'];

  // Pie Chart Configuration
  const pieChartData = {
    type: 'pie',
    labels: pieData.map(data => data.label),
    values: pieData.map(data => data.value),
    textinfo: 'percent',
    hole: 0.4
  };

  // Line Chart Configuration
  const lineChartData = [
    {
      type: 'scatter',
      mode: 'lines',
      name: 'Total Cases',
      x: dates,
      y: lineData.Total,
      line: { color: 'blue' }
    },
    {
      type: 'scatter',
      mode: 'lines',
      name: 'Active Cases',
      x: dates,
      y: lineData.Active,
      line: { color: 'red' }
    },
    {
      type: 'scatter',
      mode: 'lines',
      name: 'Recovered',
      x: dates,
      y: lineData.Recovered,
      line: { color: 'green' }
    },
    {
      type: 'scatter',
      mode: 'lines',
      name: 'Deaths',
      x: dates,
      y: lineData.Deaths,
      line: { color: 'black' }
    }
  ];

  return (
    <div className="flex justify-between gap-4 p-4">
      {/* Left Section: Pie Chart */}
      <div className="w-1/2">
        <Plot
          data={[pieChartData]}
          layout={{
            title: 'Covid Data Distribution',
            showlegend: true,
            height: 400
          }}
        />
      </div>

      {/* Right Section: Line Chart */}
      <div className="w-1/2">
        <Plot
          data={lineChartData}
          layout={{
            title: 'Covid Trends Over Time',
            xaxis: { title: 'Days' },
            yaxis: { title: 'Cases' },
            height: 400
          }}
        />
      </div>
    </div>
  );
};

export default Main;
