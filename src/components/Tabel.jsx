import React from 'react'
import data from '../data.json';
import './Tabel.css'

const Tabel = () => {
  return (
    <div className="Tabel">
      <h1>Equipment-wise Detail</h1>
      <table >
        <thead>
          <tr>
            <th>Machine Name</th>
            <th>Machine ID</th>
            <th colSpan="3">Energy consumed</th>  
            <th>Active Power</th>
            <th>Aprent Power</th>
            <th>Reactive Power</th>
            <th>CURRENT</th>
            <th>VOLTAGE</th>
            <th>POWER FACTOR</th>
            <th colSpan="3">IDLE TIME</th>
          </tr>
        </thead>
        <tbody>
          {data.map(item => (
            <tr key={item.machine_id}>
              <td>{item.machine_name}</td>
              <td>{item.machine_id}</td>
              <td>{item.current}</td>
              <td>{item.daily_energy}</td>
              <td>{item.monthly_energy}</td>
              <td>{item.yearly_energy}</td>
              <td>{item.active_power}</td>
              <td>{item.apparent_power}</td>
              <td>{item.reactive_power}</td>
              <td>{item.voltage}</td>
              <td>{item.power_factor}</td>
              <td>{item.idle_daily}</td>
              <td>{item.idle_monthly}</td>
              <td>{item.idle_yearly}</td>
              
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Tabel