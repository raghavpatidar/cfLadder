import './App.css';
import Table from './Components/Table'
import Home from './Components/Home';

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path='/:handel' element={<Table />}> </Route>
      </Routes>
      <Routes>
        <Route path='/' element={<Home />}> </Route>
      </Routes>

    </BrowserRouter>

  );
}

export default App;