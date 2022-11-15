import React from "react";
import Signup from "./Signup/Signup";
import Signin from "./Signin/Signin";
import { Route, Routes } from "react-router";
// Homepage à ajouté

export default function Main() {
  return (
    <Routes>
      <Route path="/" element={<Signin />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
}
