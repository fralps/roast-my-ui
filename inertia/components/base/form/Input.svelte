<script lang="ts">
  export let label: string
  export let value: string
  export let classes = ''
</script>

<div class={classes}>
  {#if label}
    <span class="block text-sm font-medium text-gray-700">{label}</span>
  {/if}

  <input
    class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
    {...$$restProps}
    bind:value
  />
</div>
