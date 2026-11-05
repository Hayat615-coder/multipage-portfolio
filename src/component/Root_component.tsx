import { NavLink, Outlet } from "react-router";
const Root_component = () => {
  return (
    <div className="">
      <nav
        className="flex flex-row justify-between items-center p-4 bg-linear-to-r from-[#070F1E] to-[#0B132B]"
        aria-label="Main navigation"
      >
        <h1 className="ml-10 bg-linear-to-r from-[#00D294] to-[#10B981] bg-clip-text text-transparent font-semibold">
          Hayat <span className="text-white">Abdurehman</span>
        </h1>
        <div className="flex flex-row gap-6 md:mr-48">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `flex items-center gap-2 font-semibold ${
                isActive
                  ? "bg-linear-to-r from-[#00D294] to-[#10B981] bg-clip-text text-transparent"
                  : "text-white"
              }`
            }
          >
            <i
              className="fa-regular fa-house text-white hover:bg-linear-to-r from-[#00D294] to-[#10B981] overflow-hidden bg-clip-text hover:text-transparent"
              aria-hidden="true"
            ></i>
            Home
          </NavLink>
          <NavLink
            to="/pages/About"
            className={({ isActive }) =>
              `flex items-center gap-2 font-semibold ${
                isActive
                  ? "bg-linear-to-r from-[#00D294] to-[#10B981] bg-clip-text text-transparent"
                  : "text-white"
              }`
            }
          >
            <i
              className="fa-regular fa-user text-white hover:bg-linear-to-r from-[#00D294] to-[#10B981] overflow-hidden bg-clip-text hover:text-transparent"
              aria-hidden="true"
            ></i>
            About
          </NavLink>
          <NavLink
            to="/pages/Project"
            className={({ isActive }) =>
              `flex items-center gap-2 font-semibold ${
                isActive
                  ? "bg-linear-to-r from-[#00D294] to-[#10B981] bg-clip-text text-transparent"
                  : "text-white"
              }`
            }
          >
            <i
              className="fa-solid fa-code text-white hover:bg-linear-to-r from-[#00D294] to-[#10B981] overflow-hidden bg-clip-text hover:text-transparent"
              aria-hidden="true"
            ></i>
            Project
          </NavLink>
          <NavLink
            to="/pages/Contact"
            className={({ isActive }) =>
              `flex items-center gap-2 font-semibold ${
                isActive
                  ? "bg-linear-to-r from-[#00D294] to-[#10B981] bg-clip-text text-transparent"
                  : "text-white"
              }`
            }
          >
            <i
              className="fa-regular fa-envelope hover:bg-linear-to-r from-[#00D294] to-[#10B981] overflow-hidden bg-clip-text hover:text-transparent"
              aria-hidden="true"
            ></i>
            Contact
          </NavLink>
        </div>
      </nav>
      <main className="p-4">
        <Outlet />
      </main>
      <footer className="bg-[rgba(30,41,59,0.7)] p-4 mt-8 flex flex-col md:flex-row gap-6 items-center justify-center">
        <div className="transition-all hover:-translate-y-1 hover:bg-white hover:text-black hover:rounded-lg">
          <a
            href=""
            className="inline-flex items-center gap-2 rounded-lg border border-border/70 bg-card/50 px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-primary/40 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
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
              className="lucide lucide-arrow-up h-4 w-4"
              aria-hidden="true"
            >
              <path d="m5 12 7-7 7 7"></path>
              <path d="M12 19V5"></path>
            </svg>
            Back to top
          </a>
        </div>
        <p className="text-white text-center p-4">
          &copy; 2026 Hayat Abdurehman. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Root_component;
