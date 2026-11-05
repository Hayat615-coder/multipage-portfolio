import info from "../info";

const Project = () => {
  return (
    <div className="grid grid-rows-1 md:grid-cols-3 gap-6 mt-8 mx-16">
      {info.map((project) => (
        <div
          key={project.id}
          className="p-6 bg-black overflow-hidden hover:shadow-2xl hover:shadow-[hsl(186,100%,50%)] rounded-lg transition-transform hover:scale-105"
        >
          <a href={project.link} target="_blank" rel="noreferrer">
            <img
              src={project.image}
              alt={project.title}
              className=" rounded-lg border border-slate-700 bg-black hover:transition-transform duration-500 hover:scale-[1.035]"
            />
          </a>
          <h1 className="font-bold text-2xl bg-linear-to-r from-violet-500 via-indigo to-purple-50 bg-clip-text text-transparent">
            {project.title}
          </h1>
          <p className="text-white p-2">{project.description}</p>
          <div className="flex flex-row md:grid md:grid-cols-2 gap-2">
            <div className="flex items-center bg-gray-800 text-cyan-500 px-3  rounded-lg text-sm font-bold">
              React
            </div>
            <div className="flex items-center bg-gray-800 text-cyan-500 px-3 py-1 rounded-lg text-sm font-bold">
              Vite
            </div>
            <div className="flex items-center bg-gray-800 text-cyan-500 px-3 py-1 rounded-lg text-sm font-bold">
              TypeScript
            </div>
            <div className="bg-gray-800 text-cyan-500 px-3 py-1 rounded-lg text-sm font-bold">
              Tailwind CSS
            </div>
          </div>
          <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="mt-2"
          >
            <button
              type="button"
              className="mt-2 border border-[hsl(162,100%,41%)] bg-linear-to-r from-[hsl(162,100%,41%)] to-[hsl(258,90%,66%)]  py-2 items-center gap-2 rounded-lg text-white px-5 text-sm font-semibold shadow-sm transition-all hover:-translate-y-0.5 flex flex-row"
            >
              View live project
            </button>
          </a>
        </div>
      ))}
    </div>
  );
};

export default Project;
