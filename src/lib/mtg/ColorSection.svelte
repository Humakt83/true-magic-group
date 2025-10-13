<script>
  export let sectionName = "";
  export let cards = [];
  export let showCard = (card) => null;
  const legends = cards.filter(c => c?.types?.includes('Creature') && c?.supertypes?.includes('Legendary'));
  const other = cards.filter(c => !(c?.types?.includes('Creature') && c?.supertypes?.includes('Legendary')));

</script>

<main>
  <h4 class="section_title">{sectionName}</h4>
  <div class="section section_legendaries">
    {#each legends as card}
        <div on:mouseenter={showCard(card)} on:mouseleave={showCard(null)}>
          {card.name}
        </div>
      {/each}
  </div>
  <div class="section section_other">
      {#each other as card}
        <div on:mouseenter={showCard(card)} on:mouseleave={showCard(null)}>
          {card.name}
        </div>
      {/each}
  </div>
</main>

<style lang="scss" scoped>
  @import '../../vars.scss';

  main {
    position: relative;
    background-color: $color;
    color: $background-color;
    margin: 0 auto;
    padding: 0.5rem 2rem;
    border: $content-border;
    text-align: left;
    width: 80%;

    .section {
      display: 'flex';
      flex-direction: column;
      justify-items: start;
      margin-bottom: 1rem;
    }
  }
</style>