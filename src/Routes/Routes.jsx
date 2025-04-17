import {
    createBrowserRouter,
    RouterProvider,
} from "react-router";
import Root from "../Pages/Root";
import Error from "../Pages/ErrorPage/Error";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        errorElement: <Error></Error>,
        children: [
            {
                index: true,
                loader: () => fetch('booksData.json'),
                path: "/",
                Component: Home
            },
            {
                path: "/about",
                Component: About
            }
        ]
    },
]);