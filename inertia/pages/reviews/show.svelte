<script lang="ts">
  import { Link, inertia } from '@inertiajs/svelte'
  import { Navbar, Carousel } from '@components'

  export let review: {
    id: number
    title: string
    description: string
    createdAt: string
    roasterId: number
    screenshots: {
      filePath: string
      fileName: string
    }[]
  }
  export let user

  const title = review.title
</script>

<svelte:head>
  <title>RoastMyUI - {title}</title>
</svelte:head>

<Navbar />
<section class="pb-10 mt-10 mx-4">
  <div class="text-center mb-10">
    <Link
      href={user?.type === 'roastee' ? '/roastee/proposals' : '/reviews'}
      class="link link-accent text-sm"
      >Go back to my {user?.type === 'roastee' ? 'proposals' : 'reviews'}</Link
    >
  </div>

  {#if review}
    <h1 class="text-xl text-center nabla mb-6">
      {#each title as letter, index}
        <span style="animation-delay: {0.0 + index * 0.1}s">{letter}</span>
      {/each}
    </h1>

    <div class="w-full mx-auto mt-10 md:w-1/2">
      <p class="mb-6">{review.description}</p>

      <p>
        <span class="font-bold">Published at: </span>{new Date(
          review.createdAt
        ).toLocaleDateString()}
      </p>
    </div>

    <Carousel images={review?.screenshots} classes="h-64 mt-10 mx-0 sm:mx-16 md:mx-44" />

    {#if user.id === review.roasterId}
      <div class="w-full text-center mt-10">
        <button
          class="btn btn-outline btn-error btn-sm"
          use:inertia={{ href: `/roastee/proposals/${review.id}`, method: 'delete' }}
          >Delete proposal</button
        >
      </div>
    {/if}
  {/if}
</section>
