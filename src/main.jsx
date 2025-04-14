import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import Root from "./Components/Root/Root";
import Home from "./Components/Home/Home";
import About from "./Components/pages/About";
import User from "./Components/pages/User";
import Login from "./Components/pages/Login";
import User2 from "./Components/pages/User2";
import UserDetails from "./Components/pages/UserDetails";

const userPromise = fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json()); 

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: "login", Component: Login },
      {
        path: "users",
        loader: () => fetch(`https://jsonplaceholder.typicode.com/users`),
        Component: User,
      },
      {
        path: "users2",
        element: <Suspense fallback={<span>Loading....... </span>}>
          <User2 userPromise={userPromise}> </User2>
        </Suspense>,
      },
      {
        path: 'users/:userId',
        loader: ({params}) =>  fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        Component: UserDetails,
      }
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
