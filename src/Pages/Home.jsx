import Header from "../components/Header/Header";
import "./Home.scss";

function Home() {
  return (
    <div className="container">
      <Header />
      <section id="main_menu">
        <div className="main_menu">
          <h1>CONFRATERNIZAÇÃO</h1>
          <h2>Toalhas Academy</h2>
          <div className="buttons">
            <div className="button">Menu</div>
            <div className="button">Valor</div>
            <div className="button">FAQ</div>
          </div>
        </div>
      </section>
      <section id="info">
        <div className="info-logo">LOGO IMG</div>
        <div className="button">1</div>
        <div className="button">2</div>
        <div className="button">3</div>
        <div className="info_text">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Consectetur earum, maxime et ex labore qui voluptatem ipsum
            provident est nam accusantium explicabo, suscipit rem dicta repellat
            tempora aspernatur, quibusdam sequi.
          </p>
        </div>
      </section>
      <section id="menu_imgs">
        <div className="meat_imgs"> FOTO DE CARNE 
        <p className="text">Descrição da Carne</p>
        </div>
        <div className="meat_imgs"> FOTO DE CARNE 
        <p className="text">Descrição da Carne</p>
        </div>
        <div className="meat_imgs"> FOTO DE CARNE 
        <p className="text">Descrição da Carne</p>
        </div>
        <div className="meat_imgs"> FOTO DE CARNE 
        <p className="text">Descrição da Carne</p>
        </div>
        <div className="meat_imgs"> FOTO DE CARNE 
        <p className="text">Descrição da Carne</p>
        </div>
        <div className="meat_imgs"> FOTO DE CARNE 
        <p className="text">Descrição da Carne</p>
        </div>
      </section>
    </div>
  );
}

export default Home;
