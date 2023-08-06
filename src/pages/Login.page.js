import React from "react";

export default function Login({ user, setUser }) {
  React.useEffect(() => {
    if (user.sub) {
      window.location.href = "/";
    }
  }, [user]);

  window.handleCredentialResponse = (credential) => {
    fetch(
      `${
        process.env.REACT_APP_API_URL
      }/api/login?credential=${encodeURIComponent(credential.credential)}`,
      {
        method: "POST",
      }
    ).then((response) => {
      if (response.status === 200) {
        response.json().then((user) => {
          setUser(user);
        });
      } else {
        response.text().then((text) => {
          alert(`Error: ${text}`);
        });
      }
    });
  };
  if (window.innerWidth > 800) {
    return (
      <div>
        <div className="flex flex-row absolute">
          <div className="flex justify-center items-center h-screen w-1/2 bg-gradient-to-r from-cyan-500 to-blue-500">
            <h2 className="text-center font-bold font-sans text-5xl lg:text-8xl text-white">
              Speak to YFF today! Please log-in first.
            </h2>
          </div>
          <div className="flex justify-center items-center h-screen w-1/2 bg-[#B3E6FB]">
            <div className="px-16 py-40 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500">
              <p className="mb-5 text-center font-bold text-white text-3xl">
                Sign-in with Google
              </p>
              <div className="flex justify-center">
                <div
                  id="g_id_onload"
                  data-client_id={process.env.REACT_APP_CLIENT_ID}
                  data-context="signin"
                  data-ux_mode="popup"
                  data-callback="handleCredentialResponse"
                  data-auto_prompt="false"
                ></div>
                <div
                  className="g_id_signin"
                  data-type="standard"
                  data-shape="rectangular"
                  data-theme="outline"
                  data-text="signin_with"
                  data-size="large"
                  data-logo_alignment="left"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex justify-center items-center h-screen w-screen bg-[#B3E6FB]">
        <div className="px-8 py-40 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500">
          <p className="mb-5 text-center font-bold text-white text-3xl">
            Sign-in with Google
          </p>
          <div className="flex justify-center">
            <div
              id="g_id_onload"
              data-client_id={process.env.REACT_APP_CLIENT_ID}
              data-context="signin"
              data-ux_mode="popup"
              data-callback="handleCredentialResponse"
              data-auto_prompt="false"
            ></div>
            <div
              className="g_id_signin"
              data-type="standard"
              data-shape="rectangular"
              data-theme="outline"
              data-text="signin_with"
              data-size="large"
              data-logo_alignment="left"
            ></div>
          </div>
        </div>
      </div>
    );
  }
}
