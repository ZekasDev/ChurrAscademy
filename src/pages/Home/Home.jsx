import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import "./Home.scss";

export function Home() {
  return (
    <div className="home">
      <Header />
      <div className="content">
        <div>Body</div>
      </div>
      <Footer />
    </div>
  );
}
