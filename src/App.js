import Table from './Components/Table'
import Home from './Components/Home';
import './App.css';
import Ladder from './Components/Ladder';

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path='/:handel/:ladder' element={<Table />}> </Route>
      </Routes>
      <Routes>
        <Route path='/:handel' element={<Ladder />}> </Route>
      </Routes>
      <Routes>
        <Route path='/' element={<Home />}> </Route>
      </Routes>

    </BrowserRouter>

  );
}

export default App;
