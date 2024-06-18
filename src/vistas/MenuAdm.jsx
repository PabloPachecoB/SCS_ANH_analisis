import React, { useState } from 'react';
import appFirebase from '../credenciales';
import { getAuth, signOut } from 'firebase/auth';
import { motion } from 'framer-motion';
import './MenuAdm.css';
import ANHLogo from '../assets/ANHLog.png';
import { FaTachometerAlt, FaTruck, FaCalendarAlt, FaUsers, FaChartBar, FaCogs } from 'react-icons/fa';
import Cisterna from '../componentes/Cisterna'; // Asegúrate de que la ruta sea correcta

const auth = getAuth(appFirebase);

export const MenuAdm = ({ correoUsuario }) => {
  const [view, setView] = useState('dashboard');

  const renderView = () => {
    switch(view) {
      case 'cisterna':
        return <Cisterna />;
      case 'dashboard':
      default:
        return (
          <div className="content mt-4">
            <div className="row">
              <div className="col-md-6">
                <div className="card mb-4 shadow-sm">
                  <div className="card-body">
                    <h3 className="card-title">Estadísticas de somnolencia</h3>
                    <div className="chart-container">
                      <div className="bar-chart">
                        <div className="bar" style={{ height: '70%', animationDuration: '5s' }}>
                          <span className="bar-label">70%</span>
                        </div>
                        <div className="bar" style={{ height: '50%', animationDuration: '7s' }}>
                          <span className="bar-label">50%</span>
                        </div>
                        <div className="bar" style={{ height: '30%', animationDuration: '6s' }}>
                          <span className="bar-label">30%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card mb-4 shadow-sm">
                  <div className="card-body">
                    <h3 className="card-title">Distribución de somnolencia</h3>
                    <div className="chart-container">
                      <div className="doughnut-chart">
                        <div className="doughnut-segment segment1"></div>
                        <div className="doughnut-segment segment2"></div>
                        <div className="doughnut-segment segment3"></div>
                        <div className="doughnut-label">70%</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-12">
                <div className="card mb-4 shadow-sm">
                  <div className="card-body">
                    <h3 className="card-title">Más datos de control</h3>
                    <div className="control-data">
                      <div className="control-item">
                        <span className="control-value">70%</span>
                        <span className="control-label">Cansancio</span>
                      </div>
                      <div className="control-item">
                        <span className="control-value">50%</span>
                        <span className="control-label">Fatiga</span>
                      </div>
                      <div className="control-item">
                        <span className="control-value">30%</span>
                        <span className="control-label">Somnolencia</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
    }
  }

  return (
    <div className="container-fluid menu-container">
      <div className="row">
        <div className="col-md-3 sidebar bg-light">
          <div className="logo-container text-center py-4">
            <img src={ANHLogo} alt="ANH Logo" className="logo-circle mb-3" />
            <h2>Adm ANH</h2>
          </div>
          <ul className="nav flex-column nav-links">
            <li className="nav-item">
              <a className="nav-link" href="#dashboard" onClick={() => setView('dashboard')}>
                <FaTachometerAlt className="nav-icon" /> Dashboard
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#cisterna" onClick={() => setView('cisterna')}>
                <FaTruck className="nav-icon" /> Cisterna
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#calendar">
                <FaCalendarAlt className="nav-icon" /> Calendar
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#people">
                <FaUsers className="nav-icon" /> People
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#reports">
                <FaChartBar className="nav-icon" /> Reports
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#administration">
                <FaCogs className="nav-icon" /> Administration
              </a>
            </li>
          </ul>
        </div>
        <div className="col-md-9 main-content">
          <motion.div 
            className="header d-flex justify-content-between align-items-center py-3 border-bottom"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="animated-text">Bienvenido usuario {correoUsuario}</h2>
            <button className="btn btn-danger" onClick={() => signOut(auth)}>Logout</button>
          </motion.div>
          {renderView()}
        </div>
      </div>
    </div>
  );
}

export default MenuAdm;
