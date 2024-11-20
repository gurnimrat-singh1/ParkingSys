import './App.css';
import ParkingSpace from './Components/ParkingSpace';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import Login from './Components/Login';
import SignUp from './Components/SignUp';

function App() {
  return (
    
    <Router>
  <div className="App">
    <Navbar />
    <Routes>
      <Route path='/signup'element={<SignUp/>}/>
      <Route path="/login" element={<Login />} />
      <Route path='/parkingspace' element={<ParkingSpace/>}/>
    </Routes>
    <Footer />
 </div>
   </Router>


  );
}

export default App;