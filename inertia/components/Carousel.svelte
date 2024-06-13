<script lang="ts">
  export let images: { filePath: string; fileName: string }[] = []
  export let classes: string
</script>

{#if images.length > 0}
  <div class="carousel carousel-center p-4 space-x-4 bg-neutral rounded-box {classes}">
    {#each images as image}
      <div class="carousel-item">
        <img src={`/uploads/${image.filePath}`} alt={image.fileName} class="rounded-box" />
      </div>
    {/each}
  </div>
{/if}
