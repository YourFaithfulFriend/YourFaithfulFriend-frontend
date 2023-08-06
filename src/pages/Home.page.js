import React from "react";
import NavigationBar from "../components/navbar.component";

export default function WelcomePage() {
  document.body.classList.add("bg-[#3898FF]");
  let name = "YourFaithfulFriend";
  if (window.innerWidth < 800) {
    name = "YFF";
  }

  return (
    <div>
      <NavigationBar />
      <div>
        <div className="mt-20 flex justify-center text-center">
          <p className="mx-20 text-white font-semibold text-4xl lg:text-6xl">
            {name} gives{" "}
            <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-cyan-700">
              everyone
            </span>{" "}
            a person to talk to.
          </p>
        </div>
        <div className="mt-36 flex justify-center text-center">
          <p className="text-white font-semibold text-lg">
            🔥 Some of our features include:
          </p>
        </div>
        <div className="flex items-center justify-center lg:flex-row flex-col">
          <div className="m-5 h-96 md:h-80 w-3/5 lg:w-1/4 p-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg border-4 border-[#2464EA]">
            <p className="mb-5 text-center font-extrabold text-white text-xl xl:text-2xl">
              ✨ An AI Friend
            </p>
            <p className="text-center text-white ext-md xl:text-lg">
              YourFaithfulFriend provides a friend that you can open up to.
              Every sensitive conversation is private: all free, all anonymous.
            </p>
          </div>
          <div className="m-5 h-96 md:h-80 w-3/5 lg:w-1/4 p-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg border-4 border-[#2464EA]">
            <p className="mb-5 text-center font-extrabold text-white text-xl xl:text-2xl">
              ✨ All Languages
            </p>
            <p className="text-center text-white text-md xl:text-lg">
              YourFaithfulFriend supports all types of major languages, ensuring
              nobody is left out. Thus, YourFaithfulFriend can have a
              conversation with anyone!
            </p>
          </div>
          <div className="m-5 h-96 md:h-80 w-3/5 lg:w-1/4 p-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg border-4 border-[#2464EA]">
            <p className="mb-5 text-center font-extrabold text-white text-xl xl:text-2xl">
              ✨ Specific Advice
            </p>
            <p className="text-center text-white text-md xl:text-lg">
              YourFaithfulFriend offers specific advice to help you get answers
              with your mental health questions.
            </p>
          </div>
        </div>
        <div className="mt-32 flex justify-center text-center">
          <p className="text-white font-semibold text-lg"> 🔥YouTube Demo:</p>
        </div>
        <div className="flex items-center justify-center">
          <iframe
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="mx-20 mt-5 mb-20 rounded-lg border-4 border-[#2464EA]"
            height="480"
            // replace YouTube video here:
            src="https://www.youtube.com/embed/3fTfXBkvSdM"
            title="YouTube Demo"
            width="853"
          />
        </div>
      </div>
    </div>
  );
}
