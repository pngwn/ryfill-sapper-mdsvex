<script>
  import Nav from "../components/Nav.svelte";

  export let title;
  export let thingy;
  export let otherthingy;
</script>

<style>
  main {
    position: relative;
    max-width: 56em;
    background-color: white;
    padding: 2em;
    margin: 0 auto;
    box-sizing: border-box;
  }
</style>

<Nav />
<p>
  <em>this is a layout</em>
</p>
<h1>{title}</h1>
<h2>{thingy}</h2>
<h3>{otherthingy}</h3>
<main>
  <slot />
</main>
