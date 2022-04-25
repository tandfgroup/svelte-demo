<script>
	import { createEventDispatcher, onMount } from "svelte";
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

	onMount(() => {
		fetch("https://reqres.in/api/products/3").then(async data => {
			console.log(await data.json())
		}).catch(error => {
			console.log(error)
		})
	})
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
	color: red;
}

.buttons > button{
	color: red;
	margin-right: var(--horizontal-gap, 0em);
}

.buttons > button:last-child{
	color: var(--buttons-clr, none);
	margin-right: 0em;
}
</style>

<slot></slot>