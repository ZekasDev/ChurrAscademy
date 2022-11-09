import { Link } from 'react-router-dom'
import './Header.scss'

function Header() {

  return (
    <div className="header">
      
     <div className="header_container">
      <div className="header_logo">
        <img src="./src/assets/imgs/logo.png" alt="" />
      </div>
      <div className="header_menu">
        <ul>
          <Link to="/"><li>Home</li></Link>
          <Link to="/event"><li>Evento</li></Link>
          <a href=""><li>Participantes</li></a>
          <a href=""><li>Mapa</li></a>
        </ul>
      </div>
     </div>

    </div>
  )
}

export default Header
