import { Home, About, Regions } from '../pages'
import { Route, Routes } from "react-router-dom";
import style from './global.css'

const App = () => {
  return (
    <div className="App">
      <Routes>

        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Regions" element={<Regions />} />
        
      </Routes>

    </div>
  );
}

export default App;
