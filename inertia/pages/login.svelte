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
    $form.post('/auth/users/login')
  }
</script>

<svelte:head>
  <title>RoastMyUI - {title}</title>
</svelte:head>

<div class="py-12">
  <h1 class="text-6xl text-center nabla">
    {#each title as letter, index}
      <span style="animation-delay: {0.0 + index * 0.1}s">{letter}</span>
    {/each}
  </h1>
  <div class="mt-10 text-center"><Link href="/">Home</Link></div>

  <form on:submit|preventDefault={login} class="w-1/2 mx-auto mt-10">
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

    <Checkbox label="Remember me" classes="mb-6" bind:checked={$form.remember} />

    <button
      type="submit"
      class="flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
    >
      Login
    </button>
  </form>
</div>

<style lang="css">
  span {
    font-palette: --Blue;
  }
</style>
