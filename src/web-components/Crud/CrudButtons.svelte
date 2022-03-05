<svelte:options tag="crud-app-buttons"/>
<script>
	import { createEventDispatcher } from "svelte";
	export let first;
	export let last;
	export let selected;
	let el;
	function buttonClicked(type) {
		const customEvent = new CustomEvent("buttonClicked", {
				detail: type,
				composed: true,
				bubbles: true
		})
		el.dispatchEvent(customEvent)
	}
</script>
<div class='buttons' bind:this={el}>
	<button on:click={e => buttonClicked("create")} disabled="{!first || !last}">create</button>
	<button on:click={e => buttonClicked("update")} disabled="{!first || !last || !selected}">update</button>
	<button on:click={e => buttonClicked("delete")} disabled="{!selected}">delete</button>
</div>

<style>
.buttons {
	display: flex;
	justify-content: center;
}

.buttons > button{
	color: var(--buttons-clr, none);
	margin-right: var(--horizontal-gap, 0em);
}

.buttons > button:last-child{
	color: var(--buttons-clr, none);
	margin-right: 0em;
}
</style>