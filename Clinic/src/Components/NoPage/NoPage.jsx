import React from 'react';
import { Link } from 'react-router-dom';

const NoPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-gray-800">
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="text-lg mb-6">Oops! The page you're looking for doesn't exist.</p>
      <img
        src="https://via.placeholder.com/400x300" // You can replace this with your image source
        alt="Page Not Found"
        className="mb-6"
      />
      <Link to="/" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md">
        Go Back Home
      </Link>
    </div>
  );
};

export default NoPage;
