<script lang="ts">
  import { useForm, Link } from '@inertiajs/svelte'
  import { Input, Textarea, Button } from '@components'

  export let type: { type: string }

  let form = useForm({
    email: null,
    username: null,
    firstName: null,
    lastName: null,
    description: null,
    password: null,
    passwordConfirmation: null,
    type: type,
  })
  const title = 'Registration'

  const register = (): void => {
    $form.post('/auth/registrations', {
      preserveScroll: true,
      onSuccess: () => {
        $form.reset('password')
        $form.reset('passwordConfirmation')
      },
    })
  }
</script>

<svelte:head>
  <title>RoastMyUI - {title}</title>
  <meta name="description" content="Register to get roasted or roast someone UI." />
</svelte:head>

<section class="flex flex-col items-center justify-center h-screen mx-4">
  <h1 class="text-xl text-center md:text-6xl nabla mb-6">
    {#each title as letter, index}
      <span style="animation-delay: {0.0 + index * 0.1}s">{letter}</span>
    {/each}
  </h1>

  <Link href="/" class="link link-accent">Home</Link>

  <form on:submit|preventDefault={register} class="w-full mx-auto mt-10 md:w-1/2">
    <Input
      type="email"
      placeholder="john@doe.com"
      classes="mb-6"
      required
      label="Email"
      bind:value={$form.email}
    />

    <Input
      type="text"
      placeholder="johndoe"
      classes="mb-6"
      required
      label="Username"
      bind:value={$form.username}
    />

    <Input
      type="text"
      placeholder="John"
      classes="mb-6"
      required
      label="First name"
      bind:value={$form.firstName}
    />

    <Input
      type="text"
      placeholder="Doe"
      classes="mb-6"
      required
      label="Last name"
      bind:value={$form.lastName}
    />

    <Textarea
      label="Description"
      required
      placeholder="I'm a frontend developer and I want to get roasted."
      classes="mb-6"
      bind:value={$form.description}
    />

    <Input
      type="password"
      placeholder="******"
      classes="mb-6"
      required
      label="Password"
      bind:value={$form.password}
    />

    <Input
      type="password"
      placeholder="******"
      classes="mb-6"
      required
      label="Password confirmation"
      bind:value={$form.passwordConfirmation}
    />

    <div class="flex flex-col justify-end w-full">
      <Button label="Register" type="submit" theme="primary" />
    </div>
  </form>
</section>

<style lang="css" scoped>
  span {
    font-palette: --Default;
  }
</style>
