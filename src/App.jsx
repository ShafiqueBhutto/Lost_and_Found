import React from "react"
import { Routes, Route } from "react-router-dom"
import Home from './pages/Home/Home'
import ReportLost from './pages/ReportLost/ReportLost'
import ReportFound from './pages/ReportFound/ReportFound';
import NotFound from './pages/NotFound/NotFound';
import Navbar from "./components/Navbar/Navbar";
import LostItems from "./pages/LostItems/LostItems";
import FoundItems from "./pages/FoundItems/FoundItems";
import ItemDetails from "./pages/ItemDetails/ItemDetails";
import Footer from "./components/Footer/Footer";
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'


function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home/>}/>
        <Route path="/report-lost" element={<ReportLost/>}/>
        <Route path="/report-found" element={<ReportFound/>}/>
        <Route path="/found-items" element={<FoundItems />} />
        <Route path="/lost-items" element={<LostItems />} />
        {/* <Route path="/item/:id" element={<ItemDetails />} /> */}
        <Route path="/item-details/:type/:id" element={<ItemDetails />} />
        <Route path="*" element={<NotFound/>}/>
      </Routes>
      <Footer/>

    </>
  )
}
export default App


