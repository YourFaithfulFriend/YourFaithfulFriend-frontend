import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React from "react";
import { useAtom } from "jotai";
import userAtom from "./atom.js";
import ReactDOM from "react-dom";
import "./index.css";

// Pages
import Home from "./pages/Home.page";
import Login from "./pages/Login.page";
import Chat from "./pages/Chat.page";

function App() {
  const [user, setUser] = useAtom(userAtom);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home user={user} />,
    },
    {
      path: "/login",
      element: <Login user={user} setUser={setUser} />,
    },
    {
      path: "/chat",
      // element: user.sub ? (
      //   <Chat user={user} />
      // ) : (
      //   <p className="fadeInDelayed" style={{ textAlign: "center" }}>
      //     <a href="/login" style={{textDecoration: "underline"}}>You must be logged in to access this page.</a>
      //   </p>
      // ),
      element: <Chat user={user} />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
