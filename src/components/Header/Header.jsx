import { Link } from "react-router-dom";
import "./Header.scss";

export function Header() {
  return (
    <header className="header">
      <Link to="/">Home</Link>
      <Link to="/participants">Participantes</Link>
      <Link to="/event">Evento</Link>
      <Link to="/map">Mapa</Link>
    </header>
  );
}
