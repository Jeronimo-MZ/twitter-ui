import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Default } from "./layouts/default";
import { Home } from "./pages/home";
import { Tweet } from "./pages/tweet";
export function Router() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Default />,
            children: [
                { path: "/", element: <Home />, index: true },
                { path: "/tweet", element: <Tweet /> },
            ],
        },
    ]);

    return <RouterProvider router={router} />;
}
