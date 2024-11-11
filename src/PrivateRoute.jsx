import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectLoggedIn } from "./redux/auth/selectors";
const PrivateRoute = ({ element, redirectTo = "/" }) => {
  const isLoggedIn = useSelector(selectLoggedIn);
  return isLoggedIn ? element : <Navigate to={redirectTo} replace />;
};

export default PrivateRoute;
