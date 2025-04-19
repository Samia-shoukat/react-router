import React, { useEffect, useState } from 'react';

const Github = () => {
  const [data, setData] = useState({}); // Use object instead of array for user data

  useEffect(() => {
    fetch("https://api.github.com/users/Samia-shoukat")
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setData(data); // 🔥 Set data to state here
      })
      .catch(error => console.error("Error fetching GitHub data:", error));
  }, []);

  return (
    <div className=' text-center bg-gray-600 text-white p-4'>
      Github Followers: {data.followers ?? 'Loading...'}
    </div>
  );
};

export default Github;
