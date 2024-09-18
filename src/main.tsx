import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import React from 'react';
import routes from './routes.tsx';
import { GCProfile } from './models/gc-profile.tsx';

const router = createBrowserRouter(routes);
export const ProfileContext = React.createContext<GCProfile | undefined>(undefined);

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

