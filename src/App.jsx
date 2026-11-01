
import React from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import Home from './pages/Home/Home';
import ReportLost from './pages/ReportLost/ReportLost';
import ReportFound from './pages/ReportFound/ReportFound';
import NotFound from './pages/NotFound/NotFound';
import Navbar from "./components/Navbar/Navbar";
import LostItems from "./pages/LostItems/LostItems";
import FoundItems from "./pages/FoundItems/FoundItems";
import ItemDetails from "./pages/ItemDetails/ItemDetails";
import Footer from "./components/Footer/Footer";
import Signup from './pages/Signup/Signup';
import Login from './pages/Login/Login';
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import AdminPanel from "./pages/AdminPanel/AdminPanel";
import { useAuth } from "./context/AuthContext";

function App() {
  const location = useLocation();
  const isAuthPage = location.pathname === "/signup" || location.pathname === "/login";

  const { user } = useAuth(); 

  return (
    <div className="page-wrapper">
      {!isAuthPage && <Navbar />}

      <main className="main-content">
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          
          <Route
            path="/admin/dashboard"
            element={
              <PrivateRoute>
                {user?.isAdmin ? <AdminPanel /> : <Navigate to="/" />}
              </PrivateRoute>
            }
          />

          <Route
            path="/report-lost"
            element={
              <PrivateRoute>
                <ReportLost />
              </PrivateRoute>
            }
          />
          <Route
            path="/report-found"
            element={
              <PrivateRoute>
                <ReportFound />
              </PrivateRoute>
            }
          />
          <Route path="/found-items" element={<FoundItems />} />
          <Route path="/lost-items" element={<LostItems />} />
          <Route path="/item-details/:type/:id" element={<ItemDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      {!isAuthPage && <Footer />}
    </div>
  );
}


export default App;
