import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Starships from "../components/StarshipsCard";
import StarshipDetail from "../components/StarshipsDetail";

export default function Pages() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Starships />} />
        <Route path="starships/:id" element={<StarshipDetail />} />
      </Routes>
    </BrowserRouter>
  );
}
