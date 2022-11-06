import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";
import MapImage from "../../assets/imgs/mapa.jpg";

import "./Map.scss";
export function Map() {
  return (
    <div className="mapa">
      <Header />
      <div className="content">
        <p>
          Se sua duvida é como chegar no local, aqui você encontra a resposta!
        </p>
        <a href="https://goo.gl/maps/yjhtwhE6S6xVFRLw5" target="_blank">
          <img src={MapImage} />
        </a>
        <span>Clique na imagem para abrir o mapa</span>
      </div>
      <Footer />
    </div>
  );
}
