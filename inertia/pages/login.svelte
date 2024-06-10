<script lang="ts">
  import { useForm, Link } from '@inertiajs/svelte'

  import { Input, Checkbox } from '@components'

  export let message: string

  let form = useForm({
    email: null,
    password: null,
    remember: false,
  })
  const title = 'Login'

  const login = (): void => {
    $form.post('/auth/sessions', {
      preserveScroll: true,
      onSuccess: () => $form.reset('password'),
    })
  }
</script>

<svelte:head>
  <title>RoastMyUI - {title}</title>
</svelte:head>

<section class="flex flex-col items-center justify-center h-screen mx-4">
  <h1 class="text-xl text-center md:text-6xl nabla mb-6">
    {#each title as letter, index}
      <span style="animation-delay: {0.0 + index * 0.1}s">{letter}</span>
    {/each}
  </h1>

  <Link href="/" class="link link-accent">Home</Link>

  <form on:submit|preventDefault={login} class="w-full mx-auto mt-10 md:w-1/2">
    {#if message}
      <div role="alert" class="mb-10 alert alert-warning">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-6 h-6 stroke-current shrink-0"
          fill="none"
          viewBox="0 0 24 24"
          ><path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
          /></svg
        >
        <span>{message}</span>
      </div>
    {/if}

    <Input
      type="email"
      placeholder="john@doe.com"
      classes="mb-6"
      required
      label="Email"
      bind:value={$form.email}
    />

    <Input
      type="password"
      placeholder="******"
      classes="mb-6"
      required
      label="Password"
      bind:value={$form.password}
    />

    <div class="flex flex-col justify-end w-full">
      <Checkbox label="Remember me" classes="mb-6" bind:checked={$form.remember} />
      <button type="submit" class="btn btn-primary">Login</button>
    </div>
  </form>
</section>

<style lang="css" scoped>
  span {
    font-palette: --Default;
  }
</style>
