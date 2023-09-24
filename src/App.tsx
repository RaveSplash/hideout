import { Box } from "@chakra-ui/react";
import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { LandingPage, ProfilePage } from "./pages";

const router = createBrowserRouter([
  { path: "/", element: <LandingPage /> },
  {
    path: "/profile",
    element: <ProfilePage />,
  },
]);
function App() {
  return (
    <>
      <RouterProvider router={router} />
      <Box bg={"red.300"}></Box>
    </>
  );
}

export default App;
