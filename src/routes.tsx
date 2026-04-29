import App from "./App";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import ContactMe from "./pages/ContactMe";

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
        path: '/contact-me',
        element: <ContactMe />,
      },
      {
        path: '/projects',
        element: <Projects />
      },
      {
        path: '*',
        element: <h1>NOT FOUND</h1>,
      },

    ],
  },
]
export default routes;