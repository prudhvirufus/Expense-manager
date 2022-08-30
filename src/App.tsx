import React from 'react';
import { Route,Routes } from 'react-router-dom';

import  Authentication from "./routes/authentication/authentication.component"



import Dashboard from './components/DashBoard/Dashboard.component';
import PrivateRoute from './routes/PrivateRoute/PrivateRoute.component';
import './App.css';


const  App=()=> {
  return (
    <div className="App">
<Routes>
<Route path="/dashboard" element={
<PrivateRoute>
<Dashboard/>
</PrivateRoute>
}/>
     <Route path="/" element={<Authentication/>}/>
     
</Routes>
    </div>
  );
}

export default App;

