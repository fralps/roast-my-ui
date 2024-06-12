<script lang="ts">
  export let label: string
  export let theme: string = 'primary'
  export let size: string
  export let classes: string
</script>

<button class="btn btn-{size} btn-{theme} {classes}" {...$$restProps}>{label}</button>
