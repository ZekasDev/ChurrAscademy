import { Link } from 'react-router-dom'
import './Header.scss'

function Header() {
  
  return (
    <div className="header">
      
     <div className="header_container">
      <div className="header_logo">
        <img src="/assets/imgs/logo.png" alt="" />
      </div>
      <div className="header_menu">
        <ul>
          <Link to="/"><li>Home</li></Link>
          <Link to="/event"><li>Evento</li></Link>
          <Link to="/participants"><li>Participantes</li></Link>
          <Link to="/map"><li>Mapa</li></Link>
        </ul>
      </div>
     </div>

    </div>
  )
}

export default Header
