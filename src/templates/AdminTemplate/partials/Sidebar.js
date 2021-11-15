import React, { useEffect, useRef } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

function Sidebar({
  sidebarOpen,
  setSidebarOpen
}) {

  const location = useLocation();
  const { pathname } = location;
  const page = pathname.split('/')[2];

  const trigger = useRef(null);
  const sidebar = useRef(null);

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!sidebar.current || !trigger.current) return;
      if (!sidebarOpen || sidebar.current.contains(target) || trigger.current.contains(target)) return;
      setSidebarOpen(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!sidebarOpen || keyCode !== 27) return;
      setSidebarOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });

  return (
    <div className="lg:w-64">
      {/* Sidebar backdrop (mobile only) */}
      <div className={`fixed inset-0 bg-gray-900 bg-opacity-30 z-40 lg:hidden lg:z-auto transition-opacity duration-200 ${sidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} aria-hidden="true"></div>

      {/* Sidebar */}
      <div
        id="sidebar"
        ref={sidebar}
        className={`absolute z-40 left-0 top-0 lg:static lg:left-auto lg:top-auto lg:translate-x-0 transform h-screen overflow-y-scroll lg:overflow-y-auto no-scrollbar w-64 flex-shrink-0 bg-gray-800 p-4 transition-transform duration-200 ease-in-out ${sidebarOpen ? 'translate-x-0' : '-translate-x-64'}`}
      >

        {/* Sidebar header */}
        <div className="flex justify-between mb-10 pr-3 sm:px-2">
          {/* Close button */}
          <button
            ref={trigger}
            className="lg:hidden text-gray-500 hover:text-gray-400"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            aria-controls="sidebar"
            aria-expanded={sidebarOpen}
          >
            <span className="sr-only">Close sidebar</span>
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.7 18.7l1.4-1.4L7.8 13H20v-2H7.8l4.3-4.3-1.4-1.4L4 12z" />
            </svg>
          </button>
          {/* Logo */}
          <NavLink exact to="/" className="block">
            <div className="text-center">
              <img
                src="https://i.imgur.com/lC22izJ.png"
                alt="logo"
                style={{ maxWidth: "50px", margin: "10px auto" }}
              />
              <p className="text-lg font-semibold text-gray-200">Movie Cybersoft</p>
            </div>
          </NavLink>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-xs uppercase text-gray-500 font-semibold pl-3">Pages</h3>
          <ul className="mt-1">
            <li className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${page === 'users' && 'bg-gray-900'}`}>
              <NavLink exact to="/admin/users" className={`block text-gray-200 hover:text-white transition duration-150 ${page === 'users' && 'hover:text-gray-200'}`}>
                <div className="flex flex-grow">
                  <svg className="flex-shrink-0 h-6 w-6 mr-3 " width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" className={`fill-current text-gray-600 ${page === 'users' && 'text-indigo-500'}`} />
                    <path d="M5.52 19c.64-2.2 1.84-3 3.22-3h6.52c1.38 0 2.58.8 3.22 3" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <span className="text-sm font-medium">Users</span>
                </div>
              </NavLink>
            </li>
            <li className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${page === 'adduser' && 'bg-gray-900'}`}>
              <NavLink exact to="/admin/adduser" className={`block text-gray-200 hover:text-white transition duration-150 ${page === 'adduser' && 'hover:text-gray-200'}`}>
                <div className="flex flex-grow">
                  <svg className="flex-shrink-0 h-6 w-6 mr-3" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"></path>
                    <path d="M16 11h6m-3 -3v6"></path>
                  </svg>
                  <span className="text-sm font-medium">Add User</span>
                </div>
              </NavLink>
            </li>
            <li className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${page === 'films' && 'bg-gray-900'}`}>
              <NavLink exact to="/admin/films" className={`block text-gray-200 hover:text-white transition duration-150 ${page === 'films' && 'hover:text-gray-200'}`}>
                <div className="flex flex-grow">
                  <svg className="flex-shrink-0 h-6 w-6 mr-3" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18" className={`fill-current text-gray-600 ${page === 'films' && 'text-indigo-500'}`}></rect>
                    <line x1="7" y1="2" x2="7" y2="22"></line><line x1="17" y1="2" x2="17" y2="22"></line>
                    <line x1="2" y1="12" x2="22" y2="12"></line><line x1="2" y1="7" x2="7" y2="7"></line>
                    <line x1="2" y1="17" x2="7" y2="17"></line><line x1="17" y1="17" x2="22" y2="17"></line>
                    <line x1="17" y1="7" x2="22" y2="7"></line>
                  </svg>
                  <span className="text-sm font-medium">Films</span>
                </div>
              </NavLink>
            </li>
            <li className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${page === 'addfilm' && 'bg-gray-900'}`}>
              <NavLink exact to="/admin/addfilm" className={`block text-gray-200 hover:text-white transition duration-150 ${page === 'addfilm' && 'hover:text-gray-200'}`}>
                <div className="flex flex-grow">
                  <svg className="flex-shrink-0 h-6 w-6 mr-3" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V8l-6-6z" className={`fill-current text-gray-600 ${page === 'addfilm' && 'text-indigo-500'}`} /><path d="M14 3v5h5M12 18v-6M9 15h6" />
                  </svg>
                  <span className="text-sm font-medium">Add Film</span>
                </div>
              </NavLink>
            </li>

          </ul>
        </div>

      </div>
    </div>
  );
}

export default Sidebar;


