import { React, Fragment } from 'react';

import './App.css';
import Footer from './Footer/Footer';
import MainPage from './MainPage/MainPage';
import Navbar from './Navbar/Navbar';

function App() {
  return (
    <Fragment>
      <Navbar />
      <MainPage />
      <Footer />
    </Fragment>
  );
}

export default App;
