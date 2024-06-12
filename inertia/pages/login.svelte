<script lang="ts">
  import { useForm, Link } from '@inertiajs/svelte'

  import { Input, Checkbox } from '@components'

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
