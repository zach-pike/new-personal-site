<script lang="ts">
    import { accessToken, jwtData } from '../api';
    import Login from "./Login.svelte";
    import CreateBlogPost from './admin_modules/CreateBlogPost.svelte';

    let modules = [CreateBlogPost];
</script>

<!-- svelte-ignore missing-declaration -->
{#if $accessToken != null && $jwtData != null && $jwtData.admin}

<div class="m-2">
    <!-- Admin page here -->
    <p class="text-4xl">Welcome <span class="font-bold">{$jwtData.username}</span>!</p>

    <div class="h-[2px] w-full bg-black my-1"></div>

    <div class="flex">
        {#each modules as mod}
        <svelte:component this={mod} />
        {/each}
    </div>
</div>

{:else}
<Login />
{/if}
