<script lang="ts">
  import { Link, useForm } from '@inertiajs/svelte'
  import { Navbar, Input, Textarea, Button, File } from '@components'

  export let proposalId: number

  const title = 'New review'

  let form = useForm({
    title: null,
    description: null,
    screenshots: null,
  })

  const create = (): void => {
    $form.post(`/proposals/${proposalId}/reviews`, {
      preserveScroll: true,
      onSuccess: () => {
        $form.reset('title')
        $form.reset('description')
      },
    })
  }

  const handleScreenshots = (event: CustomEvent<{ detail: File[] }>): void => {
    $form.screenshots = event.detail
  }
</script>

<svelte:head>
  <title>RoastMyUI - {title}</title>
</svelte:head>

<Navbar />
<section class="pb-10 mt-10">
  <div class="text-center mb-10">
    <Link href={`/proposals/${proposalId}`} class="link link-accent text-sm"
      >Go back to proposal</Link
    >
  </div>

  <div class="w-4/5 mx-auto mt-10 md:w-full">
    <form on:submit|preventDefault={create} class="w-full mx-auto mt-10 md:w-1/2">
      <Input
        type="text"
        placeholder="Nice work!"
        classes="mb-6"
        required
        label="Title"
        bind:value={$form.title}
      />

      <Textarea
        label="Description"
        required
        placeholder="First, you buttons are a little too small. Second, the color scheme is a bit off..."
        classes="mb-6"
        bind:value={$form.description}
      />

      <File
        label="Upload screenshots"
        classes="mb-6"
        required={true}
        forId="screenshots"
        acceptFormats="image/png, image/jpeg, image/jpg"
        multiple={true}
        type="file"
        on:files={handleScreenshots}
      />

      <div class="flex flex-col justify-end w-full">
        <Button label="Create" type="submit" theme="primary" />
      </div>
    </form>
  </div>
</section>
