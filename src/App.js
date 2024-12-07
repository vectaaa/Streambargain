import React from "react";
import LandingPage from "./components/screens/LandingPageScreen/index.tsx";
import RequireAuth from "./RequireAuth.tsx";
import {
  Route,
  Routes,
} from "react-router-dom";
import Login from "./components/screens/Authentication/Login.tsx";
import Register from "./components/screens/Authentication/Register.tsx";
import ForgotPassword from "./components/screens/Authentication/ForgotPassword.tsx";
import Layout from "./components/screens/Layout.tsx";
import Dashboard from "./components/screens/Dashboard/Index.tsx";


// const router = createBrowserRouter(
//   createRoutesFromElements(
//   )
// );

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* public routes */}
        <Route path="/home" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgotPassword" element={<ForgotPassword />} />

        {/* we protect this these routes */}
        <Route element={<RequireAuth/>}>
        <Route path="/" element={<Dashboard />} />
        </Route>
      </Route>
    </Routes>
    // <LandingPage/>
    // <RouterProvider router={router} />
  );
}

export default App;
