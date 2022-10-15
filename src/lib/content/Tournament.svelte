<script>
  import Results from './Results.svelte';

  export let tournament;
</script>

<main>
  <h4>Turnaus</h4>
  {#if tournament.winner}
    <p>🏆 Voittaja {tournament.winner} 🏆</p>
  {/if}
  {#each tournament.events as event}
  <div class="event">
    <p class="event_name">{event.name}</p>
    <p class="event_description">{event.scoring}</p>
    {#if event.results}
      <Results results={event.results}></Results>
    {/if}
  </div>
  {/each}
</main>

<style lang="scss" scoped>
  @import '../../vars.scss';

  .event {
    max-width: 600px;
    background-color: $color;
    padding: 1rem 2rem;
    color: $background-color;
    margin-bottom: 1rem;
    .event_name {
      font-weight: bolder;
    }
    box-shadow: 2px 3px 2px 3px $highlight-color;
  }
</style>