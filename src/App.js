import './App.css';
import Navigation from './components/Navigation';
import Notice from './components/Notice';
import Flys from './components/Flys';
import Login from './components/Login';

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Consoleadmin from './components/Consoleadmin';


function App() {
  return (

<BrowserRouter>
  <div className="App">
     <header className="App-header">
        <Navigation/>
      </header>
      <Routes>
        <Route path="/" element={<Notice/>} />
        <Route path="/notice" element={<Notice/>} />
        <Route path="/flys" element={<Flys/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/consoleadmin" element={<Consoleadmin/>} />
      </Routes>
  </div>
</BrowserRouter>
  );
}

export default App;
