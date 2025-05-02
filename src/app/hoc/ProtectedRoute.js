import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsLoggedIn, selectUser } from '../model/authSlice';

export const ProtectedRoute = ({ children, role }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser)


  if (!isLoggedIn) {
    return <Navigate to="/registration" replace />;

  }
  if (user.role === 'admin') {
    return children;
  }
  if (user.role !== role) {
    return <Navigate to="/home" replace />;

  }

  return children;
};