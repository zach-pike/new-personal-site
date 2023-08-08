<script lang="ts">
    export let btn: HTMLInputElement = null;
    export let extclass: string = "";
    export let value: string = "Sub";
</script>

<input type='submit' value={value} class="border-2 border-blue-500 outline-0 px-2 py-1 rounded bg-white {extclass}" bind:this={btn} />