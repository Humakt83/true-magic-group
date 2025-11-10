<script>
  import Commandments from './Commandments.svelte';
  import Legends from './Legends.svelte';
  import Members from './Members.svelte';
  import mainImage from '$lib/images/main1.jpg';
</script>

<svelte:head>
	<title>TRUE - MAGIC - GROUP</title>
	<meta name="description" content="true-magic-groupin saitti" />
</svelte:head>

<main>

  <img src={mainImage} alt="Monta pakkaa" />

  <p>Keittiöpöytäpeliä jo vuodesta nakki ja makkara. Commander, Planechase, Cube, Draft, Sealed, 2HG, 3HG, 7 Tornia jne.</p>

  <Members></Members>

  <Commandments></Commandments>

  <Legends></Legends>

</main>

<style lang="scss">
  @import '../vars.scss';
 
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