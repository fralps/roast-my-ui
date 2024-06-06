<script lang="ts">
  import { Link } from '@inertiajs/svelte'

  const title = 'Proposals'
</script>

<svelte:head>
  <title>RoastMyUI - {title}</title>
</svelte:head>

<div>
  <h1 class="text-6xl text-center nabla">
    {#each title as letter, index}
      <span style="animation-delay: {0.0 + index * 0.1}s">{letter}</span>
    {/each}
  </h1>
  <div class="mt-10 text-center"><Link href="/">Home</Link></div>
</div>

<style lang="css">
  span {
    font-palette: --Gray;
  }
</style>
