<script>
  import { base } from '$app/paths';
</script>

<main>
  <nav>
    <a href="{base}">Etusivu</a>
    <a href="{base}/events">Tapahtumat</a>
    <a href="{base}/cube">Commander Cube</a>
  </nav>
</main>

<style lang="scss">
  @import '../vars.scss';

  nav {
    text-align: center;
    margin: 0 auto;
    display: inline-flex;
    background-color: $background-color;
    border: $content-border;
    padding: 1rem 2rem;

    a { 
      text-decoration: none;
      &:link {
        color: $highlight-color;
      }
      &:visited {
        color: $background-color;
      }
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