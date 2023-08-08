<script lang="ts">
    export let input: HTMLInputElement = null;
    export let value: string = "";
    export let placeholder: string = "Type Here...";
    export let extclass: string = "";
    export let type: "text" | "password" = "text";

    function typeAction(node) {
        node.type = type;
    }
</script>

<input use:typeAction {placeholder} class="border-2 border-solid px-2 py-1 rounded outline-0 focus:border-blue-500 border-gray-400 m-1 {extclass}" bind:this={input} bind:value={value} />