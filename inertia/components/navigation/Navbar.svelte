<script lang="ts">
  import { Link, page } from '@inertiajs/svelte'

  const title = 'RoastMyUI'
</script>

<div class="shadow-md navbar bg-base-100">
  <div class="navbar-start">
    <div class="dropdown">
      <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-5 h-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          ><path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h8m-8 6h16"
          /></svg
        >
      </div>
      <ul class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/proposals">All proposals</Link></li>
        <li><Link href="/roastee/proposals">My proposals</Link></li>
      </ul>
    </div>
    <div class="text-xl md:text-3xl btn btn-ghost nabla">
      <Link href="/">
        {#each title as letter, index}
          <span style="animation-delay: {0.0 + index * 0.1}s">{letter}</span>
        {/each}
      </Link>
    </div>
  </div>
  <div class="hidden navbar-center lg:flex">
    <ul class="px-1 menu menu-horizontal">
      <li><Link href="/">Home</Link></li>
      <li><Link href="/proposals">All proposals</Link></li>
      <li><Link href="/roastee/proposals">My proposals</Link></li>
    </ul>
  </div>
  {#if $page.props.user}
    <div class="navbar-end">
      <div class="avatar">
        <div class="w-8 rounded-full">
          <img src={$page.props.user.avatar} alt="User avatar" />
        </div>
      </div>
    </div>
  {/if}
</div>

<style lang="css">
  span {
    font-palette: --Default;
  }
</style>
