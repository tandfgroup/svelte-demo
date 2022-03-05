<main>
	<h1>Welcome to Svelte!</h1>
	<crud-app/>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}

	crud-app {
	 --buttons-clr: grey;
	 --vertical-gap: 1em;
	 --horizontal-gap: 1em;
	}
</style>