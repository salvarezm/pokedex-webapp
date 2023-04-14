import {
    createBrowserRouter,
} from "react-router-dom";
import { About } from "./screens/about/about";
import { Dashboard } from "./screens/dashboard/dashboard";
import { Pokemon } from "./screens/pokemon/pokemon";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Dashboard />,
    },
    {
        path: "/pokemon/:pokemonName",
        element: <Pokemon />,
    },
    {
        path: "/about",
        element: <About />,
    },
]);