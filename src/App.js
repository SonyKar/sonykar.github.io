import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

import './App.css';
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';
import MainPage from './MainPage/MainPage';
import ProjectsPage from './ProjectsPage/ProjectsPage';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='*' element={<MainPage />}></Route>
        <Route exact path='/projects' element={<ProjectsPage />}></Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
