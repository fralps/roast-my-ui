<script lang="ts">
  export let title: string
  export let description: string
  export let screenshots: string
</script>

<div class="mb-10 card glass">
  <figure>
    <img src={screenshots} alt="Screenshot" />
  </figure>
  <div class="card-body">
    <h2 class="card-title">{title}</h2>
    <p>{description}</p>
    <div class="justify-end card-actions">
      <button class="btn btn-primary">Roast me!</button>
    </div>
  </div>
</div>
