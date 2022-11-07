import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";
import ToalhasAvatar from "../../assets/imgs/draculinha.jpg"
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
                src= {ToalhasAvatar}
                alt="Imagem do participante"
              />
            </div>
            <div className="card-info">
              <p className="participant-name">Toalhas</p>
              <hr />
              <p className="will-sleep">Nao vai dormir ❌</p>
              <hr />
              <p className="zekasjoke">"<i>O Sensei vai dormir SIM! Só ele que não sabe ainda.</i>"</p>

            </div>
          </div>
          <div className="card">
            <div className="participant-avatar">
              <img
                src= {ToalhasAvatar}
                alt="Imagem do participante"
              />
            </div>
            <div className="card-info">
              <p className="participant-name">Toalhas</p>
              <hr />
              <p className="will-sleep">Nao vai dormir ❌</p>
              <hr />
              <p className="zekasjoke">"<i>O Sensei vai dormir SIM! Só ele que não sabe ainda.</i>"</p>

            </div>
          </div>
          <div className="card">
            <div className="participant-avatar">
              <img
                src= {ToalhasAvatar}
                alt="Imagem do participante"
              />
            </div>
            <div className="card-info">
              <p className="participant-name">Toalhas</p>
              <hr />
              <p className="will-sleep">Nao vai dormir ❌</p>
              <hr />
              <p className="zekasjoke">"<i>O Sensei vai dormir SIM! Só ele que não sabe ainda.</i>"</p>

            </div>
          </div>
          <div className="card">
            <div className="participant-avatar">
              <img
                src= {ToalhasAvatar}
                alt="Imagem do participante"
              />
            </div>
            <div className="card-info">
              <p className="participant-name">Toalhas</p>
              <hr />
              <p className="will-sleep">Nao vai dormir ❌</p>
              <hr />
              <p className="zekasjoke">"<i>O Sensei vai dormir SIM! Só ele que não sabe ainda.</i>"</p>

            </div>
          </div>
          <div className="card">
            <div className="participant-avatar">
              <img
                src= {ToalhasAvatar}
                alt="Imagem do participante"
              />
            </div>
            <div className="card-info">
              <p className="participant-name">Toalhas</p>
              <hr />
              <p className="will-sleep">Nao vai dormir ❌</p>
              <hr />
              <p className="zekasjoke">"<i>O Sensei vai dormir SIM! Só ele que não sabe ainda.</i>"</p>

            </div>
          </div>
          <div className="card">
            <div className="participant-avatar">
              <img
                src= {ToalhasAvatar}
                alt="Imagem do participante"
              />
            </div>
            <div className="card-info">
              <p className="participant-name">Toalhas</p>
              <hr />
              <p className="will-sleep">Nao vai dormir ❌</p>
              <hr />
              <p className="zekasjoke">"<i>O Sensei vai dormir SIM! Só ele que não sabe ainda.</i>"</p>

            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
