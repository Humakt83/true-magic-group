<script>
  import Booster from '$lib/draft/Booster.svelte';

  export let draft = null;

</script>

<main>
  <div class="info">
    <Booster cardsInBooster={draft.activeBooster}/>
  </div>
</main>

<style lang="scss" scoped>
  @import '../../vars.scss';

  main {

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
