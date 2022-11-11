import {DiscordLogo, InstagramLogo} from "phosphor-react"
import "./Footer.scss";

function Footer() {
  return (
    <footer>
      <div className="footer_main">
        <div className="socials">
          <DiscordLogo size={32} />
          <InstagramLogo size={32} />
        </div>
        <div className="info_dev">
          Zekas <span style={{ color: "#fae9d5" }}>Dev</span>{" "}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
