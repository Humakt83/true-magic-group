<script>
</script>

<main>
  <nav>
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
      font-weight: bolder;
      &:visited {
        color: $color;
      }
    }
  }
</style>