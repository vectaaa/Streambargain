import React from 'react'
import LandingPage from './components/screens/LandingPageScreen/index.tsx';
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom';
import Login from './components/screens/Authentication/Login.tsx';
import Register from './components/screens/Authentication/Register.tsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<LandingPage/>} />
      <Route  path="/login" element={<Login/>} />
      <Route  path="/register" element={<Register/>} />
    </Route>
      
  )
);


function App() {
  return (
    // <LandingPage/>
    <RouterProvider router={router}/>
  );
}

export default App;
