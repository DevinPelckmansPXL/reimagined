import "./EurofinsPostman.css";
import PostmanIntro from "../../../assets/PostmanIntro.png";
import PostmanMethods from "../../../assets/PostmanMethods.png";
import PostmanCodes from "../../../assets/PostmanCodes.png";

const EurofinsPostman = () => {
  return (
    <div className="postman-base">
      <h1 className="title">Eurofins - Postman</h1>
      <p>
        Postman is een populaire tool om de functionaliteit van APIs te testen.
        Tijdens deze workshop werd er uitgelegd wat een API is en hoe we dit
        kunnen testen aan de hand van Postman. Alle opdrachten werden
        individueel uitgewerkt.
      </p>
      <p>
        Dit seminarie begon met de algemene uitleg over een API. API,
        Application Programming Interface, is een software laag die ervoor zorgt
        dat 2 toepassingen met elkaar kunnen communiceren. Er werd een
        vergelijking gemaakt met de horeca, om het concept beter te begrijpen.
        Als klant kunnen wij aan de ober een request sturen. De ober verwerkt
        dit request en gaat vervolgens in de vorm van een response ons eten
        halen en brengen. Waar de ober het eten juist haalt is niet van belang
        voor de klant. Wat er in de keuken gebeurt is ook niet belangrijk,
        zolang het juiste eten maar bij de klant aankomt.
      </p>
      <img src={PostmanIntro} alt="Real-world request/response analogy" />
      <p>
        Vervolgens werd er uitgelegd waarom je best gebruik maakt van een API.
        APIs zijn goed voor de veiligheid, want dan geef je niet alle data
        zomaar vrij. Je kan er immers zelf voor kiezen om bepaalde of alle
        requests te encrypteren. Zo kan iemand bijvoorbeeld enkel een request
        uitvoeren als hij de juiste credentials meegeeft. Verder is het ook
        snel, een response is bijna onmiddellijk beschikbaar. Ten slotte kan je
        sommige elementen ervan hergebruiken en weet je ook welke data je kan
        verwachten.
      </p>
      <p>
        Na de algemene uitleg volgde een kort overzicht van de API standaarden.
        Op één daarvan gingen we dieper in: REST. REST staat voor
        Representational State Transfer en steunt op een HTTP specificatie. Het
        is de manier waarop we data van een backend naar een frontend kunnen
        krijgen. Dit was belangrijk, aangezien we met deze standaard de
        opdrachten gingen oplossen. REST komt met een aantal specifieke
        ‘werkwoorden’ die centraal staan om met een API te kunnen interageren.
        Onderstaande tabel geeft hier meer duidelijkheid over.
      </p>
      <img src={PostmanMethods} alt="Table of HTTP methods" />
      <p>
        Na het uitvoeren van een request zal er ook altijd van de API een
        response komen. Ook hier zijn de nodige standaarden voor gedefinieerd.
        In de afbeelding hieronder wordt er uitgelegd wat de diverse statuscodes
        betekenen.
      </p>
      <img src={PostmanCodes} alt="Table of response codes" />
      <p>
        Op het einde van de presentatie werd er kort samengevat wat we
        ondertussen al gezien hadden. Daarna werd Postman als testprogramma voor
        APIs aan ons geïntroduceerd. Via
        https://documenter.getpostman.com/view/4858910/S1LpZrgg konden we eerst
        even zelfstandig de functionaliteiten van Postman ontdekken. Postman kan
        niet enkel gewoon requests uitvoeren, er is ook de mogelijkheid om
        bepaalde requests te groeperen in collections. Die collections kunnen
        gedeeld worden met andere developers, zodat ze direct aan de slag kunnen
        met het werk dat jij al verricht had. Nadien was het tijd om de Postman
        app onder de knie te krijgen door middel van een aantal opdrachten.
      </p>
      <p>
        In de eerste opdracht maakten we kennis met het concept van dynamische
        variabelen. Hierin was het de bedoeling om een vaste waarde van een
        request te veranderen met een dynamische variabele. Op deze manier
        kregen we een andere response naar gelang de variabele veranderde. De
        tweede opdracht ging over scripting. In deze oefening moesten er een
        aantal log statements toegevoegd worden aan het request. Met het
        uitvoeren van de call werden die log statements ook geprint in de
        console. De volgende opdrachten vielen ook onder het onderwerp van
        scripting. Er werd getest of er bepaalde dynamische variabelen gelogd
        werden, wat er zou gebeuren als dit geen dynamische variabelen zouden
        zijn, enzovoort…
      </p>
      <p>
        Dit seminarie was enorm interessant, omdat een API vandaag de dag niet
        meer weg te denken is bij bijna alle webapplicaties. Communicatie tussen
        front- en backend moet nu eenmaal gebeuren, en niks is handiger om dit
        gedrag te testen met een applicatie zoals Postman. Postman was tijdens
        de opleiding al eens aan bod gekomen, maar nooit echt met de verdieping
        die zich bevond in dit seminarie. Ik had Postman ook al gebruikt in
        diverse projecten, maar zelf nog nooit iets met dynamische variabelen of
        collections gedaan. Ik wist ook niet dat Postman testen toelaat, die
        zich bevinden in een testscript. Na het seminarie zie ik het nut er wel
        van in, het testen van APIs is nu eenmaal belangrijk.
      </p>
      <p className="last">
        Bij de algemene uitleg had ik eerst wat schrik dat dit weer de zoveelste
        introductie was over het API principe en dat men weinig tijd zou
        besteden aan het werken met Postman zelf. Gelukkig was dit niet het
        geval en waren er genoeg opdrachten. Elke opdracht was zorgvuldig
        beschreven en duidelijk. De opdrachten waren ook niet te gemakkelijk
        waardoor ze leuke uitdagingen vormden. Ze waren zo boeiend, dat ik na
        afloop van het seminarie de resultaten besproken heb met een
        medestudent, iets wat ik zelden doe. We zijn vervolgens over alle
        opdrachten gegaan en hebben onze resultaten vergeleken. Het is eigenlijk
        jammer dat deze verdieping niet in de opleiding zit momenteel. Het zou
        veel tijd en frustraties bij teams voorkomen, denk ik. Dit seminarie is
        een echte aanrader voor alle studenten! Ik ga de vergaarde kennis zeker
        toepassen in mijn toekomstige projecten indien ze gebruik maken van een
        of meerdere APIs.
      </p>
    </div>
  );
};

export default EurofinsPostman;
