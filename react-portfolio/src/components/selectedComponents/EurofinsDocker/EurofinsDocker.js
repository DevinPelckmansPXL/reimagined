import "./EurofinsDocker.css";
import EurofinsDocker1 from "../../../assets/EurofinsDocker1.png";
import EurofinsDocker2 from "../../../assets/EurofinsDocker2.png";

const EurofinsDocker = () => {
  return (
    <div className="docker-base">
      <h1 className="title">Eurofins - Docker</h1>
      <p>
        “Maar het werkt toch op mijn computer!” is een euvel dat wel vaker
        voorkomt in de wereld van de softwareontwikkelaars. Docker biedt
        hiervoor een oplossing aan, door applicaties te runnen in Docker
        containers die op eender welke computer kunnen draaien. Tijdens deze
        workshop kregen we een uitgebreide introductie tot Docker, die gevolgd
        werd door een handvol opdrachten. Al deze opdrachten dienden individueel
        te worden uitgewerkt.
      </p>
      <p>
        Om te beginnen stellen we ons de vraag: “Waarom Docker gebruiken?”. Als
        een developer code schrijft en runt op zijn systeem, en dan doorstuurt
        naar een tester, zou het op de computer van de tester ook moeten werken.
        Als de code niet werkt op het systeem van de tester, wil dit zeggen dat
        de developer en de tester in verschillende computer environments werken.
        Een virtuele machine zou hier een mogelijke oplossing voor kunnen zijn.
        Toch biedt Docker een beter alternatief. Het verschil tussen Docker en
        een virtuele machine is dat Docker veel minder opslagruimte nodig heeft.
        Het duurt ook niet lang om de Docker omgeving op te starten, en het
        programma is ook performanter dan een virtuele machine. Een Docker
        omgeving kan ook gemakkelijker van het ene platform naar het andere over
        gezet worden. Docker sluit zich dus dichter aan bij het DevOps principe
        dat tegenwoordig zeer populair is. Onderstaande afbeelding geeft meer
        uitleg over wat Docker allemaal kan betekenen.
      </p>
      <img src={EurofinsDocker1} alt="Summary of Docker container" />
      <p>
        Na de initiële vraag kunnen we wat dieper ingaan op het principe achter
        Docker. Docker is een tool die gebruikt wordt om de implementatie van
        een applicatie in een container te automatiseren. Op deze manier kunnen
        applicaties efficiënt werken in verschillende omgevingen. Een container
        is een softwarepakket dat een hoop dependencies bevat die nodig zijn om
        een applicatie uit te voeren. Dit zorgt er uiteindelijk voor dat
        verschillende containers dezelfde hardware kunnen gebruiken. Elke
        container is verantwoordelijk voor slechts 1 applicatie, wat de
        productiviteit alleen maar boost.
      </p>
      <p>
        Vervolgens moeten we weten hoe Docker juist werkt. Buiten Docker
        containers zijn er ook nog Docker files en images. Een Docker file is
        een bestand dat eigenlijk een soort blauwdruk is voor een Docker image.
        Een Docker image is een template voor het uitvoeren van Docker
        containers. Een developer kan een omgeving definiëren in een Docker
        file. Dit bestand kan een andere developer of tester dan gebruiken om de
        omgeving te recreëren op zijn/haar machine. Dit hele proces wordt dan
        opgeslagen als een Docker image, een onveranderlijke momentopname. Een
        Docker image kan ook gedeeld worden om zo iedereen dezelfde container te
        geven. De volgende illustratie toont het basis Docker proces.
      </p>
      <img src={EurofinsDocker2} alt="Basic Docker process" />
      <p>
        De ervaring leert ons dat het potentieel van deze software pas
        tevoorschijn komt door het gebruik ervan. Na de introductie volgden dus
        ook een paar opdrachten. In deze opdrachten werd er kennis gemaakt met
        het principe van de containers, en waarom deze steeds populairder
        worden. We kregen ook een korte introductie van het gebruik van een
        Docker file, waarmee je zelf een Docker image kan maken. In zo’n bestand
        komen diverse belangrijke dingen aan bod, zoals het opzetten van de
        omgeving en de omgevingsvariabelen. Er werd ook meegedeeld dat
        verschillende containers op hetzelfde moment actief kunnen zijn.
        Hiervoor is er het Docker compose principe. Om databasegegevens te
        gebruiken over meerdere containers gebruik je een volume. In het Docker
        compose bestand wordt er dan beschreven welke containers actief zijn op
        welke poort, en of ze over een bepaald volume beschikken. Zo is dus al
        snel te zien dat een applicatie gemakkelijk te schalen is, en aangezien
        elk proces in een aparte container runt gaat dit niet ten koste van de
        performance.
      </p>
      <p>
        Docker is een complexe software en dit seminarie had ook als doel om met
        veel analogieën meer duidelijkheid te scheppen. Tijdens dit seminarie
        heb ik heel wat bijgeleerd. Ik begrijp nu waarom deze technologie
        populair is en waarvoor ze gebruikt wordt. De opdrachten waren duidelijk
        en goed te volgen, ook al ging er af en toe wel eens iets mis. Ik weet
        niet of het aan mijn laptop lag of aan het programma, maar sommige
        dingen werkten gewoon niet. Het finetunen van bestanden en het
        herhaaldelijk herstarten van de containers namen heel wat tijd in
        beslag. Uiteindelijk heb ik dan toch iets aan de praat gekregen, maar
        het seminarie was toen bijna zo goed als afgelopen.
      </p>
      <p>
        Mijn ervaringen toonden duidelijk aan dat het gebruik van Docker
        helemaal niet zo vanzelfsprekend is. Toch heb ik veel bijgeleerd op het
        vlak van Docker containers, files, images en hun gebruik. Belangrijk om
        weten is ook de manier waarop je data kan gebruiken en opslaan in een
        Docker omgeving. Dit kan je best doen met volumes waardoor de gegevens
        op het einde van het gebruik van containers niet verloren gaan.
      </p>
      <p className="last">
        Dit was het tweede seminarie van Eurofins waar ik aan deelgenomen heb.
        Op beide seminaries viel Eurofins op door hun goed gestructureerde en
        makkelijk te volgen presentaties. Een seminarie van drie uur verzorgen
        en de aandacht van iedereen erbij houden is een hele klus, die met glans
        geklaard werd door deze firma. Ik ga wat ik geleerd heb over Docker
        zeker meenemen naar de toekomst toe.
      </p>
    </div>
  );
};

export default EurofinsDocker;
