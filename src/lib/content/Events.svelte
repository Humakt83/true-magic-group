<script>

import Event from './Event.svelte';
import events from '../../assets/events.json';

</script>
<main>
  <h2 id="events">Tapahtumat</h2>
  {#each events as event}
    <Event event={event}></Event>
  {/each}
</main>