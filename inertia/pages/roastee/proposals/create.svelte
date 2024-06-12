<script lang="ts">
  import { Link, useForm } from '@inertiajs/svelte'
  import { Navbar, Input, Textarea, Range } from '@components'

  const title = 'New proposal'

  let form = useForm({
    title: null,
    description: null,
    websiteUrl: null,
    roastLimit: 2,
  })

  const create = (): void => {
    console.log('Creating proposal', $form)

    $form.post('/roastee/proposals', {
      preserveScroll: true,
      onSuccess: () => {
        $form.reset('title')
        $form.reset('description')
        $form.reset('websiteUrl')
        $form.reset('roastLimit')
      },
    })
  }
</script>

<svelte:head>
  <title>RoastMyUI - {title}</title>
</svelte:head>

<Navbar />
<section class="pb-10 mt-10">
  <h1 class="text-3xl text-center nabla mb-6">
    {#each title as letter, index}
      <span style="animation-delay: {0.0 + index * 0.1}s">{letter}</span>
    {/each}
  </h1>

  <div class="text-center">
    <Link href="/roastee/proposals" class="link link-accent text-sm">Go back to my Proposals</Link>
  </div>

  <form on:submit|preventDefault={create} class="w-full mx-auto mt-10 md:w-1/2">
    <Input
      type="text"
      placeholder="SaaS platform for engineers"
      classes="mb-6"
      required
      label="Title"
      bind:value={$form.title}
    />

    <Textarea
      label="Description"
      required
      placeholder="This Saas is used for engineers to collaborate on projects. Please roast it."
      classes="mb-6"
      bind:value={$form.description}
    />

    <Input
      type="text"
      placeholder="https://saas.com"
      classes="mb-6"
      required
      label="Website URL"
      bind:value={$form.websiteUrl}
    />

    <Range min="1" max="5" classes="mb-6" label="Roast limit" bind:value={$form.roastLimit} />

    <div class="flex flex-col justify-end w-full">
      <button type="submit" class="btn btn-primary">Create</button>
    </div>
  </form>
</section>
