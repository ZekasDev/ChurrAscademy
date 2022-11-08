import Header from "../components/Header/Header";
import "./Home.scss";

function Home() {
  return (
    <div className="container">
      <Header />

      <section className="main_menu">
        <h1>CONFRATERNIZAÇÃO</h1>
        <h2>Toalhas Academy</h2>
        <div className="buttons">
          <div className="button">Menu</div>
          <div className="button">Valor</div>
          <div className="button">FAQ</div>
        </div>
      </section> 

      <section className="info">
        <div className="info-logo">
          <img src="./src/assets/imgs/logo.png" alt="" />
        </div>
        <div className="buttons">
        <div className="button">PARTICIPANTES</div>
        <div className="button">MAPA</div>
        <div className="button">DEPOIMENTO</div>
        </div>
        <div className="info_text">
          <p>
            Que tatame que nada! A luta agora é na churrasqueira! Amarre sua
            faixa, corra 35km com dois kimonos e venha ganhar peso para a
            Webação de Fim de Ano da Toalha's Academy. Na paradisíaca casa de
            praia do <span> Zekinha </span> Barreto - mas sem o irmão -, a diversão será garantida. Com atração
            musical confirmada do Pablo <span>GaladoGuloso</span> Dias, o churrasco começará as
            14h00 do sábado, 12 de novembro de 2022. Celebrando a amizade entre
            seus alunos, temos também a presença confirmada por videoconferência
            do Mestre do PMA, Lucas <span>Beterraba</span> Cavalcante, que fará
            uma palestra sobre "A Arte da Criação de Funks Interativos e seu Impacto Cultural em Microsociedades".
            Contaremos também com a presença virtual de Levi
            <span>ComunistaMaconheiro</span> Herrera, com sua leitura  TEDx com o tema 
            "Criação e Mixação de Funks Paradidáticos". Além é claro do
            mundialmente famoso Narg do Marcel <span>PlayboyDoMarista</span>. Garanta sua vaga  na última confraternização da
            <span>Toalha'sAcademy</span> de 2022. Venha comemorar a vitória do
            <span>Barba Nine</span>! Picanha FULL!
          </p>
        </div>
      </section>
      <section className="menu_imgs">
        <div className="meat_imgs">
          {" "}
          <img src="./src/assets/imgs/c01.jpg" alt="" />          
          <p className="text">Coxinha da Asa</p>
        </div>
        <div className="meat_imgs">
          {" "}
          <img src="./src/assets/imgs/c02.jpg" alt="" />          
          <p className="text">Costela de Porco</p>
        </div>
        <div className="meat_imgs">
          {" "}
          <img src="./src/assets/imgs/c03.jpg" alt="" /> 
                   <p className="text">Picanha Invertida Lula 2023</p>
        </div>
        <div className="meat_imgs">
          {" "}
          <img src="./src/assets/imgs/c04.jpg" alt="" />
          <p className="text">Pão de Alho</p>
        </div>
        <div className="meat_imgs">
          {" "}
          <img src="./src/assets/imgs/c05.jpg" alt="" />
          <p className="text">Coração de Galinha</p>
        </div>
        <div className="meat_imgs">
          {" "}
          <img src="./src/assets/imgs/c06.jpg" alt="" />
          <p className="text">Contra-Filé</p>
        </div>
        <div className="meat_imgs">
          {" "}
          <img src="./src/assets/imgs/c07.jpg" alt="" />
          <p className="text">Linguiças</p>
        </div>
        <div className="meat_imgs">
          {" "}
          <img src="./src/assets/imgs/c08.jpg" alt="" />
          <p className="text">Queijo de Coalho</p>
        </div>
      </section>
    </div>
  );
}

export default Home;
