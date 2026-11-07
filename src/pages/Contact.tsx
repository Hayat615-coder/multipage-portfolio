import { Link } from "react-router/internal/react-server-client";

const Contact = () => {
  return (
    <>
      <h2 className="mb-3 text-center text-xl font-semibold uppercase tracking-[0.18em] text-indigo-500">
        GET IN TOUCH
      </h2>
      <p className="text-4xl font-bold text-white md:mx-96 text-center">
        Let's build something
        <span className="text-4xl font-bold text-indigo-500 pl-1">
          great together.
        </span>
      </p>
      <div className="flex flex-col md:flex-row">
        <div className="border p-8 rounded-xl mt-8 mx-8">
          <div className="flex flex-row gap-4">
            <span className="border p-4 rounded-lg bg-indigo-500">
              <i className="fa-solid fa-envelope text-white text-lg"></i>
            </span>
            <h2 className="pt-4 text-white text-lg font-semibold">
              Start a Conversation
            </h2>
          </div>
          <p className="text-white mb-4">
            If you would like to reach out to collaborate on projects or web
            layouts feel free to contact me.
          </p>
          <span className="flex flex-row gap-2">
            <i className="fa-solid fa-envelope text-white text-lg px-4"></i>
            <p className="text-white flex flex-col">
              Email
              <a
                href="mailto:yuyutayaho66@gmail.com"
                className="hover:text-indigo-500"
              >
                yuyutayaho66@gmail.com
              </a>
            </p>
          </span>
          <span className="flex flex-row gap-2 mt-3">
            <i className="fa-solid fa-location-dot text-white text-lg px-4"></i>
            <p className="text-white flex flex-col">
              Based In
              <span>Ethiopia</span>
            </p>
          </span>
          <hr className="font-sm" />
          <p className="bg-linear-to-r from-violet-500 via-indigo to-purple-50 bg-clip-text text-transparent font-bold mt-4">
            FIND ME ONLINE
          </p>
          <div className="flex gap-4 mt-4">
            <button className="border rounded-lg text-white py-1 px-2 transition-all hover:-translate-y-0.5">
              <a
                href="https://github.com/Hayat615-coder"
                target="_blank"
                className="flex flex-row gap-2 items-center"
              >
                GitHub
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
              </a>
            </button>
            <button className="border rounded-lg text-white py-1 px-2 transition-all hover:-translate-y-0.5">
              <a
                href="https://www.linkedin.com/in/hayat-abdurehman-490003343?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                target="_blank"
                className="flex flex-row gap-2 items-center"
              >
                LinkedIn
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
              </a>
            </button>
            <button className="border rounded-lg text-white py-1 px-2 transition-all hover:-translate-y-0.5">
              <a
                href="https://t.me/Tayah15"
                target="_blank"
                className="flex flex-row gap-2 items-center"
              >
                Telegram
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
              </a>
            </button>
          </div>
        </div>
        <form action="" className="px-12 py-6">
          <label htmlFor="name" className="text-white font-semibold">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your name"
            className="bg-transparent text-white placeholder:text-gray-500 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg px-4 py-2 w-full my-2"
          />
          <label htmlFor="email" className="text-white font-semibold">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="You@example.com"
            className="bg-transparent text-white placeholder:text-gray-500 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg px-4 py-2 w-full my-2"
          />
          <label htmlFor="message" className="text-white font-semibold">
            Message
          </label>
          <textarea
            name="message"
            id="message"
            placeholder="Your message"
            cols={60}
            rows={8}
            className="bg-transparent text-white placeholder:text-gray-500 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg px-2 py-1 w-full mb-2"
          ></textarea>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
      <Link
        to="/pages/Project"
        className="mt-6 flex justify-start items-center"
      >
        <button
          type="button"
          className="bg-[hsl(162,100%,41%)] p-2 rounded-full"
        >
          <i className="fa-solid fa-arrow-left text-white"></i>
        </button>
      </Link>
    </>
  );
};

export default Contact;
