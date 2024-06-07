<script lang="ts">
  export let title: string
  export let description: string
</script>

<div class="mb-6 text-white collapse collapse-arrow bg-primary">
  <input type="checkbox" />
  <div class="text-xl font-medium collapse-title">
    {title}
  </div>
  <div class="collapse-content">
    <p>{description}</p>
  </div>
</div>
