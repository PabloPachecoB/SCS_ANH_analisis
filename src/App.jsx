import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'

//importando firebase
import appFirebase from '../src/credenciales';
import {getAuth,onAuthStateChanged} from 'firebase/auth';
const auth = getAuth(appFirebase);

//importyando Login 
import { Login } from '../src/vistas/Login'
//importando MenuAdm
import { MenuAdm } from '../src/vistas/MenuAdm'

import './App.css'




function App() {
  const[usuario, setUsuario]  = useState (null)

  onAuthStateChanged (auth, (usuarioFirebase)=>{
    if (usuarioFirebase)
      {
        setUsuario (usuarioFirebase)
      }
      else
      {
        setUsuario(null)
      }
  })


  return (
    <div >
      {usuario ? <MenuAdm correoUsuario = {usuario.email} /> : <Login/>}
     
    </div>
  );
}

export default App

