import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import Main from "./components/Main.jsx";
import ErrorPage from "./components/ErrorPage.jsx";
import Home from "./pages/Home.jsx";  
import AboutSchool from "./pages/AboutSchool.jsx";
import Contact from "./pages/Contact.jsx";  
import Notice  from "./pages/Notice/Notice.jsx";  
import Gallery from "./pages/Gallery.jsx";
import Results from "./pages/Results.jsx";
import Routine from "./pages/Routine.jsx"
import Faculty from "./pages/Faculty/Faculty.jsx";

// Define the routes for the app
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,  // This will show the Home component when visiting the root route
        element: <Home />,
      },
      {
        path: "/about",  // Corrected path to '/about-us'
        element: <AboutSchool />,  
      },
       {
        path: "/contact",  // Corrected path to '/about-us'
        element: <Contact />,  
      },
      {
        path: "/notices",  // Corrected path to '/about-us'
        element: <Notice />,  
      },
      {
        path: "/gallery",
        element:<Gallery />
      },
      {
        path:"/results",
        element:<Results />
      },
      {
        path:"/routine",
        element:<Routine />
      },
        {
        path:"/teachers-staff",
        element:<Faculty />
      }
     
    ],
  },
]);

// Render the app with React StrictMode for additional checks
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
