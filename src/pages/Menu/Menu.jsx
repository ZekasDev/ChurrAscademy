import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./Menu.scss";

export function Menu() {
  return (
    <div className="menu">
      <Header />
      <div className="menu_bg">
        <div className="menu_container">
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
        </div>
      </div>
      <Footer />
    </div>
  );
}