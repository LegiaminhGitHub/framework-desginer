import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router , Route , Routes } from 'react-router-dom';
import Main_page from './pages/main_page';
import Desgin_page from './pages/desgin_page';
function App() {
  return(
    <Router>
    <Routes>
      <Route path="/" element={<Main_page/>}></Route>
      <Route path="/desgin" element={<Desgin_page/>}></Route>
    </Routes>
  </Router>
  );
}

export default App;
