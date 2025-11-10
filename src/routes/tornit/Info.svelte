<script>
  export let cards;

  let cardsInBooster = [];

  function sampleBooster() {
    cardsInBooster = [];
    while (cardsInBooster.length < 20) {
      const card = cards[Math.floor(Math.random() * cards.length)];
      if (!cardsInBooster.map(c => c.name).includes(card.name)) {
        cardsInBooster.push(card);
      }
    }
  }

</script>

<main>
  <div class="info">
    <h4>Themes</h4>
    <p>
      Enchantments: <i class="ms ms-cost ms-ci-5" />
      Goblins <i class="ms ms-cost ms-r" /><i class="ms ms-cost ms-b smaller" />
      Zombies <i class="ms ms-cost ms-b" /><i class="ms ms-cost ms-u smaller" />
      Planeswalkers <i class="ms ms-cost ms-r" /><i class="ms ms-cost ms-w" />
      Morph <i class="ms ms-cost ms-u" /><i class="ms ms-cost ms-g smaller" /><i class="ms ms-cost ms-w smaller" />
      Tokens: <i class="ms ms-cost ms-g" /><i class="ms ms-cost ms-w smaller" />
      +1/+1 Counters: <i class="ms ms-cost ms-g" /><i class="ms ms-cost ms-w smaller" />
    </p>
    <button on:click={sampleBooster}>Sample Booster</button>
    {#if cardsInBooster.length > 0}
      <div class="booster-cards">
        {#each cardsInBooster as card}
          <img src={card.imageUrl} alt={card.name}/>
        {/each}
      </div>
    {/if}
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

    button {
        background-color: $background-color;
        color: $color;
        border: $background-color;
        padding: 0.5rem 2rem;
        font-weight: bolder;
        border-radius: 2px;
        &:hover {
            background-color: darken($background-color, 10);
        }
    }

    .info {
      position: relative;
      background-color: $color;
      color: $background-color;
      margin: 0 auto 1rem;
      padding: 0.5rem 2rem;
      border: $content-border;
      text-align: center;
      width: 80%;
      h4 {
        margin-bottom: 0;
      }
      i {
        font-size: small;
        margin-right: 2px;
        &.smaller {
          font-size: x-small;
          margin-right: 1px;
        }   
      }
    }
  }
</style>
