import React from 'react'
import { useParams } from 'react-router-dom';

export default function Users() {
  const { userid } = useParams();

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold text-orange-700">User Details Page</h2>
      <p className="mt-2">User ID from URL: <strong>{userid}</strong></p>
    </div>
  );
}

