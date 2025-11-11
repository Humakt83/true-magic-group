<script>
  export let cardsInBooster = [];
  export let pickCard = (idx) => null;
</script>

<main>
  <div class="booster-cards">
  {#each cardsInBooster as card, idx}
      <img src={card.imageUrl} alt={card.name}/ on:dblclick={() => pickCard(idx)}>
  {/each}
  </div>
</main>

<style lang="scss" scoped>
  @import '../../vars.scss';

  main {
    .booster-cards {
      display: grid;
      grid-template-columns: repeat(7, minmax(0, 1fr));
      @media screen and (max-width: 600px) {
        grid-template-columns: repeat(5, minmax(0, 1fr));
      }
      flex-direction: row;
      column-gap: 0.5rem;
      place-items: stretch;
    }
  }
</style>
