<script>
  import cube from '../../assets/cube.json';
  import SectionContainer from './SectionContainer.svelte';

  let cardToShow = null;

  function getCardsByColors(colors) {
    return cube.filter(c => c?.colors?.length === colors.length && colors.every(color => c?.colors?.includes(color)));
  }

  const moreThan3 = cube.filter(c => c?.colors?.length > 3);

  const lands = cube.filter(c => c?.types?.includes('Land'));
  const conspiracies = cube.filter(c => c?.types?.includes('Conspiracy'));
  const colorless = cube.filter(c => !c.colors && !c?.types?.includes('Land') && !c?.types?.includes('Conspiracy'));

  function showCard(card) {
    cardToShow = card;
  }

</script>

<main>
  {#if cardToShow}
    <img class="card_image" src={cardToShow.imageUrl} alt={cardToShow.name} />
  {/if}
  <!-- <script src="http://tappedout.net/tappedout.js"></script> -->
  <h3 class="cube_title" id="cube">Commander Cube</h3>
  <div class="cube_content">
    <SectionContainer sectionName="White" cards={getCardsByColors(['W'])} showCard={showCard}></SectionContainer>
    <SectionContainer sectionName="Blue" cards={getCardsByColors(['U'])} showCard={showCard}></SectionContainer>
    <SectionContainer sectionName="Black" cards={getCardsByColors(['B'])} showCard={showCard}></SectionContainer>
    <SectionContainer sectionName="Red" cards={getCardsByColors(['R'])} showCard={showCard}></SectionContainer>
    <SectionContainer sectionName="Green" cards={getCardsByColors(['G'])} showCard={showCard}></SectionContainer>

    <SectionContainer sectionName="Azorius" cards={getCardsByColors(['W', 'U'])} showCard={showCard}></SectionContainer>
    <SectionContainer sectionName="Dimir" cards={getCardsByColors(['U', 'B'])} showCard={showCard}></SectionContainer>
    <SectionContainer sectionName="Rakdos" cards={getCardsByColors(['B', 'R'])} showCard={showCard}></SectionContainer>
    <SectionContainer sectionName="Gruul" cards={getCardsByColors(['R', 'G'])} showCard={showCard}></SectionContainer>
    <SectionContainer sectionName="Selesnya" cards={getCardsByColors(['G', 'W'])} showCard={showCard}></SectionContainer>

    <SectionContainer sectionName="Orzhov" cards={getCardsByColors(['W', 'B'])} showCard={showCard}></SectionContainer>
    <SectionContainer sectionName="Boros" cards={getCardsByColors(['W', 'R'])} showCard={showCard}></SectionContainer>
    <SectionContainer sectionName="Izzet" cards={getCardsByColors(['U', 'R'])} showCard={showCard}></SectionContainer>
    <SectionContainer sectionName="Simic" cards={getCardsByColors(['U', 'G'])} showCard={showCard}></SectionContainer>
    <SectionContainer sectionName="Golgari" cards={getCardsByColors(['G', 'B'])} showCard={showCard}></SectionContainer>

    <SectionContainer sectionName="Bant" cards={getCardsByColors(['W', 'U', 'G'])} showCard={showCard}></SectionContainer>
    <SectionContainer sectionName="Esper" cards={getCardsByColors(['W', 'U', 'B'])} showCard={showCard}></SectionContainer>
    <SectionContainer sectionName="Grixis" cards={getCardsByColors(['U', 'B', 'R'])} showCard={showCard}></SectionContainer>
    <SectionContainer sectionName="Jund" cards={getCardsByColors(['B', 'R', 'G'])} showCard={showCard}></SectionContainer>
    <SectionContainer sectionName="Naya" cards={getCardsByColors(['G', 'W', 'R'])} showCard={showCard}></SectionContainer>

    <SectionContainer sectionName="Abzan" cards={getCardsByColors(['W', 'B', 'G'])} showCard={showCard}></SectionContainer>
    <SectionContainer sectionName="Jeskai" cards={getCardsByColors(['W', 'U', 'R'])} showCard={showCard}></SectionContainer>
    <SectionContainer sectionName="Mardu" cards={getCardsByColors(['W', 'B', 'R'])} showCard={showCard}></SectionContainer>
    <SectionContainer sectionName="Sultai" cards={getCardsByColors(['B', 'U', 'G'])} showCard={showCard}></SectionContainer>
    <SectionContainer sectionName="Temur" cards={getCardsByColors(['G', 'U', 'R'])} showCard={showCard}></SectionContainer>

    <SectionContainer sectionName="Colorless" cards={colorless} showCard={showCard}></SectionContainer>
    <SectionContainer sectionName="Lands" cards={lands} showCard={showCard}></SectionContainer>
    <SectionContainer sectionName="More than Three Colors" cards={moreThan3} showCard={showCard}></SectionContainer>
    <SectionContainer sectionName="Conspiracy" cards={conspiracies} showCard={showCard}></SectionContainer>
    <!-- <div class="deck-list" data-stub="30-09-25-commander-cube">&nbsp;</div> -->
  </div>
</main>

<style lang="scss" scoped>
  @import '../../vars.scss';

  main {
    max-width: 90vw;
    position: relative;
    background-color: $background-color;
    margin: 0 auto;
    padding: 0.5rem 2rem;

    @media screen and (max-width: 600px) {
      padding: 0.5rem;
    }
    border: $content-border;
    margin-bottom: 2rem;
    
    h3 {
      font-size: larger;
    }

    .cube_content {
      position: relative;
      display: grid;
      grid-template-columns: repeat(5, minmax(0, 1fr));
      @media screen and (max-width: 600px) {
        grid-template-columns: repeat(1, minmax(0, 1fr));
      }
      column-gap: 0.5rem;
      row-gap: 0.5rem;
      justify-content: stretch;
    }

    .card_image {
      position: fixed;
      top: 1rem;
      width: 300px;
      z-index: 200;
      @media screen and (max-width: 600px) {
        right: 1rem;
      }
    }
  }
</style>
