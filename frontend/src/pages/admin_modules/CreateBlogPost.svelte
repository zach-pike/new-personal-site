<script lang="ts">
    import TextInput from "../../lib/TextInput.svelte";
</script>
<div class="w-1/2 h-[35em]">
    <p class="text-xl">Create a new blog post</p>
    <form>
        <TextInput placeholder="Post title" />
        <textarea placeholder="Post content (supports MD)" class="outline-0 p-1 rounded border-2 border-gray-400 focus:border-blue-500 w-full max-h-full"></textarea>
    </form>
</div>