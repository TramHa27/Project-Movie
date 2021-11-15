import React from "react";
import { history } from "../../../App";
export default function Header(props) {
  return (
    <header className="p-2 bg-black text-white fixed z-50 w-full bg-opacity-30">
      <div className="container flex justify-between h-16 mx-auto">
        <a
          href="/"
          aria-label="Back to homepage"
          className="flex items-center p-2"
        >
          <img
            src="https://i.imgur.com/lC22izJ.png"
            alt="logo"
            style={{ maxWidth: "55px" }}
          />
        </a>
        <ul className="items-stretch hidden space-x-3 lg:flex">
          <li className="flex">
            <a
              href="/"
              className="flex items-center -mb-0.5 border-b-2 px-4 border-transparent text-red-600 border-red-600"
            >
              Trang chủ
            </a>
          </li>
          <li className="flex">
            <a
              href="/"
              className="flex items-center -mb-0.5 border-b-2 px-4 border-transparent hover:text-red-600"
            >
              Liên hệ
            </a>
          </li>
          <li className="flex">
            <a
              href="/"
              className="flex items-center -mb-0.5 border-b-2 px-4 border-transparent hover:text-red-600"
            >
              Tin tức
            </a>
          </li>
          <li className="flex">
            <a
              href="/"
              className="flex items-center -mb-0.5 border-b-2 px-4 border-transparent hover:text-red-600"
            >
              Ứng dụng
            </a>
          </li>
        </ul>
        <div className="items-center flex-shrink-0 hidden lg:flex">
          <button onClick={() => {
            history.push('/login')
          }} className="self-center px-8 py-2 rounded">Sign in</button>
          <button className="self-center px-8 py-2 font-semibold rounded bg-red-600 text-white">
            Sign up
          </button>
        </div>
        <button className="p-4 lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6 text-coolGray-800"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>
    </header>
  );
}
