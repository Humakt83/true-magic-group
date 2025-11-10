<script>
  const commandments = [
    'Älä kritisoi Maroa, sinun herraasi',
    'Älä valita huonoa tuuriasi, Maro, sinun herrasi, on määrännyt mitä nostat',
    'Älä valita Teron hyvästä tuurista, Maro, sinun herrasi, on määrännyt mitä Tero nostaa',
    'Pelataan peliä sääntöjen mukaan, mutta annetaan anteeksi lapsukset',
    'Älä huijaa, se on noloa',
    'Älä suutu, se on vain peliä',
    'Älä nillitä, se on raskasta',
    'Pidetään hauskaa',
    'Jos sinulla ei ole pelissä hauskaa, niin kiitä onneasi ettei se ole ainakaan Lazarusta',
    'Jos sinulla ei ole pelissä hauskaa ja se on Lazarusta, niin kiitä onneasi ettei se ole Lazarusta Planechasella']
</script>

<main>
  <h2 id="kaskyt">Keittiöpöytäpelin 10 Käskyä</h2>
  <ol>
    {#each commandments as command}
    <li>{command}</li>
    {/each}
  </ol>
</main>

<style lang="scss" scoped>
  @import '../vars.scss';

  main {
    background-color: $paragraph-bg-color;
    width: fit-content;
    margin: 0 auto;
    padding: 0.5rem 2rem;
    border: $content-border;
    li {
      text-align: left;
      line-height: 1.5rem;
    }
  }
</style>