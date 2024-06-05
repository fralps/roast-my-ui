<script lang="ts">
  import { useForm, Link } from '@inertiajs/svelte'
  import { Input } from '@components'

  let form = useForm({
    email: null,
    password: null,
    remember: false,
  })

  const login = (): void => {
    $form.post('/auth/users/login')
  }
</script>

<svelte:head>
  <title>Login</title>
</svelte:head>

<div class="py-12">
  <div class="text-center text-4xl">Login</div>
  <div class="text-center mt-10"><Link href="/">Home</Link></div>

  <form on:submit|preventDefault={login} class="mt-10 w-1/2 mx-auto">
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

    <div class="flex items-center mb-4">
      <input
        type="checkbox"
        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        bind:checked={$form.remember}
      />
      <label
        for="default-checkbox"
        class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label
      >
    </div>

    <button
      type="submit"
      class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
    >
      Login
    </button>
  </form>
</div>
