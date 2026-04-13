import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home';
import Initiator from './pages/InitiatingPage';

function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/init' element={<Initiator/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
