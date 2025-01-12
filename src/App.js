import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/Homepage';
import About from './Pages/About';
import Services from './Pages/Services';
import Amenities from './Pages/Amenities';
import Team from './Pages/Team';
import AdminComponent from './admin/AdminComponent';
import AdminSignInPage from './Pages/AdminSignInPage';
import RealEstateSignin from './Pages/RealEstateSignin';
import RealEstateSignup from './Pages/RealEstateSignup';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/admin-dashboard/*' element={<AdminComponent />} />
          <Route path='/admin' element={<AdminSignInPage />} />
          <Route path='/login' element={<RealEstateSignin />} />
          <Route path='/signup' element={<RealEstateSignup />} />
          {/* Add other routes as needed */}
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
