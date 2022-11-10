import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./Home.scss";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container">
      <Header />

      <section className="main_menu">
        <h1>CONFRA v.14.11.22</h1>
        <h2>Toalha's Academy</h2>
        <div className="buttons">
          <Link to="/menu" className="button">Menu</Link>
          <Link to="/faq" className="button">FAQ</Link>
        </div>

        <div className="easteregg">
          <img src="/assets/imgs/barba.jpg" alt="" />
        </div>
      </section>

 
      
      <Footer />
    </div>
  );
}

export default Home;
