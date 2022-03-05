<svelte:options tag="crud-app"/>
<script>
	let people = [
		{ first: 'Hans', last: 'Emil' },
		{ first: 'Max', last: 'Mustermann' },
		{ first: 'Roman', last: 'Tisch' }
	];

	let prefix = '';
	let first = '';
	let last = '';
	let i = 0;

	$: filteredPeople = prefix
		? people.filter(person => {
			const name = `${person.last}, ${person.first}`;
			return name.toLowerCase().startsWith(prefix.toLowerCase());
		})
		: people;

	$: selected = filteredPeople[i];

	$: reset_inputs(selected);

	function create() {
		people = people.concat({ first, last });
		i = people.length - 1;
		first = last = '';
	}

	function update() {
		selected.first = first;
		selected.last = last;
		people = people;
	}

	const buttonClicked = (type) => {
		switch (type) {
			case "create":
				create()
				break;
			case "update":
				update()
				break;
			case "delete":
				remove()
				break;
			default:
				break;
		}
	}
	function remove() {
		// Remove selected person from the source array (people), not the filtered array
		const index = people.indexOf(selected);
		people = [...people.slice(0, index), ...people.slice(index + 1)];

		first = last = '';
		i = Math.min(i, filteredPeople.length - 2);
	}

	function reset_inputs(person) {
		first = person ? person.first : '';
		last = person ? person.last : '';
	}
</script>
<div>
	<div class="actions">
		<div class="select-items">
			<input placeholder="filter prefix" bind:value={prefix}>
		
			<select bind:value={i} size={5}>
				{#each filteredPeople as person, i}
					<option value={i}>{person.last}, {person.first}</option>
				{/each}
			</select>
		</div>
		<div>
			<label><input bind:value={first} placeholder="first"></label>
			<label><input bind:value={last} placeholder="last"></label>
		</div>		
	</div>

	<crud-app-buttons on:buttonClicked={e => buttonClicked(e.detail)} first={first}  last={last} selected={selected}/>
</div>


<style global>
	:host{
		display: flex;
		flex-direction: column;		
		align-items: center;
	}
	

	.actions{
		display: flex;
		flex-direction: row;
		justify-content: center;
		margin-bottom: var(--vertical-gap, 0.5em);
	}
	.select-items{
		display: flex;
		flex-direction: column;
		margin-right: var(--horizontal-gap, 0.5em);
	}
	
	* {
		font-family: inherit;
		font-size: inherit;
	}
</style>