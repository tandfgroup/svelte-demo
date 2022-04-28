<script>
	import { createEventDispatcher, onMount } from "svelte";
	import { Button, Styles } from "sveltestrap"

	export let first;
	export let last;
	export let selected;

	const dispatch = createEventDispatcher()
	let el;
	function buttonClicked(type) {
		dispatch("buttonClicked", type)
	}

	onMount(() => {
		fetch("https://reqres.in/api/products/3").then(async data => {
			console.log(await data.json())
		}).catch(error => {
			console.log(error)
		})
	})
</script>
<div class='text-center' bind:this={el}>
	<Button color="primary" on:click={e => buttonClicked("create")} disabled="{!first || !last}">create</Button>
	<Button color="primary" on:click={e => buttonClicked("update")} disabled="{!first || !last || !selected}">update</Button>
	<Button color="primary" on:click={e => buttonClicked("delete")} disabled="{!selected}">delete</Button>
</div>

<slot></slot>