import { useRouter } from "next/router";
import { useContext } from "react";
import { AuthContext } from "../context/Auth";
const PrivateRoute = ({ children }) => {
  const {credData}=useContext(AuthContext)
  const router = useRouter()
  
  if (!credData.isAuth) {
    return  router.push("/signup")
  } else {
    return children;
  }
};

export default PrivateRoute;
