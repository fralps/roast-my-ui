<script lang="ts">
  export let error: { message: string }
</script>

<div>
  <div class="container">
    <div class="title">Server Error</div>

    <span>{error.message}</span>
  </div>
</div>
