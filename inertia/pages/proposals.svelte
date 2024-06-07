<script lang="ts">
  import { Link } from '@inertiajs/svelte'

  export let proposals: {
    data: { title: string; description: string; screenshots: string }[]
    meta: {}
  }

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

  <div class="grid">
    {#if proposals.data}
      {#each proposals.data as proposal}
        <div class="max-w-sm mb-10 bg-white border border-gray-200 rounded-lg shadow-lg">
          <a href="#">
            <img class="w-full rounded-t-lg" src={proposal.screenshots} alt="" />
          </a>
          <div class="p-5">
            <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                {proposal.title}
              </h5>
            </a>
            <p class="mb-3 font-normal text-gray-700">
              {proposal.description}
            </p>
            <a
              href="#"
              class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-indigo-700 rounded-lg hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800"
            >
              Roast me
              <svg
                class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div>
        </div>
      {/each}
    {/if}
  </div>
</div>

<style lang="css">
  span {
    font-palette: --Gray;
  }
</style>
