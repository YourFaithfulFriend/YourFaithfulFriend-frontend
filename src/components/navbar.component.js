import { useAtom } from "jotai";
import { Link } from "react-router-dom";
import userAtom from "../atom.js";
import React from "react";
import User from "./user.component";

export default function NavigationBar() {
  const [user, setUser] = useAtom(userAtom);

  if (window.innerWidth > 800) {
    return (
      <div>
        <nav className="bg-gradient-to-r from-blue-500 to-cyan-500">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <Link
              to="/"
              className="flex items-center font-extrabold text-white"
            >
              YourFaithfulFriend
            </Link>
            <div id="navigation-bar" className="w-full md:w-auto">
              <ul className="flex fel-col font-sans text-center md:text-right font-medium p-4 md:p-0 md:flex-row md:mt-0">
                <li className="mt-2.5 mr-10">
                  <Link to="/" className="block text-lg p-4 md:p-0 text-white">
                    Home
                  </Link>
                </li>
                <li className="mt-2.5">
                  <Link
                    to="/chat"
                    className="block text-lg p-4 md:p-0 text-white"
                  >
                    Chat
                  </Link>
                </li>
                <li className="ml-10">
                  <User user={user} setUser={setUser} />
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  } else {
    return (
      <div>
        <nav className="flex justify-center items-center bg-gradient-to-r from-blue-700 to-cyan-700">
          <div className="w-full flex  items-center justify-center mx-auto p-4">
            <div
              id="navigation-bar"
              className="flex justify-center items-center w-full md:w-auto"
            >
              <ul className="flex fel-col font-sans text-center md:text-right font-medium p-4 md:p-0 md:flex-row md:mt-0">
                <li>
                  <Link
                    to="/"
                    className="mr-10 block text-lg p-4 md:p-0 text-white"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/chat"
                    className="block text-lg p-4 md:p-0 text-white"
                  >
                    Chat
                  </Link>
                </li>
                <li className="ml-10">
                  <User user={user} setUser={setUser} />
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
