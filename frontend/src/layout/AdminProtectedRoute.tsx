
import { ReactNode } from "react";
import { useAppSelector } from "../redux/hook";
import { selectCurrentUser, useCurrentToken} from "../redux/features/auth/authSlice";
import { Navigate } from "react-router-dom";
// import { verifyToken } from "../utils/verifyToken";

const AdminProtectedRoute = ({children}: {children: ReactNode}) => {
 const token = useAppSelector(useCurrentToken);
 console.log(token);

  const user = useAppSelector(selectCurrentUser);

 
  if(user && user.role === "customer"){
    return <Navigate to="/" replace={true}/>
  }
  return children
};

export default AdminProtectedRoute;
