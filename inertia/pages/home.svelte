<script lang="ts">
  import { Link, inertia } from '@inertiajs/svelte'

  const title = 'RoastMyUI'
</script>

<svelte:head>
  <title>{title} - Homepage</title>
</svelte:head>

<section class="flex flex-col items-center justify-center h-screen mx-4">
  <h1 class="text-4xl text-center sm:text-6xl md:text-8xl nabla">
    {#each title as letter, index}
      <span class="animated-title" style="animation-delay: {0.0 + index * 0.1}s">{letter}</span>
    {/each}
  </h1>

  <div class="flex flex-col gap-10 mt-20 text-center sm:flex-row">
    <button
      class="hover:text-primary btn glass"
      use:inertia={{ href: '/auth/registrations/create?type=roastee', method: 'get' }}
      >Getting roasted</button
    >
    <button
      class="btn hover:text-secondary glasss"
      use:inertia={{ href: '/auth/registrations/create?type=roaster', method: 'get' }}
      >Roast someone UI</button
    >
  </div>

  <div class="mt-10">
    or <Link href="/auth/sessions/create" class="link link-accent">Login</Link>
  </div>
</section>

<style lang="css" scoped>
  .animated-title {
    animation: depth 1s ease-in-out alternate infinite;
    position: relative;
    display: inline-block;
    font-variation-settings: 'EDPT' 30;
  }

  span {
    font-palette: --Default;
  }

  @keyframes depth {
    0% {
      transform: translatex(0) translatey(0);
    }

    100% {
      font-variation-settings: 'EDPT' 200;
      transform: translatex(0.15em) translatey(0.1em);
    }
  }
</style>
