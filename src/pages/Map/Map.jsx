import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./Map.scss";

export function Map() {
  return (
    <div className="map">
      <Header />
      <div className="map_bg">
        <div className="map_container">
          <iframe src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d248.0104128633579!2d-35.1271185067702!3d-5.971780170953974!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spt-BR!2sbr!4v1668074412978!5m2!1spt-BR!2sbr"></iframe>
          <div className="map_description">
            <span>
              Seguindo o sentido "Cajueiro/Natal", você vai descer a ladeira que
              dá acesso a "Barraca do Duca". Na penúltima rua, você entra a
              esquerda, que é rua sem saída. É a terceira casa!
            </span>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
