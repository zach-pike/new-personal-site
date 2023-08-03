<!-- Show this page when user authenication is needed -->

<script lang="ts">
    import { API } from '../api';

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
               class='border-2 border-solid px-2 py-1 rounded outline-0 focus:border-blue-500 m-1' />
        <br />
        <input type='password' placeholder='Password' bind:value={password} class='border-2 border-solid px-2 py-1 rounded outline-0 focus:border-blue-500 m-1' />
        <input type='submit' class='border-2 border-blue-500 outline-0 px-2 py-1 rounded' />
    </form>
</div>