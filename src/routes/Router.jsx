import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Event } from "../pages/Event/Event";
import { Home } from "../pages/Home/Home";
import { Map } from "../pages/Map/Map";
import { Participants } from "../pages/Participants/Participants";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/map" element={<Map />} />
        <Route path="/participants" element={<Participants />} />
        <Route path="/event" element={<Event />} />
      </Routes>
    </BrowserRouter>
  );
}
