<script lang="ts">
    import { navigate } from "svelte-routing";

    export let name: string;
    export let path: string;
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div class="text-white mx-2 px-1 h-full hover:bg-gray-700 flex items-center cursor-pointer duration-200 ease-out"
     on:click={() => navigate(path) }>
    <p>{name}</p>
</div>