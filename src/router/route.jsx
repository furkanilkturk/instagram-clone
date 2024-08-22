import { createBrowserRouter } from "react-router-dom";
import Homepage from "../pages/Homepage";
import Flow from "../pages/Flow";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/flow",
    element: <Flow />,
  },
]);
