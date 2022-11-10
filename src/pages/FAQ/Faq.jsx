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
            <Accordion>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>Pergunta 01</AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>Resposta 01</p>
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>Pergunta 02</AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>Resposta 02</p>
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>Pergunta 03</AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>Resposta 03</p>
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>Pergunta 04</AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>Resposta 04</p>
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>Pergunta 05</AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>Resposta 05</p>
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>Pergunta 06</AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>Resposta 06</p>
                </AccordionItemPanel>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
