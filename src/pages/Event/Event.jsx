import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";
import HouseImage from "../../assets/imgs/Casa.jpg";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import "./Event.scss";

export function Event() {
  return (
    <div className="event">
      <Header />
      <div className="content">
        <p>Este evento será o churrasco da academia mais webadora da cidade.</p>

        <img src={HouseImage} />

        <h2>FAQ</h2>
        

        <Accordion>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                    Pode levar drogas?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                    Depende. O verdinho sim e somente ele, caso seja verificado a presença daquela parada branca, será expulso. Isso não é negociável.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                    Quanto levar de bebida?                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                    Lembre-se que será uma confraternização saudável. Leve a quantidade de bebidas de consumo socializável. Nada de ficar doidão! O intuito é conversar, rir, brincar e não passar mal, gritar, ou de fazer um rolê infinito até de manhã no outro dia.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                    Sou vegano, preciso contribuir?                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                    Cancele sua ida. É um churrasco e não um 'Sarau a Mãe Natureza'.                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                    Pode dormir lá?                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                    Sim, desde que você avise no seu "check-in" para podermos organizar a estadia.                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                    Posso levar acompanhante?                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                    Depende. Se for namorada/ficante/esquema, sim (e que entre no raxa das compras). Se for amigo(a) pra aglomerar, não. Lembre-se, a confra é da Academia.                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                    Quanto será?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                    Depende da quantidade de pessoas que confirmarem. As "inscrições" terminam na quinta-feira, na sexta veremos quanto de carnes será necessário para abastecer a fome da rapaziada, e baseado nisso lançaremos no grupo a cota por pessoa. Não ache caro! Lembre-se que o "verdin" dá fome, e com a vitória do Barba 9 Fingers temos que ter PICANHA.                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                    Até quando posso pagar a cota?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                    Até sábado as 10h00. De meio dia irei comprar as carnes e pegarei estrada pra Pirangi, se alguém quiser carona, avisa!                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                    Como é a casa?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                    A casa são 6 quartos (5 com ar), sendo 3 suítes. Tem um amplo alpendre pra colocar redes pra descanso. A casa fica a 50m da praia. Portanto vamos APROVEITAR!                    </p>
                </AccordionItemPanel>
            </AccordionItem>
        </Accordion>

      </div>
      <Footer />
    </div>
  );
}

