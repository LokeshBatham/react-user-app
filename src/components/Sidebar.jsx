import { Link } from 'react-router-dom';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <aside
      className={`bg-gray-800 text-white fixed top-0 left-0 h-screen transform ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } transition-transform w-64 z-50`}
    >
      {/* Close Icon */}
      <div className="flex justify-end p-4">
        <button
          onClick={toggleSidebar}
          className="text-white focus:outline-none"
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
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      {/* Navigation Links */}
      <nav className="mt-4">
        <ul className="space-y-2">
          <li>
            <Link to="/" className="block px-4 py-2 hover:bg-gray-600 rounded-md">
              Home
            </Link>
          </li>
          
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
