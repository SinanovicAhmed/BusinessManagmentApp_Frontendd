import { Navigate } from "react-router-dom";
import { parseCookie } from "../helpers/cookieParser";

interface IProtected {
  roles: string[];
  children: JSX.Element;
}

const Protected = ({ roles, children }: IProtected) => {
  const parsed_user_data = parseCookie();
  const role = parsed_user_data?.role;

  if (role === undefined) {
    return <Navigate to="/login" replace />;
  }
  if (roles.includes(role)) {
    return children;
  } else {
    return <Navigate to="/managment/suppliers" />;
  }
};
export default Protected;
