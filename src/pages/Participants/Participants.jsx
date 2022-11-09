import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./Participants.scss";

export function Participants() {
  return (
    <div className="participants">
      <Header />
      <div className="participants_bg">
        <div className="players_container">
          <div className="card_player">
            <div className="player">
              <img src="../../src/assets/imgs/test.jpg" alt="" />            </div>
            <div className="player_infos">
              <h3>Calvin Barreto</h3>
              <p>Aqui é o Beterraba, Mestre do PMA. Só quando estou na party, Pablo tem chances de ganhar.</p> 
            </div>         
          </div>
          <div className="card_player">
            <div className="player">
              <img src="../../src/assets/imgs/test.jpg" alt="" />            </div>
            <div className="player_infos">
              <h3>Calvin Barreto</h3>
              <p>Aqui é o Beterraba, Mestre do PMA. Só quando estou na party, Pablo tem chances de ganhar.</p> 
            </div>         
          </div>
          <div className="card_player">
            <div className="player">
              <img src="../../src/assets/imgs/test.jpg" alt="" />            </div>
            <div className="player_infos">
              <h3>Calvin Barreto</h3>
              <p>Aqui é o Beterraba, Mestre do PMA. Só quando estou na party, Pablo tem chances de ganhar.</p> 
            </div>         
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
