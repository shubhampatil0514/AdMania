import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function AdsSubmitted() {
  const navigate = useNavigate();
  useEffect(() => {
    const delay = 600; 
    const timeoutId = setTimeout(() => {
      navigate('/adpage');
    }, delay);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [navigate]);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="text-2xl text-blue-500">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-16 w-16"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 13l4 4L19 7"
          />
        </svg>
      </div>
      <div className="text-2xl mt-4">Submitted</div>
    </div>
  );
}

export default AdsSubmitted;

