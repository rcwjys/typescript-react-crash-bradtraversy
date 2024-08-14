import { RouterProvider } from "react-router-dom";
import Router from "./routers";

export default function App() {
  return (
    <div>
      <RouterProvider router={Router} />
    </div>
  );
}
