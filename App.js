import './App.css';
import Navbar from './Navbar';
import{BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './Home';
import Placetovisit from './Placetovisit';
import BestTimeToVisit from './BestTimeToVisit';



function App() {
  return (
    <div>
      
      
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/place' element={<Placetovisit/>}/>
        <Route path='/time' element={<BestTimeToVisit/>}/>
      </Routes>
      </BrowserRouter>
      
      
    </div>
  );
}

export default App;
