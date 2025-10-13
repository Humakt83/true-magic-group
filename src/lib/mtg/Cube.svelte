<script>
  import cube from '../../assets/cube.json';
  import ColorSection from './ColorSection.svelte';

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
  <!-- <script src="http://tappedout.net/tappedout.js"></script> -->
  <h3 class="cube_title" id="cube">Commander Cube</h3>
  {#if cardToShow}
  <img class="card_image" src={cardToShow.imageUrl} alt={cardToShow.name} />
  {/if}
  <div class="cube_content">
    <ColorSection sectionName="White" cards={getCardsByColors(['W'])} showCard={showCard}></ColorSection>
    <ColorSection sectionName="Blue" cards={getCardsByColors(['U'])} showCard={showCard}></ColorSection>
    <ColorSection sectionName="Black" cards={getCardsByColors(['B'])} showCard={showCard}></ColorSection>
    <ColorSection sectionName="Red" cards={getCardsByColors(['R'])} showCard={showCard}></ColorSection>
    <ColorSection sectionName="Green" cards={getCardsByColors(['G'])} showCard={showCard}></ColorSection>

    <ColorSection sectionName="Azorius" cards={getCardsByColors(['W', 'U'])} showCard={showCard}></ColorSection>
    <ColorSection sectionName="Dimir" cards={getCardsByColors(['U', 'B'])} showCard={showCard}></ColorSection>
    <ColorSection sectionName="Rakdos" cards={getCardsByColors(['B', 'R'])} showCard={showCard}></ColorSection>
    <ColorSection sectionName="Gruul" cards={getCardsByColors(['R', 'G'])} showCard={showCard}></ColorSection>
    <ColorSection sectionName="Selesnya" cards={getCardsByColors(['G', 'W'])} showCard={showCard}></ColorSection>

    <ColorSection sectionName="Orzhov" cards={getCardsByColors(['W', 'B'])} showCard={showCard}></ColorSection>
    <ColorSection sectionName="Boros" cards={getCardsByColors(['W', 'R'])} showCard={showCard}></ColorSection>
    <ColorSection sectionName="Izzet" cards={getCardsByColors(['U', 'R'])} showCard={showCard}></ColorSection>
    <ColorSection sectionName="Simic" cards={getCardsByColors(['U', 'G'])} showCard={showCard}></ColorSection>
    <ColorSection sectionName="Golgari" cards={getCardsByColors(['G', 'B'])} showCard={showCard}></ColorSection>

    <ColorSection sectionName="Bant" cards={getCardsByColors(['W', 'U', 'G'])} showCard={showCard}></ColorSection>
    <ColorSection sectionName="Esper" cards={getCardsByColors(['W', 'U', 'B'])} showCard={showCard}></ColorSection>
    <ColorSection sectionName="Grixis" cards={getCardsByColors(['U', 'B', 'R'])} showCard={showCard}></ColorSection>
    <ColorSection sectionName="Jund" cards={getCardsByColors(['B', 'R', 'G'])} showCard={showCard}></ColorSection>
    <ColorSection sectionName="Naya" cards={getCardsByColors(['G', 'W', 'R'])} showCard={showCard}></ColorSection>

    <ColorSection sectionName="Abzan" cards={getCardsByColors(['W', 'B', 'G'])} showCard={showCard}></ColorSection>
    <ColorSection sectionName="Jeskai" cards={getCardsByColors(['W', 'U', 'R'])} showCard={showCard}></ColorSection>
    <ColorSection sectionName="Mardu" cards={getCardsByColors(['W', 'B', 'R'])} showCard={showCard}></ColorSection>
    <ColorSection sectionName="Sultai" cards={getCardsByColors(['B', 'U', 'G'])} showCard={showCard}></ColorSection>
    <ColorSection sectionName="Temur" cards={getCardsByColors(['G', 'U', 'R'])} showCard={showCard}></ColorSection>

    <ColorSection sectionName="Colorless" cards={colorless} showCard={showCard}></ColorSection>
    <ColorSection sectionName="Lands" cards={lands} showCard={showCard}></ColorSection>
    <ColorSection sectionName="More than Three Colors" cards={moreThan3} showCard={showCard}></ColorSection>
    <ColorSection sectionName="Conspiracy" cards={conspiracies} showCard={showCard}></ColorSection>
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
    border: $content-border;
    margin-bottom: 2rem;
    
    h3 {
      font-size: larger;
    }

    .cube_content {
      display: grid;
      grid-template-columns: repeat(5, minmax(0, 1fr));
      column-gap: 0.5rem;
      row-gap: 0.5rem;
      justify-content: stretch;
    }

    .card_image {
      position: sticky;
      top: 1rem;
      width: 300px;
      z-index: 200;
    }
  }
</style>