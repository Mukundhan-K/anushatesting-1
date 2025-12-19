import React, {useCallback, useEffect} from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";

import Loader from "./Loader";

const CheckAuth = ({children, loading2, loading1}) => {

    const location = useLocation();

    const {isAuthenticated, user, authChecked} = useSelector((state)=>state.authReducer);
    // console.log(isAuthenticated, user);
    // useEffect(() => {
    //   dispatch(checkUser());
    // }, [dispatch]);
    
  // ⏳ WAIT until auth check completes 
    if (!authChecked || loading1 || loading2) {
      return <Loader />; // or null
    }

    if(isAuthenticated) {
      if (location.pathname.includes("/login")) {
        return <Navigate to="/admin" replace />;
      }
      else if ((location.pathname.includes("/admin")) && (!["admin", "editor"].includes(user?.role))) {
        return <Navigate to={"/error"} />;
      }
      else if ((user?.role == "editor") && (location.pathname.includes("/adduser"))) {
        return <Navigate to={"/admin/dashboard"} />;
      }
    };
    
    if ((!isAuthenticated) || ((user?.role !== "admin") && (user?.role !== "editor"))){
      if (location.pathname.includes("/admin")) {
        return <Navigate to="/" replace />
      }
    };

  return (<>
    {children}
  </>);
};

export default CheckAuth;