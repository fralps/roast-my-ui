<script lang="ts">
  import { Link } from '@inertiajs/svelte'
  import { Navbar } from '@components'

  export let proposal: {
    title: string
    description: string
    websiteUrl: string
    roastLimit: number
    createdAt: string
  }

  const title = proposal.title
</script>

<svelte:head>
  <title>RoastMyUI - {title}</title>
</svelte:head>

<Navbar />
<section class="pb-10 mt-10">
  <div class="text-center mb-10">
    <Link href="/roastee/proposals" class="link link-accent text-sm">Go back to my Proposals</Link>
  </div>

  {#if proposal}
    <h1 class="text-xl text-center nabla mb-6">
      {#each title as letter, index}
        <span style="animation-delay: {0.0 + index * 0.1}s">{letter}</span>
      {/each}
    </h1>

    <div class="w-full mx-auto mt-10 md:w-1/2">
      <p class="mb-6">{proposal.description}</p>
      <p>
        <span class="font-bold">Website:</span>
        <a href={proposal.websiteUrl} target="_blank" class="link link-accent"
          >{proposal.websiteUrl}</a
        >
      </p>
      <p><span class="font-bold">Roast limit:</span> {proposal.roastLimit}</p>
      <p>
        <span class="font-bold">Published at: </span>{new Date(
          proposal.createdAt
        ).toLocaleDateString()}
      </p>
    </div>
  {:else}
    <p>No proposal found</p>
  {/if}
</section>
