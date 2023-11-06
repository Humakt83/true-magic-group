<script>
  const legends = [
    'Janne ajoi 2/1 ritarillaan kun Caltropsi oli pöydässä',
    'Jani oli niin vakuuttava henkivartija Hidden Alliancesissa, että kuningas Risto luuli häntä neutraaliksi ja tiputti hänet. Tuukka voitti neutraalina.',
    'Kauan sitten kannelmäessä pelattiin 2HG:ta planechasella, Risto ja Jani vastaan Mikko ja Tero. Ensimmäinen plane antoi kolme goattia per land droppi ja toinen plane oli käytännössä Goat of Arms, Ristolla ja Janilla oli reippaasti enemmän vuohia ja peli loppui kolmannella rundilla',
    'Jani suuttui Moonmististä ja heitti sen hyllyn taakse, kun hänen alpha hyökkäyksensä epäonnistui',
    'Janne voitti Innistrad limited moninpelin dekkaamalla itsensä kun Laboratory Maniac oli kentällä.',
    'Pelattiin Commanderia Starissa Praetor pakoilla, Tero pelasi sinisellä Praetorilla jä päätti Mindslaverilla ottaa haltuun Riston vuoron, jota hänen ei olisi tarvinnut tiputtaa voittaakseen ja käytti Necropotencea tiputtaakseen Riston. Tero voitti Starin ilman, että muita pelaajia oli hengissä.',
    '5 star EDH peli. Hannu oli voittamassa selvästi peliä Meriekellä (molemmilla vastustajilla lifet vähissä) ja estääkseen veljensä voiton täytyi Jannen (10 lifessä) tap outata ja sweepata pöytä puhtaaksi. Teron Kibo oli ollut tähän asti koko pelin ajan toivottomassa asemassa, mutta Jannen siivottua myös omat suojansa pääsi kädestä pelattu Grunn Instill Energyllä varustettuna iskemään Janneen tasaluvun! Pakan pohjalta hiipi spektaakkelia katsomaan myös Simian Grunts!'
  ]
</script>

<main>
  <h2 id="legendat">Legendat</h2>
  {#each legends as legend}
    <p>{legend}</p>
  {/each}
</main>

<style lang="scss" scoped>
  @import '../../vars.scss';

  main {
    background-color: $background-color;
    width: fit-content;
    margin: 0 auto;
    padding: 0.5rem 2rem;
    border: $content-border;
    max-width: 800px;
  }
</style>