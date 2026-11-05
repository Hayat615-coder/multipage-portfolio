import { useRoutes } from "react-router";
import About from "../pages/About";
import Project from "../pages/Project";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import Root_component from "./Root_component";

const Router_component = () => {
  let element = useRoutes([
    {
      path: "/",
      element: <Root_component />,
      children: [
        { index: true, element: <Home /> },
        { path: "pages/About", element: <About /> },
        { path: "pages/Project", element: <Project /> },
        { path: "pages/Contact", element: <Contact /> },
      ],
    },
  ]);
  return element;
};

export default Router_component;
