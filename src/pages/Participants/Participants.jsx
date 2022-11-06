import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";
import "./Participants.scss";

export function Participants() {
  return (
    <div className="participants">
      <Header />
      <div className="content">
        <div className="cards">
          <div className="card">
            <div className="participant-avatar">
              <img
                src="https://picsum.photos/200/300"
                alt="Imagem do participante"
              />
            </div>
            <div className="card-info">
              <p className="participant-name">Lucas</p>
              <hr />
              <p className="will-sleep">Nao vai dormir ❌</p>
              <hr />
              <p>Levando:</p>
              <div className="bringing-items">
                <p>Carne</p>
                <p>Refrigerante</p>
                <p>Cerveja</p>
                <p>Carvao</p>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="participant-avatar">
              <img
                src="https://picsum.photos/200/300"
                alt="Imagem do participante"
              />
            </div>
            <div className="card-info">
              <p className="participant-name">Lucas</p>
              <hr />
              <p className="will-sleep">Nao vai dormir ❌</p>
              <hr />
              <p>Levando:</p>
              <div className="bringing-items">
                <p>Carne</p>
                <p>Refrigerante</p>
                <p>Cerveja</p>
                <p>Carvao</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
