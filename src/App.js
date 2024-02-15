import './App.css';
import Home from './Home';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import UploadImage from './UploadImage';

function App() {

  return (
    <div className="App">

      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/image' element={<UploadImage/>}/>
      </Routes>
      </BrowserRouter>
     
      
    </div>
  );
}

export default App;
