import { Link } from "react-router-dom";
import React from "react";

export default function User({ user, setUser }) {
  const [userSettingsOpen, setUserSettingsOpen] = React.useState(false);

  return user.sub ? (
    <div>
      {userSettingsOpen === true ? (
        <div
          className="userSettingsOverlay"
          onClick={() => {
            setUserSettingsOpen(false);
          }}
        >
          <div className="userSettings rounded-lg flex flex-row bg-blue-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="closeUserSettings"
              icon="fa-solid fa-xmark"
              onClick={() => {
                setUserSettingsOpen(false);
              }}
              height="1em"
              viewBox="0 0 384 512"
            >
              <path d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z" />
            </svg>
            <button
              onClick={() => {
                setUser({});
                setUserSettingsOpen(false);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height=".7em"
                viewBox="0 0 512 512"
              >
                <path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z" />
              </svg>
              &nbsp;Log out
            </button>
          </div>
        </div>
      ) : (
        <></>
      )}
      <img
        className="profilePicture border-2 border-white"
        src={user.picture}
        alt={user.name}
        onClick={() => {
          setUserSettingsOpen(true);
        }}
      ></img>
    </div>
  ) : (
    <Link
      to="/login"
      className="md:mt-2.5 mr-10 block text-lg p-4 md:p-0 text-white"
    >
      Login
    </Link>
  );
}
