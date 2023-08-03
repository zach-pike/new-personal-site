<script lang="ts">
    import { API, accessToken } from '../api';
    import Login from "./Login.svelte";
</script>

{#if $accessToken == null}
<Login />
{:else}
<!-- Admin page here -->
<p>logged in</p>
{/if}
