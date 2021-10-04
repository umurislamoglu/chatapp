import React from 'react'
import LoginPage from './components/login/LoginPage'
import Dashboard from './layouts/Dashboard'
import "./styles/style.css"
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './firebase/firebaseConfig';


const App = () => {


  const [user] = useAuthState(auth)




  return (
    <div>
      {
        user?<Dashboard/>:<LoginPage/>
      }
        
      
    </div>
  )
}

export default App
