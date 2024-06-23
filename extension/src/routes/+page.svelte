<svelte:head>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@picocss/pico@1/css/pico.min.css">
    <link rel="stylesheet" href="popup.css" />
</svelte:head>

<script>
    let value = '';
    let result = '';

    // @ts-ignore type
    function select(event) { this.select() }
</script>

<div class="container">
    <h1>Calculator</h1>
    <form on:submit|preventDefault>
      <input type="text" placeholder="1 + 2" bind:value={value} on:click={select} />
    </form>

    <p>{result}</p>
</div>