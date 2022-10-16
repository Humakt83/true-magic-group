<script>
  import Tournament from './Tournament.svelte';
  export let event;

  const IMAGES_PATH = 'images/';

  let expanded = false;
  let currentImage = 0;

  const formatDate = (dateStr) => {
    const date = new Date(dateStr)
    return `${date.getDate()}.${date.getMonth()}.${date.getFullYear()}`;
  }

  function toggleExpand() {
    expanded = !expanded;
  }

  function changeImage(mod) {
    currentImage += mod;
    if (currentImage < 0) {
      currentImage = event.images.length -1;
    } else if (currentImage >= event.images.length) {
      currentImage = 0;
    }
  }

</script>

<main>
  <h3 class="event_title">{event.title}</h3>
  <button class="event_toggle" on:click={toggleExpand}>{expanded ? '⬆' : '⬇'}</button>
  <div class="event_content" class:event_content--hidden={!expanded}>
    <p class="event_date">{formatDate(event.when)}</p>
    <p class="event_participants">Osallistujat: {event.participants}</p>
    {#if event.images}
      <img on:click={() => changeImage(1)} src={IMAGES_PATH + event.images[currentImage]} alt="A picture from the event" />
    {/if}
    {#if event.tournament}
      <Tournament tournament={event.tournament}></Tournament>
    {/if}
  </div>
</main>

<style lang="scss" scoped>
  @import '../../vars.scss';

  main {
    max-width: 800px;
    position: relative;
    background-color: $background-color;
    margin: 0 auto;
    padding: 0.5rem 2rem;
    border: $content-border;
    margin-bottom: 2rem;
    
    h3 {
      font-size: larger;
    }

    .event_content {
      min-height: 5rem;
      transition: all 0.3s ease-in-out;
      &--hidden {
        min-height: 0;
        height: 0;
        opacity: 0;
      }

      img {
        max-width: 600px;
        cursor: pointer;
        border: 3px solid $highlight-color;
      }
    }
    .event_image_change,
    .event_toggle {
      background: none;
      color: inherit;
      border: none;
      padding: 0;
      font: inherit;
      cursor: pointer;
      outline: inherit;
      position: absolute;
      top: 1rem;
      right: 1rem;
    }
  }
</style>