import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const userJson = localStorage.getItem("users");
  const user = userJson ? JSON.parse(userJson) : null;
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("users"); 
    navigate("/login");
  };

  const isAdmin = user && user.role === "admin";

  const adminNavList = (
    <li>
      <Link to="/admin-dashboard">Admin</Link>
    </li>
  );

  const userNavList = (
    <li>
      <Link to="/user-dashboard">User</Link>
    </li>
  );

  const navList = (
    <ul className="flex space-x-6 gap-5 text-gray-600 font-medium text-2xl px-3 py-2 rounded-md">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/doctor">Doctor</Link>
      </li>
      <li>
        <Link to="/blog">Blog</Link>
      </li>
      <li>
        <Link to="/testimonials">Testimonials</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
      {!user ? (
        <li>
          <Link to="/login">Login</Link>
        </li>
      ) : (
        isAdmin ? adminNavList : userNavList
      )}
      {user && (
        <li className="cursor-pointer" onClick={logout}>
          Logout
        </li>
      )}
    </ul>
  );

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
          <Link
              to='/'
              className='text-gray-900 text-3xl font-semibold  flex items-center'
            >
              <img src='/dist/assets/images/logo.jpg' className='h-14 w-auto ' />
            </Link>
          </div>
          <div className="hidden sm:flex sm:items-center sm:ml-6">
            {navList}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;