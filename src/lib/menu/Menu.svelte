<script>
  export let setCubeOpen;
</script>

<main>
  <nav>
    <a href="#members" on:click={setCubeOpen}>Jäsenet</a>
    <a href="#kaskyt" on:click={setCubeOpen}>Käskyt</a>
    <a href="#events" on:click={setCubeOpen}>Tapahtumat</a>
    <a href="#legendat" on:click={setCubeOpen}>Legendat</a>
    <a href="#cube" on:click={(event) => setCubeOpen(event, true)}>Cube</a>
  </nav>
</main>

<style lang="scss">
  @import './../../vars.scss';

  nav {
    text-align: center;
    margin: 0 auto;
    display: inline-flex;
    background-color: $background-color;
    border: $content-border;
    padding: 1rem 2rem;

    a { 
      margin-right: 1rem;
      font-size: large;
      @media screen and (max-width: 600px) {
        margin-right: 0.4rem;
        font-size: smaller;
      }

      font-weight: bolder;
      &:visited {
        color: $color;
      }
    }
  }
</style>