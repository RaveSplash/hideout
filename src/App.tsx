import { Box } from "@chakra-ui/react";
import "./App.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { LandingPage, ProfilePage } from "./pages";
import { DefaultLayout } from "./components/layouts/default-layout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<DefaultLayout />}>
      <Route index element={<LandingPage />} />
      <Route path="/profile" element={<ProfilePage />} />
    </Route>
  )
);
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
