import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Board from "./pages/boards";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Board />,
  },
  {
    path: "/add-task",
    element: <div>Hello world!</div>,
  },
  {
    path: "/edit-task",
    element: <div>Hello world!</div>,
  },
]);

function App() {
  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
