import { Navigate, Outlet } from "react-router-dom";
import "./layout.scss";
import Navbar from "../components/navbar/Navbar";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";
import Footer from "../components/footer/Footer";


export const Layout = () => {
  return (
    <div className="layout">
        <div>
            <Navbar />
        </div>
        <div className="content">
            <Outlet />
        </div>
        <div >
          <Footer />
        </div>
    </div>
  )
}

export const RequiredAuthLayout = () => {
  const {currentUser} = useContext(AuthContext);
  if (!currentUser) {
    return <Navigate to="/login" />;
  }
  else {
    return (
      <div className="layout">
        <div className="navbar">
            <Navbar />
        </div>
        <div className="content">          
            <Outlet />          
        </div>
        <div className="footer">
          <Footer />
        </div>
      </div>
    )
  }

}