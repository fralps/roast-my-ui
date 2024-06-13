<script lang="ts">
  import { useForm, Link } from '@inertiajs/svelte'
  import { Input, Textarea, Button, File } from '@components'

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
    avatar: null,
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

  const handleAvatar = (event: CustomEvent<{ detail: File[] }>): void => {
    $form.avatar = event.detail
  }
</script>

<svelte:head>
  <title>RoastMyUI - {title}</title>
  <meta name="description" content="Register to get roasted or roast someone UI." />
</svelte:head>

<section class="flex flex-col items-center justify-center h-full mx-4 py-10">
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

    <File
      label="Upload avatar"
      classes="mb-6"
      required={true}
      forId="avatar"
      acceptFormats="image/png, image/jpeg, image/jpg"
      multiple={false}
      type="file"
      on:files={handleAvatar}
    />

    {#if Object.keys($form.errors).length}
      <div role="alert" class="alert alert-warning mb-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="stroke-current shrink-0 h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          ><path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
          /></svg
        >
        <span>{$form.errors.avatar}</span>
      </div>
    {/if}

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
