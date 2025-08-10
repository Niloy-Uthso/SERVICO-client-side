import React from 'react';
import { Link } from 'react-router';

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 text-center p-6">
    
      <h1 className="text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-pink-600 animate-bounce">
        404
      </h1>

    
      <h2 className="text-3xl font-bold mt-4 text-gray-800">
        Oops! Page not found
      </h2>
      <p className="text-lg mt-2 text-gray-600 max-w-md">
        The page you’re looking for doesn’t exist or has been moved.
      </p>

    
      <Link
        to="/"
        className="mt-8 px-6 py-3 bg-gradient-to-r from-pink-500 to-red-500 text-white rounded-xl shadow-lg hover:scale-105 hover:shadow-2xl transition-transform duration-300 ease-in-out"
      >
        Go Home
      </Link>

    
      <div className="absolute top-10 left-10 w-24 h-24 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
    </div>
  );
};

export default ErrorPage;
