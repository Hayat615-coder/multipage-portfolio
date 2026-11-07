import { Link } from "react-router/internal/react-server-client";

const About = () => {
  return (
    <>
      <h1 className="tracking-wider bg-linear-to-r from-[hsl(162,100%,41%)] to-[hsl(258,90%,66%)] bg-clip-text text-transparent text-center text-5xl">
        About Me
      </h1>
      <p className="text-4xl font-bold text-white md:mx-96 text-center mt-8">
        Building with purpose,
        <span className="text-4xl font-bold bg-linear-to-r from-[hsl(162,100%,41%)] to-[hsl(258,90%,66%)] bg-clip-text text-transparent">
          learning every day.
        </span>
      </p>
      <p className="text-white text-center md:mx-64 pt-6">
        I am a Software Engineering student at Jimma University and a Frontend
        Developer passionate about building responsive, user-friendly web
        applications.
        <span className="text-[hsl(162,100%,41%)]">Specializing </span> in
        React, TypeScript, Tailwind CSS, Vite, and Git, I{" "}
        <span className="text-[hsl(186,100%,50%)]"> focus</span> on transforming
        design concepts into clean, functional code. My portfolio highlights
        hands-on experience with API integration, state management, and
        multi-theme designs developed through{" "}
        <span className="text-[hsl(186,100%,50%)]">real-world projects</span>
        and Frontend Mentor challenges. Dedicated to continuous learning, I
        strive to craft scalable digital experiences with intuitive interfaces.
      </p>

      <div className="grid grid-rows-1 md:grid-cols-2 items-center justify-center gap-6 mx-14 md:mx-48 mt-10">
        <div className="border flex flex-row items-center gap-4 border-gray-400 hover:border-[] bg-gray-800 hover:border-[hsl(186,100%,50%)] py-4 px-8 rounded-lg hover:transition-transform hover:scale-105 hover:translate-y-1 duration-300">
          <i
            className="fa-solid fa-code pr-12 pl-6 py-4 rounded-lg text-[hsl(162,100%,41%)] bg-linear-to-r from-[hsl(222,63%,8%)] to-[hsl(224,60%,11%)]"
            aria-hidden="true"
          ></i>
          <p className="flex flex-col">
            <span className="text-[hsl(162,100%,41%)]">
              Full-Stack Development Student
            </span>

            <span className="text-white tracking-wide">
              React .TypeScript .Tailwindcss
            </span>
          </p>
        </div>
        <div className="border hover:border-[hsl(186,100%,50%)] flex flex-row items-center gap-4 border-gray-400 bg-gray-800   py-4 px-8 rounded-lg hover:transition-transform hover:scale-105 hover:translate-y-1 duration-300">
          <i
            className="fa-brands fa-github pr-12 pl-6 py-4 rounded-lg text-[hsl(162,100%,41%)] bg-linear-to-r from-[hsl(222,63%,8%)] to-[hsl(224,60%,11%)]"
            aria-hidden="true"
          ></i>
          <p className="flex flex-col">
            <span className="text-[hsl(162,100%,41%)]">Open Source</span>

            <span className="text-white tracking-wide">
              Active GitHub Contributer
            </span>
          </p>
        </div>
        <div className="border hover:border-[hsl(186,100%,50%)] flex flex-row items-center gap-4 border-gray-400 bg-gray-800   py-4 px-8 rounded-lg hover:transition-transform hover:scale-105 hover:translate-y-1 duration-300">
          <i
            className="fa-solid fa-book-open pr-12 pl-6 py-4 rounded-lg text-[hsl(162,100%,41%)] bg-linear-to-r from-[hsl(222,63%,8%)] to-[hsl(224,60%,11%)]"
            aria-hidden="true"
          ></i>
          <p className="flex flex-col">
            <span className="text-[hsl(162,100%,41%)]">
              Software Enginnering Student
            </span>

            <span className="text-white tracking-wide">
              Study Basics Of Software enginnering
            </span>
          </p>
        </div>
      </div>
      <h1 className="text-[hsl(186,100%,50%)] md:ml-36 ml-14 mt-6">
        <i className="fa-solid fa-trophy text-[hsl(186,100%,50%)]"></i>{" "}
        Achivment & Highlights
      </h1>
      <div className="grid grid-rows-1 md:grid-cols-2 items-center justify-center gap-6 mx-14 md:mx-48 mt-10">
        <div className="border hover:border-[hsl(186,100%,50%)] flex flex-row items-center gap-4 border-gray-400 bg-gray-800   py-4 px-8 rounded-lg hover:transition-transform hover:scale-105 hover:translate-y-1 duration-300">
          <i
            className="fa-solid fa-book-open pr-12 pl-6 py-4 rounded-lg text-[hsl(162,100%,41%)] bg-linear-to-r from-[hsl(222,63%,8%)] to-[hsl(224,60%,11%)]"
            aria-hidden="true"
          ></i>
          <p className="flex flex-col">
            <span className="text-white tracking-wide">
              Continious learning
            </span>
          </p>
        </div>
        <div className="border hover:border-[hsl(186,100%,50%)] flex flex-row items-center gap-4 border-gray-400 bg-gray-800   py-4 px-8 rounded-lg hover:transition-transform hover:scale-105 hover:translate-y-1 duration-300">
          <i
            className="fa-solid fa-trophy pr-12 pl-6 py-4 rounded-lg text-[hsl(162,100%,41%)] bg-yellow-200"
            aria-hidden="true"
          ></i>
          <p className="flex flex-col">
            <span className="text-white tracking-wide">
              10+ Deployed Projects
            </span>
          </p>
        </div>
      </div>
      <h1 className="text-[hsl(186,100%,50%)] md:ml-36 ml-14 mt-6">
        <i className="fa-solid fa-screwdriver-wrench text-[hsl(186,100%,50%)]"></i>
        Technologies I Use
      </h1>
      <div className="flex flex-row gap-8 mt-10 ml-10 md:ml-48">
        <button className=" bg-transparent rounded-lg px-4 py-2 border border-gray-400 hover:bg-[hsl(186,100%,50%)] transform hover:translate-y-1  transition-all hover:scale-105">
          <i className="fa-brands fa-react text-2xl text-white"></i>
        </button>
        <button className=" bg-transparent rounded-lg px-4 py-2 border border-gray-400 hover:bg-[hsl(186,100%,50%)] transform hover:translate-y-1  transition-all hover:scale-105">
          <i className="fa-brands fa-tailwind-css text-2xl text-white"></i>
        </button>
        <button className=" bg-transparent rounded-lg px-4 py-2 border border-gray-400 hover:bg-[hsl(186,100%,50%)] transform hover:translate-y-1  transition-all hover:scale-105">
          <i className="fa-brands fa-typescript text-2xl text-white"></i>
        </button>
        <button className=" bg-transparent rounded-lg px-4 py-2 border border-gray-400 hover:bg-[hsl(186,100%,50%)] transform hover:translate-y-1  transition-all hover:scale-105">
          <i
            className="fa-brands fa-html5 text-2xl text-white"
            aria-hidden="true"
          ></i>
        </button>
      </div>
      <div className="flex flex-row justify-between">
        <Link to="/" className="mt-6 flex items-center">
          <button
            type="button"
            className="bg-[hsl(162,100%,41%)] p-2 rounded-full"
          >
            <i className="fa-solid fa-arrow-left text-white"></i>
          </button>
        </Link>
        <Link to="/pages/Project" className="mt-6 flex items-center">
          <button
            type="button"
            className="bg-[hsl(162,100%,41%)] p-2 rounded-full"
          >
            <i className="fa-solid fa-arrow-right text-white"></i>
          </button>
        </Link>
      </div>
    </>
  );
};

export default About;
