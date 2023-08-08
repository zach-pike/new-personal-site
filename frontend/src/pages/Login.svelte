<!-- Show this page when user authenication is needed -->

<script lang="ts">
    import { API } from '../api';
    import SubmitBtn from '../lib/SubmitBtn.svelte';
    import TextInput from '../lib/TextInput.svelte';

    let username: string;
    let password: string;

    function tryLogin() {
        try {
            API.login(username, password);
        } catch(e) {
            alert(e.message);
        }
    }
</script>

<div class='m-2'>
    <p class='font-bold text-2xl'>Please login</p>
    <form on:submit|preventDefault={tryLogin}>
        <input type='text' placeholder='Username' bind:value={username}
               class='border-2 border-solid px-2 py-1 rounded outline-0 focus:border-blue-500 border-gray-400 m-1' />

        <br />

        <TextInput type="password" bind:value={password} placeholder="Password" />

        <SubmitBtn />
    </form>
</div>