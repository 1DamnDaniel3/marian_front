import { Home } from '../pages'
import { About } from '../pages'
import { Route, Routes } from "react-router-dom";
import style from './global.css'

const App = () => {
  return (
    <div className="App">
      <Routes>

        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<About />} />
      </Routes>

    </div>
  );
}

export default App;
