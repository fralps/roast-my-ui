<script lang="ts">
  import { Link, inertia } from '@inertiajs/svelte'
  import { Navbar, ReviewCard } from '@components'

  export let proposal: {
    id: number
    roasteeId: number
    title: string
    description: string
    websiteUrl: string
    roastLimit: number
    createdAt: string
    reviews: {
      id: number
      title: string
      description: string
      createdAt: string
      roaster: { username: string }
      roasterId: number
    }[]
  }
  export let user: { id: number; type: string }
  const title = proposal.title
</script>

<svelte:head>
  <title>RoastMyUI - {title}</title>
</svelte:head>

<Navbar />
<section class="pb-10 mt-10 mx-4">
  <div class="text-center mb-10">
    <Link href="/proposals" class="link link-accent text-sm">Go back to all Proposals</Link>
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

    {#if user.id === proposal.roasteeId && user.type === 'roastee'}
      <div class="w-full text-center mt-10">
        <button
          class="btn btn-outline btn-error btn-sm"
          use:inertia={{ href: `/roastee/proposals/${proposal.id}`, method: 'delete' }}
          >Delete proposal</button
        >
      </div>
    {:else}
      <div class="w-full text-center mt-10">
        <button
          class="btn btn-outline btn-primary btn-sm"
          use:inertia={{ href: `/proposals/${proposal.id}/reviews/create`, method: 'get' }}
          >Add my review</button
        >
      </div>
    {/if}

    <hr class="my-10 w-1/2 mx-auto" />

    <h1 class="text-2xl text-center nabla mb-6 reviews-title">
      {#each 'Reviews' as letter, index}
        <span style="animation-delay: {0.0 + index * 0.1}s">{letter}</span>
      {/each}
    </h1>

    {#if proposal.reviews.length}
      {#each proposal.reviews as review}
        <ReviewCard
          title={review.title}
          description={review.description}
          createdAt={review.createdAt}
          roasterId={review.roasterId}
          proposalId={proposal.id}
          reviewId={review.id}
          {user}
        />
      {/each}
    {:else}
      <p class="text-center">No reviews found</p>
    {/if}
  {:else}
    <p>No proposal found</p>
  {/if}
</section>

<style lang="css" scoped>
  .reviews-title {
    font-palette: --Pink;
  }
</style>
