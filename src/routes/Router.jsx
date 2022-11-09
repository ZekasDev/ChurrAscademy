import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import { Event } from "../pages/Event/Event";
import { Map } from "../pages/Map/Map";
import { Participants } from "../Pages/Participants/Participants";
import { Menu } from "../Pages/Menu/Menu";

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/event" exact element={<Event />} />
        <Route path="/participants" exact element={<Participants />} />
        <Route path="/map" exact element={<Map />} />
        <Route path="/menu" exact element={<Menu />} />
      </Routes>
    </BrowserRouter>
  );
};
