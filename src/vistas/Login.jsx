import React from 'react';
import { useState } from 'react';
import ANHLogo from '../assets/ANHLog.png';
import BoliviaLogo from '../assets/BoliviaLog.png';
import CamionLogo from '../assets/CamionLog.png';
import './Login.css';

import appFirebase from '../credenciales';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
const auth = getAuth(appFirebase);

export const Login = () => {
  const [registrando, setRegistrando] = useState(false);

  const funcionAutenticacion = async (e) => {
    e.preventDefault();
    const correo = e.target.email.value;
    const contraseña = e.target.password.value;

    if (registrando) {
      try {
        await createUserWithEmailAndPassword(auth, correo, contraseña);
      } catch (error) {
        alert("Asegúrese que la contraseña tenga más de 8 caracteres");
      }
    } else {
      try {
        await signInWithEmailAndPassword(auth, correo, contraseña);
      } catch (error) {
        alert("El correo o contraseña son incorrectas");
      }
    }
  };

  return (
    <div className="login-container container-fluid">
      <div className="row justify-content-center align-items-center vh-100">
        <div className="login-form col-md-6 col-lg-4 p-5 shadow-lg bg-white">
          <div className="form-section">
            <h2 className="text-primary">Sistema de control y seguimiento de cisternas ANH</h2>
            <p>¡Bienvenido! Por favor introduce tus datos</p>
            <form onSubmit={funcionAutenticacion}>
              <div className="form-group">
                <input type="email" className="form-control" placeholder="Email Address" id="email" required />
              </div>
              <div className="form-group">
                <input type="password" className="form-control" placeholder="Password" id="password" required />
              </div>
              <div className="form-options form-group form-check">
                <input type="checkbox" className="form-check-input" id="rememberMe" />
                <label className="form-check-label" htmlFor="rememberMe">Recuérdame</label>
                <a href="#forgot-password" className="float-right">¿Olvidaste tu contraseña?</a>
              </div>
              <button type="submit" className="btn btn-primary btn-block">{registrando ? "Registrate" : "Login"}</button>
            </form>
            <button onClick={() => setRegistrando(!registrando)} className="btn btn-secondary btn-block mt-3">
              {registrando ? "Inicia Sesión" : "Registrate"}
            </button>
            <div className="social-login mt-4 text-center">
              <p>Or login with</p>
              <button className="btn btn-outline-secondary mx-2">LinkedIn</button>
              <button className="btn btn-outline-secondary mx-2">Google</button>
            </div>
          </div>
        </div>
        <div className="image-section col-md-6 col-lg-8 d-flex flex-column justify-content-center align-items-center">
          <img src={ANHLogo} alt="ANH Logo" className="anh-logo mb-3" />
          <img src={BoliviaLogo} alt="Bolivia" className="bolivia-logo mb-3" />
          <img src={CamionLogo} alt="Camion" className="camion-logo" />
        </div>
      </div>
    </div>
  );
};

export default Login;
