import React from 'react';
 

const ErrorPage = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-base-200 text-center">
      <h1 className="text-4xl font-bold text-red-600">Oops!</h1>
       
      
      <p className="text-lg mt-4">404,Page not found</p>
      
      <a href="/" className="btn btn-primary mt-6">Go Home</a>
    </div>
    );
};

export default ErrorPage;
