import { Link } from "react-router-dom";
import { List } from "phosphor-react";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import "./Header.scss";
import { useState } from "react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };
  return (
    <div className="header">
      <div className="header_container">
        <div className="header_logo">
          <img src="/assets/imgs/logo.png" alt="" />
        </div>
        <div className="header_menu">
          <ul>
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/event">
              <li>Evento</li>
            </Link>
            <Link to="/participants">
              <li>Participantes</li>
            </Link>
            <Link to="/map">
              <li>Mapa</li>
            </Link>
          </ul>
        </div>
        <List size={32} className="header_button" onClick={toggleDrawer} />
      </div>
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction="right"
      >
        <div className="drawer_container">
          <ul>
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/event">
              <li>Evento</li>
            </Link>
            <Link to="/participants">
              <li>Participantes</li>
            </Link>
            <Link to="/map">
              <li>Mapa</li>
            </Link>
          </ul>
        </div>
      </Drawer>
    </div>
  );
}

export default Header;
