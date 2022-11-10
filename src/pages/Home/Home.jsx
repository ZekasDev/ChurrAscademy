import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./Home.scss";

function Home() {
  return (
    <div className="container">
      <Header />

      <section className="main_menu">
        <h1>CONFRA v.14.11.22</h1>
        <h2>Toalha's Academy</h2>
        <div className="buttons">
          <div className="button">Menu</div>
          <div className="button">Valor</div>
          <div className="button">FAQ</div>
        </div>

        <div className="easteregg">
          <img src="/assets/imgs/barba.jpg" alt="" />
        </div>
      </section>

      <section className="info">
        <div className="info-logo">
          <img src="/assets/imgs/logo.png" alt="" />
        </div>
        <div className="buttons">
          <div className="button">PARTICIPANTES</div>
          <div className="button">MAPA</div>
          
        </div>
      </section>
      <section className="menu_imgs">
        <div className="meat_imgs">
          <img src="/assets/imgs/c01.jpg" alt="" />
          <p className="meat_text">Coxinha da Asa</p>
        </div>
        <div className="meat_imgs">
          <img src="/assets/imgs/c02.jpg" alt="" />
          <p className="meat_text">Costela de Porco</p>
        </div>
        <div className="meat_imgs">
          <img src="/assets/imgs/c03.jpg" alt="" />
          <p className="meat_text">Picanha Invertida Lula 2023</p>
        </div>
        <div className="meat_imgs">
          <img src="/assets/imgs/c04.jpg" alt="" />
          <p className="meat_text">Pão de Alho</p>
        </div>
        <div className="meat_imgs">
          <img src="/assets/imgs/c05.jpg" alt="" />
          <p className="meat_text">Coração de Galinha</p>
        </div>
        <div className="meat_imgs">
          <img src="/assets/imgs/c06.jpg" alt="" />
          <p className="meat_text">Contra-Filé</p>
        </div>
        <div className="meat_imgs">
          <img src="/assets/imgs/c07.jpg" alt="" />
          <p className="meat_text">Linguiças</p>
        </div>
        <div className="meat_imgs">
          <img src="/assets/imgs/c08.jpg" alt="" />
          <p className="meat_text">Queijo de Coalho</p>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Home;
