import { AuthPage, Home, About, Regions, Tours, Custom, Reviews } from '../pages'
import { Route, Routes, Navigate } from "react-router-dom";
import { ProtectedRoute } from './hoc/ProtectedRoute'
import { AuthProvider } from './context/AuthContext';
import style from './global.css'

const App = () => {
  return (
    <div className="App">
      <AuthProvider>

        <Routes >

          <Route path="/registration" element={<AuthPage />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/reviews" element={<Reviews />} />

          <Route path="/regions" element={<ProtectedRoute roles = {['user', 'moderator']}> <Regions /></ProtectedRoute>} />
          <Route path="/tours" element={<ProtectedRoute roles = {['user', 'moderator']}><Tours /></ProtectedRoute>} />
          <Route path="/custom" element={<ProtectedRoute roles = {['user', 'moderator']}><Custom /></ProtectedRoute>} />



          <Route path="/" element={<Navigate to="/home" replace />} />


        </Routes>

      </AuthProvider>


    </div>
  );
}

export default App;
