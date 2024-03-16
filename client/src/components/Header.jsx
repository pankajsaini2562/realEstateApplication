import React from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <header className="bg-gray-400 ">
      <div className="flex justify-between max-w-7xl mx-auto items-center p-3">
        <Link to={"/"}>
          <p className="flex text-xl font-bold">
            <span className="text-slate-700">Saini</span>
            <span className="text-slate-950">Estate</span>
          </p>
        </Link>

        <form className="bg-slate-100 flex p-2 flex-wrap rounded-lg items-center">
          <input
            className="bg-transparent p-1 focus:outline-none w-11 sm:w-64"
            type="text"
            placeholder="Search here ..."
          />
          <FaSearch className="text-slate-600" />
        </form>
        <ul className="flex gap-4">
          <Link to={"/"}>
            <li className="text-slate-700 hidden sm:inline font-bold hover:underline">
              Home
            </li>
          </Link>
          <Link to={"/about"}>
            <li className="text-slate-700 hidden sm:inline font-bold hover:underline">
              about
            </li>
          </Link>
          <Link to={"/sign-in"}>
            <li className="text-slate-700  sm:inline font-bold hover:underline">
              SignIn
            </li>
          </Link>
        </ul>
      </div>
    </header>
  );
}
