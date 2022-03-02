import React from "react";
import Starships from "../components/StarshipsCard";
import StarshipDetail from "../components/StarshipsDetail";
import { Route, Routes } from "react-router-dom";

export default function Pages() {
  return (
    <Routes>
      <Route path="/" element={<Starships />} />
      <Route path="/:id" element={<StarshipDetail />} />
    </Routes>
  );
}
