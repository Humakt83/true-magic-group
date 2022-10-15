<script>
  import Tournament from './Tournament.svelte';
  export let event;
</script>

<main>
  <h3>{event.title}</h3>
  <p>Osallistujat: {event.participants}</p>
  <Tournament tournament={event.tournament}></Tournament>
</main>

<style lang="scss" scoped>
  @import '../../vars.scss';

  main {
    background-color: $background-color;
    width: fit-content;
    margin: 0 auto;
    padding: 0.5rem 2rem;
    border: $content-border;
    margin-bottom: 2rem;
    
    h3 {
      font-size: larger;
    }
  }
</style>