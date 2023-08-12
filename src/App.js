import React from 'react';
import { Route, Routes } from 'react-router-dom';
import routes from './routes';
import './App.css';

import Header from './components/Header';
import Footer from './components/Footer';
function App() {
    return (
      <div className="App">
        <Header/>
        <Routes>
            {routes.map((route, idx) => (
                <Route
                    path={route.path}
                    element={React.createElement(route.component)}
                    key={idx}
                />
            ))}
        </Routes>
        <Footer/>
      </div>
    );
};

export default App;
