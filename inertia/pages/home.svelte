<script lang="ts">
  import { Link } from '@inertiajs/svelte'

  const title = 'RoastMyUI'
</script>

<svelte:head>
  <title>{title} - Homepage</title>
</svelte:head>

<div>
  <h1 class="text-6xl text-center nabla">
    {#each title as letter, index}
      <span class="animated-title" style="animation-delay: {0.0 + index * 0.1}s">{letter}</span>
    {/each}
  </h1>
  <div class="mt-10 text-center"><Link href="/login">Login</Link></div>
</div>

<style lang="css">
  span {
    font-palette: --Default;
  }
</style>
