import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Home from "../Home/Home";
const route = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        children: [
            {
                index: true,
                Component:Home
            }
        ]
    }

]);
export {route}