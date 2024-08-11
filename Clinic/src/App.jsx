import "./App.css";
import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import About from "./Components/About/About";
import Blog from "./Components/Blog/Blog";
import Testimonials from "./Components/Testimonials/Testimonials";
import Login from "./registration/Login/Login";
import Contact from "./Components/Contact/Contact";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignUp from "./registration/SignUp/SignUp";
import MyState from "./context/MyState";
import UserDashboard from "./user/UserDashboard/UserDashboard";
import AdminDashboard from "./admin/AdminDashboard/AdminDashboard";
import AddBlog from "./admin/AddBlog/AddBlog";
import NoPage from "./Components/NoPage/NoPage";
import { Toaster } from "react-hot-toast";
import { ProtectedRouteForUser } from "./protectedRoute/ProtectedRouteForUser";
import { ProtectedRouteForAdmin } from "./protectedRoute/ProtectedRouteForAdmin";
import RequestAppointment from "./user/RequestAppointment/RequestAppointment";
import Footer from "./Components/Footer/Footer";
import Doctor from "./Components/Doctor/Doctor";
// import Appointment from "./admin/Appoinment";
function App() {
  return (
    <div>
      <MyState>
        <Router>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<About />} />
            <Route exact path="/doctor" element={<Doctor />} />
            <Route exact path="/blog" element={<Blog />} />
            <Route exact path="/testimonials" element={<Testimonials />} />
            <Route exact path="/contact" element={<Contact />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/sign-up" element={<SignUp />} />
            <Route
              path="/user-dashboard"
              element={
                <ProtectedRouteForUser>
                  <UserDashboard />
                </ProtectedRouteForUser>
              }
            />
            <Route
              path="/admin-dashboard"
              element={
                <ProtectedRouteForAdmin>
                  <AdminDashboard />
                </ProtectedRouteForAdmin>
              }
            />
            <Route
              path="/addBlog"
              element={
                <ProtectedRouteForAdmin>
                  <AddBlog />
                </ProtectedRouteForAdmin>
              }
            />
            <Route path="/*" element={<NoPage />} />
            {/* <Route path="/request-appoinment" element={<RequestAppointment />} /> */}
            <Route
              path="/request-appoinment"
              element={
                <ProtectedRouteForUser>
                  <RequestAppointment />
                </ProtectedRouteForUser>
              }
            />
          </Routes>
          <Toaster />
          <Footer/>
        </Router>
      </MyState>
    </div>
  );
}

export default App;
