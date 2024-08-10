import "./App.css";
import React from "react";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Blog from "./Components/Blog";
import Testimonials from "./Components/Testimonials";
import Login from "./registration/Login";
import Contact from "./Components/Contact";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignUp from "./registration/SignUp";
import MyState from "./context/MyState";
import UserDashboard from "./user/UserDashboard";
import AdminDashboard from "./admin/AdminDashboard";
import AddBlog from "./admin/AddBlog";
import NoPage from "./Components/NoPage";
import { Toaster } from "react-hot-toast";
import { ProtectedRouteForUser } from "./protectedRoute/ProtectedRouteForUser";
import { ProtectedRouteForAdmin } from "./protectedRoute/ProtectedRouteForAdmin";
import RequestAppointment from "./user/RequestAppointment";
import Footer from "./Components/Footer";
import Doctor from "./Components/Doctor";
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
