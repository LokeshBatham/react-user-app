import { Link } from 'react-router-dom';

const Header = ({ toggleSidebar }) => {
    return (
      <header className="bg-blue-600 text-white p-4 fixed top-0 left-0 w-full z-40">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            {/* Hamburger Icon */}
            <button
              onClick={toggleSidebar}
              className="text-white focus:outline-none md:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
  
            <h1 className="text-xl font-bold">
              <Link to="/">User Management</Link>
            </h1>
          </div>
          <nav className="hidden md:flex space-x-4">
            
          </nav>
          <div></div>
        </div>
      </header>
    );
  };
  
  export default Header;
  