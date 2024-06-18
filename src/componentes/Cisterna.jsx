import React, { useEffect, useState } from 'react';
import './Cisterna.css';
import { FaPlus } from 'react-icons/fa';

const Cisterna = () => {
  const [cisternas, setCisternas] = useState([]);

  useEffect(() => {
    // Reemplaza con la URL de tu API
    fetch('https://api.example.com/cisternas')
      .then(response => response.json())
      .then(data => setCisternas(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="container-fluid cisterna-container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Cisternas Activas</h2>
        <button className="btn btn-success">
          <FaPlus /> Añadir
        </button>
      </div>
      <div className="input-group mb-4">
        <div className="input-group-prepend">
          <span className="input-group-text" id="basic-addon1">
            <i className="fa fa-search"></i>
          </span>
        </div>
        <input type="text" className="form-control" placeholder="Quick search" />
      </div>
      <table className="table table-bordered table-hover">
        <thead className="thead-dark">
          <tr>
            <th>Placa</th>
            <th>Transporta</th>
            <th>Modelo</th>
            <th>Alerta de somnolencia</th>
            <th>Estado</th>
          </tr>
        </thead>
        <tbody>
          {cisternas.map((cisterna, index) => (
            <tr key={index} className="table-active-row">
              <td>{cisterna.placa}</td>
              <td>{cisterna.transporta}</td>
              <td>{cisterna.modelo}</td>
              <td>Registradas: {cisterna.alertas}</td>
              <td className={`status-${cisterna.estado.toLowerCase()}`}>{cisterna.estado} <span role="img" aria-label="status">👨‍🔧👨‍🔧</span></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Cisterna;
