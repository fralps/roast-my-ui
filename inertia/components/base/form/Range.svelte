<script lang="ts">
  export let label: string
  export let value: number
  export let min: number
  export let max: number
  export let classes: string
</script>

<div class={classes}>
  <label for="roast-limit-range" class="font-bold">
    {label}
  </label>

  <input type="range" bind:value {min} {max} class="range range-primary mt-2" />

  <div class="w-full flex justify-between text-xs px-2">
    {#each Array.from({ length: max }, (_, i) => i + 1) as number}
      <span>{number}</span>
    {/each}
  </div>
</div>
