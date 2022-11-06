import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";
import HouseImage from "../../assets/imgs/Casa.jpg";
import "./Event.scss";

export function Event() {
  return (
    <div className="event">
      <Header />
      <div className="content">
        <p>Este evento será o churrasco da academia mais webadora da cidade.</p>

        <img src={HouseImage} />
      </div>
      <Footer />
    </div>
  );
}
