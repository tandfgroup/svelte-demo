<script>
  import { Col, Container, Row } from 'sveltestrap';
</script>
<Container lg>
	<crud-element>
		Basic Crud Element
	</crud-element>
	<tnf-list-ce/>
	<tnf-button-ce/>
	<tnf-accordion/>
	<!-- <Button/> -->
</Container>

<style>
	crud-app {
	 --buttons-clr: yellow;
	 --vertical-gap: 1em;
	 --horizontal-gap: 1em;
	}
</style>