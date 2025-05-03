import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsLoggedIn, selectUser } from '../model/authSlice';

export const ProtectedRoute = ({ children, roles }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser)


  if (!isLoggedIn) {
    return <Navigate to="/registration" replace />;

  }
  if (user.role === 'admin') {
    return children;
  }
  if (user.role === 'moderator') {
    return children
  }
  if (!roles.includes(user.role)) {
    return <Navigate to="/home" replace />;
  }

  return children;
};