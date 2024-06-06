<script lang="ts">
  export let label: string
  export let checked: boolean = false
  export let classes: string = ''
</script>

<label class="flex items-start gap-2 {classes}">
  <div class="relative text-white flex-center-center">
    <input type="checkbox" class="checkbox" {...$$restProps} bind:checked />
  </div>

  <div>
    <span class="label">{label}</span>
  </div>
</label>

<style lang="css" scoped>
  .checkbox {
    @apply appearance-none w-5 h-5 bg-white shadow-sm border border-gray-300 rounded focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-indigo-600 checked:bg-indigo-600 checked:border-indigo-600;
  }
</style>
