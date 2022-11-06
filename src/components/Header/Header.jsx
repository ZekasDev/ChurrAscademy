import "./Header.scss";
export function Header() {
  return (
    <header className="header-container">
      <div className="header-wrapper">
      <div className="navigation">Home</div>
      <div className="navigation">Evento</div>
      <div className="navigation">Participantes</div>
      <div className="navigation">Mapa</div>
      </div>
    </header>
  );
}
