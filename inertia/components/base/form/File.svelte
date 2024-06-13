<script lang="ts">
  import { createEventDispatcher } from 'svelte'

  export let label: string
  export let classes: string
  export let required: boolean
  export let forId: string
  export let acceptFormats: string
  export let multiple: boolean

  const dispatch = createEventDispatcher()

  const handleScreenshots = (event: Event): void => {
    let files

    if (multiple) {
      files = (event.target as HTMLInputElement)?.files
    } else {
      files = (event.target as HTMLInputElement)?.files?.[0]
    }

    dispatch('files', files)
  }
</script>

<div class={classes}>
  <label for={forId} class="font-bold">{label}:</label>
  <input
    accept={acceptFormats}
    {multiple}
    {required}
    class="file-input file-input-bordered file-input-primary w-full max-w-xs mt-2"
    {...$$restProps}
    on:input={handleScreenshots}
  />
</div>
