<script>
  let count = 0;
  const handleClick = (count) => count++;
</script>

<button on:click={handleClick}>Count {count}</button>
