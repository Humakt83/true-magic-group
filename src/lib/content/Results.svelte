<script>
  export let results;
  export let showNoOther;

  const sortResultsByScore = (results) => {
    const copiedResults = [].concat(results);
    copiedResults.sort((a, b) => b.score - a.score)
    return copiedResults;
  }
</script>

<main>
  <p class="results">Tulokset</p>
  <ul type="none">
    {#each sortResultsByScore(results) as result}
      <li>{result.player} {result.score}</li>
      {#if result.other && !showNoOther}
      <li>- {result.other}</li>
      {/if}
    {/each}
  </ul>
</main>

<style lang="scss" scoped>
  @import '../../vars.scss';
  
  main {
    margin: 0 auto;
    width: fit-content;
    display: flex;

    .results {
      font-weight: bolder;
    }

    ul {
      text-align: left;
    }
  }
</style>