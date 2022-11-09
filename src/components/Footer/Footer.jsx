import "./Footer.scss";

function Footer() {
  return (
    <footer>
      <div className="footer_main">
        <div className="socials">
          <a href="">Insta</a>
          <a href="">Discord</a>
        </div>
        <div className="info_dev">
          Zekas <span style={{ color: "#fae9d5" }}>Dev</span>{" "}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
