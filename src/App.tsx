import React from 'react';
import { Route,Routes } from 'react-router-dom';

import  Authentication from "./routes/authentication/authentication.component"



import Dashboard from './components/DashBoard/Dashboard.component';
import PrivateRoute from './routes/PrivateRoute/PrivateRoute.component';
import './App.css';
import NavigationBar from './routes/navigation/navigation';


const  App=()=> {
  return (
    <div className="App">
<Routes>
<Route path="/" element={
<PrivateRoute>
<NavigationBar/>
</PrivateRoute>
}>
 <Route index element={<Dashboard/>}/>
    {/* <Route path="shop" element={<Shop/>}/>
    <Route path="auth" element={<Authentication/>}/>
    <Route path="checkout" element={<Checkout/>}/> */}


</Route>
<Route path="/auth" element={<Authentication/>}/>
     
</Routes>
    </div>
  );
}

export default App;

