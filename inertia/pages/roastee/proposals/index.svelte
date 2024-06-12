<script lang="ts">
  import { onMount } from 'svelte'
  import { Navbar, ProposalCard } from '@components'
  import { useForm, page, inertia, Link } from '@inertiajs/svelte'

  export let proposals: {
    data: { id: number; title: string; createdAt: string }[]
    meta: { currentPage: number; total: number; lastPage: number }
  }

  const meta = proposals?.meta
  const title = 'My proposals'

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
    $form.get(`/roastee/proposals?page=${$form.page}`, {
      preserveScroll: false,
      onSuccess: () => {
        const response = $page.props.proposals.meta

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
    $form.get(`/roastee/proposals?page=${$form.page}`)
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

  <div class="text-center mt-10">
    <button
      class="btn btn-primary btn-sm"
      use:inertia={{ href: '/roastee/proposals/create', method: 'get' }}
    >
      <span class="rotate-45">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          ><path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          /></svg
        ></span
      >
      New proposal
    </button>
  </div>

  <div class="w-4/5 mx-auto mt-10 md:w-1/2">
    {#if proposals.data?.length}
      {#each proposals.data as proposal}
        <Link href={`/roastee/proposals/${proposal.id}`} class="link no-underline">
          <ProposalCard title={proposal.title} createdAt={proposal.createdAt} />
        </Link>
      {/each}
      <div class="justify-center w-full join">
        <button class="join-item btn" disabled={$form.page <= 1} on:click={prevPage}>Prev</button>
        <button class="join-item btn">Page {$form.page}/{$form.lastPage}</button>
        <button class="join-item btn" disabled={$form.page >= $form.lastPage} on:click={nextPage}
          >Next</button
        >
      </div>
    {:else}
      <p class="text-center">No proposals found</p>
    {/if}
  </div>
</section>
