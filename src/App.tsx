import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './layouts/layout';
import Home from './pages/Home';
import Test from './pages/Test';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* Membungkus Routes dengan Layout */}
        <Route
          path='/'
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path='/test/:id'
          element={
            <Layout>
              <Test />
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
