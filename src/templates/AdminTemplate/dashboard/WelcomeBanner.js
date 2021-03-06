import React from 'react';
import { useSelector } from 'react-redux';
import { Route } from 'react-router';

export default function WelcomeBanner(props) {
  const { userLogin } = useSelector(state => state.QuanLyNguoiDungReducer);
  return <Route exact path={props.path} render={(propsRoute) => {

    return (
      <div className="relative p-4 sm:p-6 rounded-sm overflow-hidden">

        {/* Background illustration */}
        <div className="absolute right-0 top-0 -mt-4 mr-16 pointer-events-none hidden xl:block" aria-hidden="true">
          <svg width="319" height="198" xmlnsXlink="http://www.w3.org/1999/xlink">
            <defs>
              <path id="welcome-a" d="M64 0l64 128-64-20-64 20z" />
              <path id="welcome-e" d="M40 0l40 80-40-12.5L0 80z" />
              <path id="welcome-g" d="M40 0l40 80-40-12.5L0 80z" />
              <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="welcome-b">
                <stop stopColor="#A5B4FC" offset="0%" />
                <stop stopColor="#818CF8" offset="100%" />
              </linearGradient>
              <linearGradient x1="50%" y1="24.537%" x2="50%" y2="100%" id="welcome-c">
                <stop stopColor="#4338CA" offset="0%" />
                <stop stopColor="#6366F1" stopOpacity="0" offset="100%" />
              </linearGradient>
            </defs>

          </svg>
        </div>

        {/* Content */}
        <div className="relative">
          <h1 className="text-2xl md:text-3xl text-gray-800 font-bold mb-1">Hello, {userLogin.hoTen}👋</h1>
        </div>

      </div>
    );
  }}/>
}

