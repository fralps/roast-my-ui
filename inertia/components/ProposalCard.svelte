<script lang="ts">
  export let title: string
  export let createdAt: string
</script>

<div
  class="w-full cursor-pointer hover:shadow-lg hover:shadow-primary mb-6 transition-shadow duration-300"
>
  <div class="space-y-4">
    <div class="p-5 bg-white rounded-lg flex items-center justify-between space-x-8">
      <div class="flex justify-between items-center w-full">
        <span class="">{title}</span>
        <div class="badge badge-primary text-white">{new Date(createdAt).toLocaleDateString()}</div>
      </div>
    </div>
  </div>
</div>
