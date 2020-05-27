<script>
  const routes = __ROUTES__;
</script>

<ul>
  {#each routes as route}
    <li>
      <a href="blog/{route}">{route}</a>
    </li>
  {/each}
</ul>
