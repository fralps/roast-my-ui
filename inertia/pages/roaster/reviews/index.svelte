<script lang="ts">
  import { onMount } from 'svelte'
  import { Navbar, ReviewCard } from '@components'
  import { useForm, page } from '@inertiajs/svelte'

  export let reviews: {
    data: {
      id: number
      title: string
      description: string
      proposalId: number
      roasterId: number
      createdAt: string
    }[]
    meta: { currentPage: number; total: number; lastPage: number }
  }
  export let user

  const meta = reviews?.meta
  const title = 'Reviews'

  let form = useForm({
    page: 1,
    lastPage: null,
  })

  onMount(() => {
    $form.lastPage = meta.lastPage
  })

  const nextPage = () => {
    if ($form.page >= $form.lastPage) return

    $form.page++
    $form.get(`/reviews?page=${$form.page}`, {
      preserveScroll: false,
      onSuccess: () => {
        const response = $page.props.reviews.meta

        $form.page = response.currentPage
        $form.lastPage = response.lastPage

        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth',
        })
      },
    })
  }

  const prevPage = () => {
    if ($form.page <= 1) return

    $form.page--
    $form.get(`/reviews?page=${$form.page}`)
  }
</script>

<svelte:head>
  <title>RoastMyUI - {title}</title>
</svelte:head>

<Navbar />
<section class="pb-10 mt-10">
  <h1 class="text-3xl text-center nabla">
    {#each title as letter, index}
      <span style="animation-delay: {0.0 + index * 0.1}s">{letter}</span>
    {/each}
  </h1>

  <div class="w-4/5 mx-auto mt-10 md:w-1/2">
    {#if reviews?.data?.length}
      {#each reviews.data as review}
        <ReviewCard
          title={review.title}
          description={review.description}
          createdAt={review.createdAt}
          roasterId={review.roasterId}
          proposalId={review.proposalId}
          reviewId={review.id}
          {user}
        />
      {/each}
      <div class="justify-center w-full join">
        <button class="join-item btn" disabled={$form.page <= 1} on:click={prevPage}>Prev</button>
        <button class="join-item btn">Page {$form.page}/{$form.lastPage}</button>
        <button class="join-item btn" disabled={$form.page >= $form.lastPage} on:click={nextPage}
          >Next</button
        >
      </div>
    {:else}
      <p class="text-center">No reviews found</p>
    {/if}
  </div>
</section>

<style lang="css">
  span {
    font-palette: --Default;
  }
</style>
