import React, { useEffect } from 'react';

const ProtectedRoute = () => {
  const fetchData = async () => {
    try {
      const response = await fetch('/api/v1');
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  });
  return <div>ProtectedRoute123</div>;
};

export default ProtectedRoute;
