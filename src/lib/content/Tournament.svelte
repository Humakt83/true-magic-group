<script>
import Results from './Results.svelte';

  export let tournament;

  const totalResults = (events) => {
    const results = events.map((event) => event.results)
      .reduce((b, a) => b.concat(a));
    return results.reduce((r, result) => {
        const player = r.find((r) => r.player === result.player);
        if (player) {
          player.score += result.score;
        } else {
          r.push({...result});
        }
        return r;
      }, [])
  }
</script>

<main>
  <h4>Turnaus</h4>
  {#if tournament.winner}
    <p>🏆 Voittaja {tournament.winner} 🏆</p>
    {#if tournament.events.length > 1}
      <Results results={totalResults(tournament.events)}></Results>
    {/if}
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