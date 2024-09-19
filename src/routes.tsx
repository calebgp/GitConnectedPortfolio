import App from "./App";
import AboutMe from "./pages/ContactMe";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";

const routes = [
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/about-me',
        element: <AboutMe />,
      },
      {
        path: '/projects',
        element: <Projects />
      },
      {
        path: '/skills',
        element: <Skills />,
      },
      {
        path: '*',
        element: <h1>NOT FOUND</h1>,
      },

    ],
  },
]
export default routes;