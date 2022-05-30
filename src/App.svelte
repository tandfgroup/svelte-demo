<script>
  import { Col, Container, Row } from 'sveltestrap';
	
</script>
<Container lg>
	<tnf-crud-element>
		Basic Crud Element
	</tnf-crud-element>
	<tnf-accordion>
		<strong>Accordion</strong> based on  <strong>Lighting Design System</strong>
	</tnf-accordion>
</Container>

<style>
	crud-app {
	 --buttons-clr: yellow;
	 --vertical-gap: 1em;
	 --horizontal-gap: 1em;
	}
	tnf-accordion{
		--slds-c-accordion-color-border:blue
	}
</style>