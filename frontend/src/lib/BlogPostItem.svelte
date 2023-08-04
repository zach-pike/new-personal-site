<script lang="ts">
    export let title: string;
    export let poster: string;
    export let post_content: string;
    export let date_of_creation: number;
    export let uuid: string;

    let date = new Date(date_of_creation).toLocaleString();
</script>


<div class="w-3/4">
    <div class="p-1">
        <p class="text-2xl font-bold">{title}</p>
        <p class="text-sm italic">By: {uuid} at {date}</p>
    </div>

    <div class="w-full h-[2px] bg-gray-400"></div>

</div>