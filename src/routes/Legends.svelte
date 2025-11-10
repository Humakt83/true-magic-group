<script>
  const legends = [
    'Janne ajoi 2/1 ritarillaan kun Caltropsi oli pöydässä',
    'Jani oli niin vakuuttava henkivartija Hidden Alliancesissa, että kuningas Risto luuli häntä neutraaliksi ja tiputti hänet. Tuukka voitti neutraalina.',
    'Kauan sitten kannelmäessä pelattiin 2HG:ta planechasella, Risto ja Jani vastaan Mikko ja Tero. Ensimmäinen plane antoi kolme goattia per land droppi ja toinen plane oli käytännössä Goat of Arms, Ristolla ja Janilla oli reippaasti enemmän vuohia ja peli loppui kolmannella rundilla',
    'Jani suuttui Moonmististä ja heitti sen hyllyn taakse, kun hänen alpha hyökkäyksensä epäonnistui',
    'Janne voitti Innistrad limited moninpelin dekkaamalla itsensä kun Laboratory Maniac oli kentällä.',
    'Pelattiin Commanderia Starissa Praetor pakoilla, Tero pelasi sinisellä Praetorilla jä päätti Mindslaverilla ottaa haltuun Riston vuoron, jota hänen ei olisi tarvinnut tiputtaa voittaakseen ja käytti Necropotencea tiputtaakseen Riston. Tero voitti Starin ilman, että muita pelaajia oli hengissä.',
    '5 star EDH peli. Hannu oli voittamassa selvästi peliä Meriekellä (molemmilla vastustajilla lifet vähissä) ja estääkseen veljensä voiton täytyi Jannen (10 lifessä) tap outata ja sweepata pöytä puhtaaksi. Teron Kibo oli ollut tähän asti koko pelin ajan toivottomassa asemassa, mutta Jannen siivottua myös omat suojansa pääsi kädestä pelattu Grunn Instill Energyllä varustettuna iskemään Janneen tasaluvun! Pakan pohjalta hiipi spektaakkelia katsomaan myös Simian Grunts!',
    'Jani oli aikasemmin lainannut Jannen Ancient Silver Dragonia ja nostanut reilu parikyt korttia. Sit Janne sai sen takas ja päätti hyökätä Janiin. Jani kysyi "ootko ihan varma et tänne?" Janne sano "joo joo sinne sinne". Sit Jani sanoi "no pelataan tämmönen" ja pelas Deflecting Palmin. Janne nielas klunk ja rupes kerää kortteja.',
    'Itä-Stadin mökkifestien lauantai-iltana päätettiin ottaa yksi Hidden alliance. Kuninkaaksi valikoitui korttiarvan jälkeen Hannu, joka tuli pelin aikana saamaan lisänimen Kuopion mad-king Handeli. Hannu jakeli armottomia rautanyrkki käskyjä muun muassa vuoroa sanottiin fujitsuksi, damagea lämpsyndeerukseksi ja nostoa nosturiksi. Myös Hovinarriksi pelin loputtua paljastunut Janne näytti sokeaa uskoaan hulluun kuningasveljeen laulamalla paljon onnea koirien kielellä, näytellen selällään olevaa kilpikonnaa koodaamassa ja myös erityisen köyhän miehen version tunteellisesti itkevästä Axel Rosesta (lähes joutui rojalteja maksamaan).<br /><br />Pelin kohokohta hetki oli kun hulluuden kuningas Hannu sai idean että tokihan assassiinien täytyy toisensa tietää (tämä saattaa olla myös pelityypin säännöissä). Hannu käski kaikkien laittaa silmänsä kiinni ja taputtamaan pöytää samalla istualtaan tanssien. Hannun sekavat käskyt assassiinien silmien avaamisesta tulivat ja ainoastaan Tuukka avasi silmänsä ja katseli kun muu porukka taputteli pöytää riemuisasti. Sitten kaikki avasivat silmänsä ja Tero toinen assassiini tajusi että nyt ei kaikki mennyt niinkuin piti (kuten Simo Silmu ja myös Janne laulaa) halusi hän, että silmien kiinni laitto ja taputus voitaisiin uusia, koska se oli niin hauskaa.<br /><br />Pelin aikana Tuukka joutui lähes vegaaniseen tilaan, Hannu sai varmasti ensi viikoksi luokkaan uusia käskyjä ja muut selvisivät juuri ja juuri rautaisen diktatuurin ajasta, paitsi ne jotka Jani ajoi hautaan hulluuden pelin lopettavalla insurrection iskulla. Oli myös lähellä että henkivartija-inkvisiittori Jani  olisi ajanut kaiken lämpsyndeeruksen Hullu-Hannuun.'
  ]
</script>

<main>
  <h2 id="legendat">Legendat</h2>
  {#each legends as legend}
    <p>{@html legend}</p>
  {/each}
</main>

<style lang="scss" scoped>
  @import '../vars.scss';

  main {
    background-color: $background-color;
    width: fit-content;
    margin: 2rem auto;
    padding: 0.5rem 2rem;
    border: $content-border;
    max-width: 800px;
    p {
      background-color: $paragraph-bg-color;
      padding: 0.5rem 1rem;
      border-radius: 2px;
    }
  }
</style>