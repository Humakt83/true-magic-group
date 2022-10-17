<script>
  import Menu from './lib/menu/Menu.svelte'
  import Commandments from './lib/content/Commandments.svelte';
  import Events from './lib/content/Events.svelte';
  import Legends from './lib/content/Legends.svelte';
  import Members from './lib/content/Members.svelte';
</script>

<main>
  <Menu></Menu>

  <h1>TRUE - MAGIC - GROUP</h1>

  <img src="images/main1.jpg" alt="Monta pakkaa" />

  <p>Keittiöpöytäpeliä jo vuodesta nakki ja makkara. Commander, Planechase, Cube, Draft, Sealed, 2HG, 3HG, 7 Tornia jne.</p>

  <Members></Members>

  <Commandments></Commandments>

  <Events></Events>

  <Legends></Legends>

</main>

<style lang="scss">
  @import './vars.scss';

  :root {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background: $background-gradient;
  }

  :global {
    a {
      text-decoration: none;
      color: $highlight-color;
      &:link {
        color: $highlight-color;
      }
      &:visited {
        color: $background-color;
      }
    }
  }
  
  main {
    text-align: center;
    color: $color;
    height: 100%;
    width: 100%;
  }

  img {
    width: 500px;
    max-width: 90vw;
    border: 3px solid $highlight-color;
  }

  h1 {
    color: $highlight-color;
    text-transform: uppercase;
    font-size: 2.5rem;
    @media screen and (max-width: 600px) {
      font-size: 1.3rem;
    }

    font-weight: bold;
    line-height: 1.1;
    margin: 2rem auto;
    width: fit-content;
    border-bottom: 5px solid $highlight-color;
  }
  p {
    max-width: 14rem;
    margin: 1rem auto;
    line-height: 1.35;
  }

  @media (min-width: 480px) {
    h1 {
      max-width: none;
    }

    p {
      max-width: none;
    }
  }
</style>
