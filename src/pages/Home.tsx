import portfolioImage from "../assets/portfolio.jpg";
import { Link } from "react-router";

const Home = () => {
  return (
    <>
      <div className="flex flex-col-reverse md:flex-row gap-14 items-center  px-4 md:mt-24">
        <div className="flex-1/12">
          <h1 className="text-5xl font-bold text-white">
            Hi,I'm <br></br>{" "}
            <span className="bg-linear-to-r from-[hsl(162,100%,41%)] to-[hsl(186,100%,50%)] bg-clip-text text-transparent">
              Hayat Abdurehman
            </span>
          </h1>
          <h2 className="text-3xl text-white">
            Software Engineering & Full-Stack Development Student
          </h2>
          <p className="text-white py-8 font-serif">
            i'm Hayat Abdurehman,a passionate Software Engineering student at
            Jimma University and a dedicated Frontend Developer with a strong
            drive for crafting intuitive, pixel-perfect, and responsive web
            applications.
          </p>
          <div>
            <div className="flex flex-row gap-8">
              <Link
                to="./pages/project"
                className="border border-[hsl(162,100%,41%)] bg-linear-to-r from-[hsl(162,100%,41%)] to-[hsl(258,90%,66%)]  py-2 items-center gap-2 rounded-lg text-white px-5 text-sm font-semibold shadow-sm transition-all hover:-translate-y-0.5 flex flex-row"
              >
                View My Work
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  aria-hidden="true"
                  className="lucide lucide-arrow-down-right h-4 w-4 text-white"
                >
                  <path d="m7 7 10 10"></path>
                  <path d="M17 7v10H7"></path>
                </svg>
              </Link>
              <Link to="./pages/contact">
                <button
                  type="button"
                  className="flex flex-row gap-2 border px-2 py-2 items-center transition-all hover:-translate-y-0.5 rounded-lg border-[#00D294] text-[#00D294]"
                >
                  <i
                    className="fa-regular fa-envelope overflow-hidden bg-clip-text hover:text-transparent "
                    aria-hidden="true"
                  ></i>
                  <p>Get in touch</p>
                </button>
              </Link>
            </div>
            <div className="flex flex-row gap-8 mt-10 ml-10">
              <button className=" bg-transparent rounded-full p-1 border border-gray-400">
                <i className="fa-brands fa-github text-white"></i>
              </button>
              <button className=" bg-transparent rounded-full p-1 border border-gray-400">
                <i className="fa-brands fa-linkedin-in text-white"></i>
              </button>
              <button className=" bg-transparent rounded-full p-1 border border-gr">
                <i className="fa-brands fa-instagram text-white"></i>
              </button>
              <button className=" bg-transparent rounded-full p-1 border border-gray-400">
                <i
                  className="fa-regular fa-envelope text-white"
                  aria-hidden="true"
                ></i>
              </button>
            </div>
            <div className="flex flex-row gap-6 mt-10">
              <div className="border border-gray-400  py-4 px-8 rounded-lg">
                <i
                  className="fa-solid fa-code text-[hsl(162,100%,41%)]"
                  aria-hidden="true"
                ></i>
                <p className="flex flex-col gap-2 text-[hsl(258,90%,66%)]">
                  <span className="text-[hsl(162,100%,41%)]">15+</span>projects
                </p>
              </div>
              <div className="border border-gray-400  py-4 px-8 rounded-lg">
                <i
                  className="fa-brands fa-github text-[hsl(186,100%,50%)]"
                  aria-hidden="true"
                ></i>
                <p className="flex flex-col gap-2 text-[hsl(258,90%,66%)]">
                  <span className="text-[hsl(186,100%,50%)]">10+</span>Deployed
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 flex-col">
          <div className="flex items-center justify-center border border-gray-400 bg-[hsl(162,100%,41%)] rounded-full p-2 w-15 h-15 ml-96">
            <i className="fa-solid fa-code text-white" aria-hidden="true"></i>
          </div>
          <div className="flex justify-center items-center p-1 rounded-full bg-linear-to-r from-[hsl(258,90%,66%)] to-[hsl(162,100%,41%)] md:w-120 md:h-120 shadow-2xl">
            <div className="w-full h-full rounded-full bg-[#070F1E] overflow-hidden flex items-center justify-center">
              <img
                src={portfolioImage}
                alt="Developer working at a computer"
                className="h-full w-full rounded-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      <Link to="./pages/about" className="mt-6 flex justify-end items-center">
        <button
          type="button"
          className="bg-[hsl(162,100%,41%)] p-2 rounded-full"
        >
          <i className="fa-solid fa-arrow-right text-white"></i>
        </button>
      </Link>
    </>
  );
};

export default Home;
