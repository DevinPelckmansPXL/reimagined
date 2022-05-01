import { Link } from "react-router-dom";
import "./Selection.css";
import Eurofins from "../../assets/Eurofins.png";
import PXLDigital from "../../assets/PXLDigital.png";

const Selection = () => {
  return (
    <div>
      <p className="page-title">
        Een overzicht van mijn persoonlijke selectie van een aantal
        activiteiten.
      </p>
      <article className="selection-article">
        <h1 className="title">Eurofins - Postman</h1>
        <div className="card">
          <img className="selection-img" src={Eurofins} alt="Logo Eurofins" />
          <p>
            Een introductie tot Postman, waar het nuttig voor is en hoe het
            efficiënt te gebruiken. Testen schrijven in Postman was hier ook
            onderdeel van.
          </p>
          <Link className="link" to="/eurofins-postman">
            Meer informatie {">"}
          </Link>
        </div>
      </article>
      <article className="selection-article">
        <h1 className="title">Innovatie - Hackathon</h1>
        <div className="card">
          <img
            className="selection-img"
            src={PXLDigital}
            alt="Logo PXL Digital"
          />
          <p>
            Een hackathon georganiseerd door PXL-DIGITAL. Minigames in Unity met
            ondersteuning van studenten Ergotherapie van Sint-Oda.
          </p>
          <Link className="link" to="/hackathon">
            Meer informatie {">"}
          </Link>
        </div>
      </article>
      <article className="selection-article last">
        <h1 className="title">Eurofins - Docker</h1>
        <div className="card">
          <img className="selection-img" src={Eurofins} alt="Logo Eurofins" />
          <p>
            Introductie tot de Docker omgeving en hoe dit werkt. Met een aantal
            praktische oefeningen docker leren gebruiken.
          </p>
          <Link className="link" to="/eurofins-docker">
            Meer informatie {">"}
          </Link>
        </div>
      </article>
    </div>
  );
};

export default Selection;
