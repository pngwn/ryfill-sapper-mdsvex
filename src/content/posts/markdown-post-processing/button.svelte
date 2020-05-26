<script>
  let count
  const handleClick = count => count = count + 1
</script>

<button on:click={handleClick}>
  Count {count}
</button>