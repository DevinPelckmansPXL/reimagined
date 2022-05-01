import "./ActivityList.css";

const ActivityList = () => {
  return (
    <div className="activity-list">
      <p className="page-info">
        Een overzicht van alle activiteiten die bijdragen tot I-Talent.
      </p>
      <div className="seminars">
        <h2 className="seminars-title">Seminaries</h2>
        <div className="grid">
          <article className="grid-item">
            <h3>ACA IT - Machine Learning</h3>
            <p>
              Een seminarie met als doel het toepassen van machine learning
              zonder kennis van algoritmes.
            </p>
            <p>Locatie: Hogeschool PXL, B-blok</p>
            <p>Datum: 18/02/2020</p>
          </article>
          <article className="grid-item">
            <h3>Evance - Firebase</h3>
            <p>
              Een introductie tot het werken met Firebase, met nadruk op
              verschillende authenticaties.
            </p>
            <p>Locatie: Hogeschool PXL, B-blok</p>
            <p>Datum: 25/02/2020</p>
          </article>
          <article className="grid-item">
            <h3>Craftworkz - UI/UX</h3>
            <p>Een seminarie over oplossingen en de basis van UI/UX.</p>
            <p>Locatie: Online</p>
            <p>Datum: 23/02/2021</p>
          </article>
          <article className="grid-item">
            <h3>3-IT - Social Engineering</h3>
            <p>
              Een introductie tot en rond de gevaren van social engineering.
            </p>
            <p>Locatie: Online</p>
            <p>Datum: 02/03/2021</p>
          </article>
          <article className="grid-item">
            <h3>PXL - Brein aan het werk, niet storen!</h3>
            <p>
              Een sessie over het gebruik van smartphones. Hierin werd ons
              duidelijk gemaakt hoeveel tijd we spenderen op onze smartphones &
              hoe we dagelijkse activiteiten kunnen aanpakken.
            </p>
            <p>Locatie: Online</p>
            <p>Datum: 09/03/2021</p>
          </article>
          <article className="grid-item">
            <h3>Eurofins - Postman</h3>
            <p>
              Een introductie tot Postman, waar het nuttig voor is en hoe het
              efficiënt te gebruiken. Testen schrijven in Postman was hier ook
              onderdeel van.
            </p>
            <p>Locatie: Online</p>
            <p>Datum: 17/11/2021</p>
          </article>
          <article className="grid-item">
            <h3>Accenture - Cloud Native Development</h3>
            <p>
              Introductie tot Cloud Native Development en hoe Accenture
              bedrijven helpt om uitdagingen aan te pakken.
            </p>
            <p>Locatie: Online</p>
            <p>Datum: 01/12/2021</p>
          </article>
          <article className="grid-item">
            <h3>Eurofins - Docker</h3>
            <p>
              Introductie tot de Docker omgeving en hoe dit werkt. Met een
              aantal praktische oefeningen docker leren gebruiken.
            </p>
            <p>Locatie: Online</p>
            <p>Datum: 08/12/2021</p>
          </article>
        </div>
      </div>
      <div className="innovation">
        <h2 className="innovation-title">Innovatie</h2>
        <div className="grid">
          <article className="grid-item-hidden"></article>
          <article className="grid-item">
            <h3>Innovatieroute AI</h3>
            <p>
              3 seminaries gespreid over 3 dagen over de wereld van AI. Deep
              Learning, Computer Vision en Fast AI 2 kwamen aan bod.
            </p>
            <p>Locatie: Hogeschool PXL, B-blok</p>
            <p>Datums: 30/09/2021 | 07/10/2021 | 21/10/2021</p>
          </article>
          <article className="grid-item">
            <h3>Hackathon: PXL-Digital</h3>
            <p>
              Een hackathon georganiseerd door PXL-DIGITAL. Minigames in Unity
              met ondersteuning van studenten Ergotherapie van Sint-Oda.
            </p>
            <p>Locatie: Online</p>
            <p>Periode: 15/02/2022 - 16/02/2022</p>
          </article>
          <article className="grid-item-hidden"></article>
        </div>
      </div>
      <div className="personal-dev">
        <h2 className="personal-dev-title">Persoonlijke Ontwikkeling</h2>
        <div className="grid">
          <article className="grid-item">
            <h3>I-Talent Portfolio</h3>
            <p>
              Een portfolio waarbij de student alle activiteiten bijhoud die
              hij/zij gepresteerd heeft. In het kader van I-Talent organiseert
              Hogeschool PXL verschillende evenementen en activiteiten die een
              student kan bijwonen.
            </p>
            <p>Periode: 2019-2022</p>
          </article>
          <article className="grid-item">
            <h3>Projectweek 2020</h3>
            <p>
              Een introductieweek waar het succesvol starten van het research
              project centraal staat. Op basis van een
              Thalento-persoonlijkheidstest worden groepen gevormd.
            </p>
            <p>Locatie: Hogeschool PXL, B-blok, D-blok & Corda Campus</p>
            <p>Periode: 10/02/2020 - 14/02/2020</p>
          </article>
          <article className="grid-item">
            <h3>Projectweek 2021</h3>
            <p>
              Een introductieweek waar het succesvol starten van het research
              project centraal staat. Op basis van een
              Thalento-persoonlijkheidstest worden groepen gevormd.
            </p>
            <p>Locatie: Online</p>
            <p>Periode: 15/02/2021 - 19/02/2021</p>
          </article>
          <article className="grid-item">
            <h3>POP-sessies</h3>
            <p>
              In 3 verschillende sessies werd er in groep gewerkt aan teamwork,
              feedback en zelfontplooing.
            </p>
            <p>Locatie: Hogeschool PXL, B-blok & Corda Campus</p>
            <p>Datums: 03/03/2020 | 09/03/2021 | 30/03/2021</p>
          </article>
        </div>
      </div>
    </div>
  );
};

export default ActivityList;
