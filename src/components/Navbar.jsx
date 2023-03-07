import { useAuth0 } from '@auth0/auth0-react';
import Logo from '../assets/logo.png'

import { LogoutButton } from './index'

const Navbar = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <img 
              src={Logo} 
              alt="Logo"
              className='w-[50px] h-[50px] object-contain'
            />
            <div className="ml-2 text-white font-bold text-lg font-poppins hidden sm:block">Weather Forecast</div>
          </div>
          <div className="flex items-center">
            {isAuthenticated && (
              <LogoutButton />
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
