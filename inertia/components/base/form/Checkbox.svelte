<script lang="ts">
  export let label: string
  export let checked: boolean = false
  export let classes: string = ''
</script>

<div class="form-control w-fit {classes}">
  <label class="cursor-pointer label">
    <span class="mr-4 label-text">{label}</span>
    <input type="checkbox" class="checkbox checkbox-primary" bind:checked />
  </label>
</div>
