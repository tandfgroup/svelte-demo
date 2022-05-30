<svelte:options tag="tnf-crud-element" />
<script>
import CrudButtons from "./CrudButtons.svelte";
import { Input, FormGroup, Label, Container, Row, Col } from "sveltestrap"
	let radioGroup = 0;
	let people = [
		{ first: 'Hans', last: 'Emil' },
		{ first: 'Max', last: 'Mustermann' },
		{ first: 'Roman', last: 'Tisch' }
	];

	let prefix = '';
	let first = '';
	let last = '';
	let i = 0;

	$: {
		console.log(radioGroup)
	}
	$: filteredPeople = prefix
		? people.filter(person => {
			const name = `${person.last}, ${person.first}`;
			return name.toLowerCase().indexOf(prefix.toLowerCase()) > -1;
		})
		: people;

	$: selected = filteredPeople[radioGroup];

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
<Container>
	<Row>
		<Col>
			<h3 class="heading text-center">
				<slot></slot>
			</h3>
		</Col>
	</Row>
	<Row>
		<Col>
			<FormGroup>
				<Label for="filterprefix">
					Filter Prefix
				</Label>
				<Input id="filterprefix" placeholder="filter prefix" bind:value={prefix}/>
			</FormGroup>
		</Col>
		<Col>
			<FormGroup>
				<Label for="first">
					First Name
				</Label>
				<Input id="first" bind:value={first}/>
			</FormGroup>
		</Col>
		<Col>
			<FormGroup>
				<Label for="Last Name">
					Last Name
				</Label>
				<Input id="Last Name" bind:value={last}/>
			</FormGroup>	
		</Col>
	</Row>
	<Row>
		<Col>
			<FormGroup>
				{#each filteredPeople as person, i}
					<Input
						id={i}
						type="radio"
						bind:group={radioGroup}
						value={i}
						label={`${person.last}, ${person.first}`}
					/>
				{/each}
			</FormGroup>
		</Col>
	</Row>
	<Row>
		<Col>
			<CrudButtons on:buttonClicked={e => buttonClicked(e.detail)} first={first}  last={last} selected={selected}>
				<style>
					button {
						/* font-size: xx-small; */
					}
				</style>
			</CrudButtons>
		</Col>
	</Row>
</Container>



<style lang="scss" type="text/scss">
	@import "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css";
	:host{
		display: flex;
		flex-direction: column;		
		align-items: center;
	}
		.heading{
			color: blueviolet;
		}

</style>