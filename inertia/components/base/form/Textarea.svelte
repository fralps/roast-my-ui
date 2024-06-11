<script lang="ts">
  export let label: string
  export let value: string
  export let classes: string
</script>

<label class="form-control {classes}">
  <div class="label">
    <span class="label-text font-bold">{label}</span>
  </div>
  <textarea class="textarea textarea-bordered h-24" {...$$restProps} bind:value></textarea>
</label>
