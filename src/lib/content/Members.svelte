<script>
  import members from '../../assets/members.json';
  const IMAGES_PATH = 'images/Members/';
</script>

<main>
  <h2 id="members">Jäsenet</h2>
  <div class="members">
    {#each members as member}
    <div class="member">
      <img src={IMAGES_PATH + member.image} alt={member.name}/>
      <ul type="none" class="member_description">
        <li><strong>Tykkää</strong>: {member.likes}</li>
        <li><strong>Trivia</strong>: {member.trivia}</li>
        <li><strong>Kyvyt</strong>: {member.skills}</li>
      </ul>
    </div>
    {/each}
  </div>
</main>

<style lang="scss" scoped>
  @import '../../vars.scss';

  main {
    background-color: $background-color;
    width: fit-content;
    margin: 0 auto 2rem;
    padding: 0.5rem 2rem;
    border: $content-border;
    max-width: 800px;

    .members {
      display: grid;
      grid-template-columns: 50% 50%;
      row-gap: 0.5rem;
      column-gap: 0.5rem;

      @media screen and (max-width: 600px) {
        grid-template-columns: 100%;
      }

      .member {
        display: grid;
        grid-template-columns: 40% 60%;
        justify-items: stretch;
        align-items: stretch;
        @media screen and (max-width: 400px) {
          grid-template-columns: 100%;
        }
        
        img {
          max-width: 160px;
          border-radius: 15px;
          border-right: 7px solid $paragraph-bg-color;
        }

        .member_description {
          font-size: smaller;
          text-align: left;
          background-color: $paragraph-bg-color;
          padding: 0.5rem 1rem;
          border-radius: 0 7px 7px 0;
        }
      }
    }
  }
</style>