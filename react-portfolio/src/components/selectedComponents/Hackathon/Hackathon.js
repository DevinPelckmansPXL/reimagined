import "./Hackathon.css";
import HackathonTeams from "../../../assets/HackathonTeams.png";
import HackathonGame from "../../../assets/HackathonGame.png";
import HackathonGameSettings from "../../../assets/HackathonGameSettings.png";
import HackathonGameSelection from "../../../assets/HackathonGameSelection.png";
import HackathonDemo from "../../../assets/HackathonDemo.png";

const Hackathon = () => {
  return (
    <div className="hackathon-base">
      <h1 className="title">PXL-Digital - Hackathon</h1>
      <p>
        Binnen het I-Talent traject is de hackathon een belangrijk onderdeel. Ik
        had gekozen om deel te nemen aan een hackathon die georganiseerd werd
        door PXL-Digital in samenwerking met de onderzoekers van PXL Research
        Smart ICT. Voor de aanvang van de hackathon werd er gevraagd om een
        voorkeurstopic door te sturen. Er was keuze uit: ‘minigames in Unity’,
        ‘beeld- en objectherkenning’, ‘ontwikkeling van een keuzetool’ en
        ‘verwerking van grote data sets’. Samen met een paar andere studenten
        had ons team als voorkeurstopic ‘minigames in Unity’ doorgegeven.
        Omwille van Covid-19 werd er besloten dat de hackathon online zou
        doorgaan.
      </p>
      <p>
        Aan de start van de hackathon werd de opdracht ingeleid door een
        livestream die we samen met alle andere deelnemers als team gevolgd
        hebben. De opgave was in samenwerking met studenten ergotherapie van
        Sint-Oda. Zij lieten ons weten dat de minigame bespeeld ging worden door
        personen met complexe en/of meervoudige beperkingen. Tijdens deze
        inleiding moesten we als team ook een selectie maken van welke minigame
        ons het meest aansprak. De beschikbare minigames waren: ‘Malle Mollen’,
        ‘Puzzel’, ‘Bubbelen’, ‘Dierengeluiden’, ‘Kriebelbeestjes’, ‘Eekhoorn je
        mee’ en ‘Herfst’. Voor elke minigame werd er kort toegelicht wat de
        bedoeling was. Na de selectieronde werd elke groep toegewezen aan een
        minigame en was het tijd om er aan te beginnen. Elk team kreeg ook zijn
        eigen ruimte in Microsoft Teams voor alle vergaderingen. Dit is te zien
        in de afbeelding hieronder.
      </p>
      <img src={HackathonTeams} alt="Hackathon team in Microsoft Teams" />
      <p>
        Als team hadden wij gekozen voor de minigame ‘Puzzel’. Het doel van de
        minigame bestond erin om een bepaalde foto in een aantal puzzelstukken
        te verdelen. Een gebruiker heeft dan de mogelijkheid om een puzzelstuk
        te selecteren, en een plaats in de puzzel te selecteren. Indien beide
        overeen komen, krijgt de gebruiker feedback in de vorm van een positief
        geluid en wordt het puzzelstukje op de juiste plaats in de puzzel
        gelegd. Als de twee niet overeen komen, krijgt de gebruiker ook feedback
        in de vorm van een negatief geluid en wordt de selectie ongedaan
        gemaakt. Nu kan de gebruiker opnieuw proberen om een puzzelstuk op een
        juiste plaats te leggen.
      </p>
      <p>
        In het begin leek de opdracht op zich niet zo moeilijk. Een foto
        verdelen in puzzelstukken, die verplaatsen naar de linker- of
        rechterkant van het scherm en ze dan verplaatsbaar maken. We hadden
        echter even uit het oog verloren dat niet zomaar elke puzzel gebruikt
        kan worden voor mensen met een beperking. Ook had het geen zin om de
        puzzel te verdelen in 100 stukjes, omdat dit te moeilijk zou zijn voor
        het doelpubliek. Gelukkig kregen we regelmatig feedback van de studenten
        ergotherapie waardoor de doelstellingen van de opdracht niet voorbij
        gestreefd werden. De volgende illustratie toont het puzzelspel in actie.
      </p>
      <img src={HackathonGame} alt="Puzzle game in action" />
      <p>
        We hadden als team besloten om voor realistische puzzelstukken te gaan.
        Dit zorgde voor een extra uitdaging, omdat hiervoor toch wel wat
        complexe wiskunde nodig was. We kwamen er dan ook snel achter dat er
        best gewerkt werd met vierkante foto’s, zodat deze niet vervormden
        tijdens het opdelen in puzzelstukken. Naast de realistische
        puzzelstukken was het ook belangrijk dat de foto’s die in puzzelstukken
        verdeeld werden, zo veel mogelijk verschillende kleuren bevatten. Wat
        ook belangrijk bleek, was dat de verschillende kleuren op de foto genoeg
        contrast boden. Dit was een essentiële factor op basis van
        gebruiksvriendelijkheid voor mensen met een beperking. De minigame
        diende ook voorzien te worden van een menu met een aantal keuze-opties.
        Dit gaf de gebruiker de mogelijkheid om het geluid af te zetten indien
        gewenst, en ook om aan te geven in hoeveel stukken de foto verdeeld ging
        worden. Buiten het menu van de instellingen was er ook een selectiemenu.
        Hierin kon een gebruiker een foto aanduiden, waarna het spel kon starten
        en de gebruiker kon beginnen puzzelen. Hieronder een afbeelding van de
        instellingen gevolgd door een afbeelding van het selectiemenu.
      </p>
      <img src={HackathonGameSettings} alt="Puzzle game settings" />
      <img src={HackathonGameSelection} alt="Puzzle game selection" />
      <p className="last">
        Op het einde van de hackathon was er een demo, waarbij in een
        willekeurige volgorde ieder team aan bod kwam om zijn minigame in de
        spotlight te zetten. Elke demo had eerst een presentatiedeel, waar de
        studenten van het team voorgesteld werden. Vervolgens werd het thema
        toegelicht, met een korte introductie van de applicatie. Ten slotte gaf
        iedereen nog mee welke verbeteringen er nog gemaakt kunnen worden en
        mogelijke extra’s/alternatieven, zoals te zien is in dit fragment van
        onze presentatie.
      </p>
      <img
        src={HackathonDemo}
        alt="Demonstration of our application to a jury"
      />
      <p>
        De hackathon was voor mij een enorm positieve ervaring. Ik heb veel
        bijgeleerd op het vlak van gamedesign met Unity. Het was niet de eerste
        keer dat ik een game ontwikkelde, maar wel de eerste keer dat dit
        gebeurde met Unity. Gelukkig is Unity enorm populair in de wereld van
        gamedesign, dus er waren genoeg voorbeelden om snel van start te gaan.
        Ik kijk zeker uit naar de tijd wanneer ik Unity opnieuw kan gebruiken
        als software voor een game-gerelateerd project.
      </p>
      <p>
        Het was zeker ook een uitdaging om rekening te houden met het
        doelpubliek en de features zo op te bouwen dat mensen met een beperking
        ze ook kunnen gebruiken. Ik heb veel respect voor de studenten
        ergotherapie, die geen schrik hadden om direct bij te sturen waar nodig.
        Met hun feedback is de applicatie enorm verbeterd op vlak van
        gebruiksvriendelijkheid. Zo besef je toch maar dat er veel tijd kruipt
        in het ontwerpen van een minigame.
      </p>
      <p className="last">
        Ook werken in team met enthousiaste teamleden mag niet vergeten worden.
        Elk probleem werd op een professionele manier aangepakt, en iedereen was
        altijd bereid om te helpen. Ik heb hierdoor ook kunnen werken aan een
        van mijn zwakkere punten: communicatie. Ik heb het ook op mij genomen om
        de presentatie van ons team te verzorgen tijdens de demo’s. De
        introductie tot de wereld van hackathons had niet beter kunnen verlopen
        dan deel te nemen aan deze editie. Voor mijn eerste deelname ben ik zeer
        tevreden over het resultaat dat we als team hebben kunnen neerzetten.
        Naar een volgende hackathon toe neem ik zeker dezelfde motivatie en
        werklust mee.
      </p>
    </div>
  );
};

export default Hackathon;
