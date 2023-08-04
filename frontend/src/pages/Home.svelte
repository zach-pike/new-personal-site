<script lang="ts">
    import SvelteMarkdown from 'svelte-markdown';
    import { API } from '../api';
    import BlogContainer from '../lib/BlogContainer.svelte';
    import BlogPostItem from '../lib/BlogPostItem.svelte';

    let v = [];

    API.fetchBlog().then(a => v = a);
</script>

<!-- <div class="mx-1">
    
</div> -->

<BlogContainer>
    {#each v as post}
        <BlogPostItem {...post} />
    {/each}
</BlogContainer>