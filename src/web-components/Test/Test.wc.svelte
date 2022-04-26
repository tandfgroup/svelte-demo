<svelte:options tag="test-element" />
<script>
	import Child from "./Child.svelte";
</script>
<div>
	<slot></slot>
	Hello from Test
	<Child/>

</div>