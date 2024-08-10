import { Button } from "@material-tailwind/react";
import React from "react";
import { useNavigate, Link } from "react-router-dom";

const UserDashboard = () => {
  const user = JSON.parse(localStorage.getItem("users"));
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear("users");
    navigate("/login");
  };

  return (
    <div className="bg-gray-500 h-screen flex justify-center items-center">
      <div className="bg-gray-200 p-8  w-full h-screen   rounded-xl shadow-lg">
        <div className="flex flex-col items-center">
          <img
            src="https://cdn-icons-png.flaticon.com/128/2202/2202112.png"
            className="w-32 h-32 rounded-full mb-4"
            alt="User Avatar"
          />
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-2">Name: {user?.name}</h1>
            <h2 className="text-lg font-medium mb-2">Email: {user?.email}</h2>
            <h2 className="text-lg font-medium mb-2">Date: {user?.date}</h2>
            <h2 className="text-lg font-medium mb-4">Role: {user?.role}</h2>
            <Button
              color="blue"
              buttonType="filled"
              size="lg"
              ripple="light"
              onClick={logout}
            >
              Logout
            </Button>
          </div>
          <div className="flex justify-evenly items-center gap-8 mt-5">
            <Link
              className="text-xl font-thin mt-3 text-blue-300 border border-black py-2 px-4 rounded inline-block hover:bg-blue-300 hover:text-white hover:border-blue-300 transition duration-300 ease-in-out"
              to="/"
            >
              Home
            </Link>
            <Link
              className="text-xl font-thin mt-3 text-blue-300 border border-black py-2 px-4 rounded inline-block hover:bg-blue-300 hover:text-white hover:border-blue-300 transition duration-300 ease-in-out"
              to="/blog"
            >
              See Blog
            </Link>
            <Link
              className="text-xl font-thin mt-3 text-blue-300 border border-black py-2 px-4 rounded inline-block hover:bg-blue-300 hover:text-white hover:border-blue-300 transition duration-300 ease-in-out"
              to="/request-appoinment"
            >
            Book Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;

