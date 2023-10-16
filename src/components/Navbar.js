import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-gray-900 text-white h-16 flex justify-between items-center p-4">
      <div>
        <img
          src="/images/logo1.png"
          alt="App Logo"
          className="w-24 h-16 mr-2 rounded-full"
        />
      </div>

      <nav>
        <ul className="flex space-x-4">
          <li>
            <Link to="/" className="text-white font-bold">
              Dashboard
            </Link>
          </li>
          <li>
            <Link to="/adpage" className="text-white font-bold">
              Create Ad
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;





