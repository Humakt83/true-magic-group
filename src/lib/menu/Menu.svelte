<script>
</script>

<main>
  <nav>
    <a href="#members">Jäsenet</a>
    <a href="#kaskyt">Käskyt</a>
    <a href="#events">Tapahtumat</a>
    <a href="#legendat">Legendat</a>
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