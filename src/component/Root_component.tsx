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
    </div>
  );
};

export default Root_component;
