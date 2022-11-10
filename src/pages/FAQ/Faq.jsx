import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./Faq.scss";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

// Demo styles, see 'Styles' section below for some notes on use.
import "react-accessible-accordion/dist/fancy-example.css";

export function Faq() {
  return (
    <div className="faq">
      <Header />
      <div className="faq_bg">
        <div className="faq_container">
          <div className="faq_elements">
            <div className="question">
              <div className="q1">
                <Accordion>
                  <AccordionItem>
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        Pode levar dr0g4s?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        Se for o verdinho, sim. Por favor não levar outra coisa.
                        Se for detectado o uso de outras substâncias, será
                        expulso. Não tem acordo.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>
                  <AccordionItem>
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        Como será o rolê?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        O intuito não é endoidar. É a nossa Confraternização.
                        Vamos comer, conversar e nos divertir.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>
                  <AccordionItem>
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        Pode levar bebida?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        Claro, mas lembre-se que o rolê não é pra ficar loucão e
                        sem limites. Beba socialmente! A intenção é terminar no
                        mais tarde 22h00
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>
                </Accordion>
              </div>
              <div className="q2">
                <Accordion>
                  <AccordionItem>
                    <AccordionItemHeading>
                      <AccordionItemButton>Quanto será?</AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        Isso depende bastante da quantidade de pessoas que
                        confirmarem presença. O prazo máximo de confirmação é as
                        20h00 da sexta-feira 11/11/22. Após este horário será
                        disponibilizado o valor da cota individual.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>
                  <AccordionItem>
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        Posso levar convidado?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        A Confra é da Toalha's Academy, portanto, convidados não
                        são bem-vindos. Salvo namorada/namorado(tem quem goste).
                        Ah! E tem que informar isso para que a pessoa também
                        entre na cota do Churrasco.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>
                  <AccordionItem>
                    <AccordionItemHeading>
                      <AccordionItemButton>Rola dormir lá?</AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>Sim, mas tem que avisar com antecedência para organizar os quartos. Temos 3 quartos a disposição.</p>
                    </AccordionItemPanel>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
