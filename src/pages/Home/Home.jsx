import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import "./Home.scss";

export function Home() {
  return (
    <div className="home">
      <Header />
      <div className="content">
        <h1>Bem vindo a ChurrAscademy</h1>
        <h3>Faça sua inscriçao abaixo:</h3>
        <form>
          <label>Nome:</label>
          <input type="text" />
          <label>Nome:</label>
          <input type="text" />
        </form>
      </div>
      <Footer />
    </div>
  );
}
