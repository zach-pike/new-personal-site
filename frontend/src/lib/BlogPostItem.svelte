<script lang="ts">
    import { marked } from "marked";

    export let title: string;
    export let poster: string;
    export let post_content: string;
    export let date_of_creation: number;
    export let uuid: string; uuid;

    let date = new Date(date_of_creation).toLocaleString();
</script>


<div>
    <div class="p-1">
        <p class="text-2xl font-bold">{title}</p>
        <p class="text-sm italic">By: {poster} at {date}</p>
    </div>

    <div class="w-full h-[2px] bg-gray-400"></div>

    <div class="prose m-2 w-full">
        {@html marked.parse(post_content)}
    </div>
</div>

<style>
</style>