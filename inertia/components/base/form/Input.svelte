<script lang="ts">
  export let label: string
  export let value: string
  export let classes = ''
</script>

<div class={classes}>
  <label class="flex items-center gap-2 input input-bordered">
    <span class="font-bold">{label}</span>
    <input class="grow" {...$$restProps} bind:value />
  </label>
</div>
