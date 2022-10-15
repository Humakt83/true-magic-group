<script>
  export let buttonFn = () => {
    alert("Not defined")
  }
  
  export let buttonName = "Not defined"
</script>

<button on:click={buttonFn}>
  {buttonName}
</button>

<style>
  button {
    font-family: inherit;
    font-size: inherit;
    padding: 1em 2em;
    color: #ff3e00;
    background-color: rgba(255, 62, 0, 0.1);
    border-radius: 2em;
    border: 2px solid rgba(255, 62, 0, 0);
    outline: none;
    max-width: 220px;
    font-variant-numeric: tabular-nums;
    cursor: pointer;
  }

  button:hover,
  button:focus {
    border: 2px solid #ff3e00;
  }

  button:hover,
  button:active {
    background-color: rgba(255, 62, 0, 0.2);
  }
</style>
