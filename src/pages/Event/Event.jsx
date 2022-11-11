import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import "./Event.scss";

export function Event() {
  return (
    <div className="event">
      <Header />
      <div className="event_bg">
        <div className="info_text">
          <p>
            Que tataaaaaaaaame que naaaaaaaaaaaada! A luta agora é na
            churrasqueira! Amarre sua faixa, corra 35km com dois kimonos e venha
            ganhar peso para a Webação de Fim de Ano da Toalha's Academy. Na
            paradisíaca casa de praia do <span> Zekinha </span> Barreto - mas
            sem o irmão -, a diversão será garantida. Com atração musical
            confirmada do Pablo <span> GaladoGuloso</span> Dias, o churrasco
            começará as 14h00 do sábado, 12 de novembro de 2022. Celebrando a
            amizade entre seus alunos, temos também a presença confirmada por
            videoconferência do Mestre do PMA, Lucas <span> Beterraba</span>{" "}
            Cavalcante, que fará uma palestra sobre "A Arte da Criação de Funks
            Interativos e seu Impacto Cultural em Microsociedades". Contaremos
            também com a presença virtual de Levi
            <span> ComunistaMaconheiro</span> Herrera, com sua leitura TEDx com
            o tema "Criação e Mixação de Funks Paradidáticos". Além é claro do
            mundialmente famoso Narg do Marcel <span>PlayboyDoMarista</span>.
            Garanta sua vaga na última confraternização da
            <span> Toalha'sAcademy</span> de 2022. Venha comemorar a vitória do
            <span className="lula"> Barba Nine</span>! Picanha{" "}
            <strong>FULL</strong>!
          </p>
        </div>
      </div>
      <div className="more-info"></div>
      <Footer />
    </div>
  );
}
