<script lang="ts">
  import { inertia } from '@inertiajs/svelte'

  export let title: string
  export let description: string
  export let createdAt: string
  export let roasterId: number
  export let proposalId: number
  export let reviewId: number
  export let user
</script>

<details class="collapse bg-base-200 collapse-arrow mb-6">
  <summary class="collapse-title text-xl font-medium text-primary">{title}</summary>
  <div class="collapse-content">
    <p>{description}</p>
    <p class="text-xs italic mt-4">
      on {new Date(createdAt).toLocaleDateString()}
    </p>
    {#if user.id === roasterId && user.type === 'roaster'}
      <button
        class="btn btn-xs btn-error mt-6"
        use:inertia={{
          href: `/proposals/${proposalId}/reviews/${reviewId}`,
          method: 'delete',
        }}>Delete</button
      >
    {/if}
  </div>
</details>
