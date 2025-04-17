import {
    createBrowserRouter,
    RouterProvider,
} from "react-router";
import Root from "../Pages/Root";
import Error from "../Pages/ErrorPage/Error";
import Home from "../Pages/Home/Home";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        errorElement: <Error></Error>,
        children: [
            {
                index: true,
                path: "/",
                Component:Home
            }
        ]
    },
]);