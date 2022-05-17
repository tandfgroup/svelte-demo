<svelte:options tag="tnf-accordion" />

<script>
	const scriptLoaded = () => {
		console.log("script loaded")
	}
	const data = [
		{
			title: "Accordion Summary A",
			content: "Accordion Details A",
			isOpen: true
		},
		{
			title: "Accordion Summary B",
			content: "Accordion Details B",
			isOpen: false
		},
		{
			title: "Accordion Summary C",
			content: "Accordion Details C",
			isOpen: false
		}
	]
	let selectedIndex = 0
	const onItemClick = (index) => {
		if(index !== selectedIndex){
			data[selectedIndex].isOpen = false
			data[index].isOpen = true
			selectedIndex = index
		}
	}
</script>

<ul class="slds-accordion">
	{ #each data as item, index }
	<li class="slds-accordion__list-item" on:click={e => onItemClick(index)}>
    <section class="slds-accordion__section {item.isOpen && 'slds-is-open'}">
      <div class="slds-accordion__summary">
        <h2 class="slds-accordion__summary-heading">
          <button
            class="slds-button slds-button_reset slds-accordion__summary-action"
            aria-controls="referenceId-42"
            aria-expanded="true"
            title={item.title}
          >
            <svg
              class="slds-accordion__summary-action-icon slds-button__icon slds-button__icon_left"
              aria-hidden="true"
            >
              <use
                xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#switch"
              />
            </svg>
            <span class="slds-accordion__summary-content"
              >{item.title}</span
            >
          </button>
        </h2>
      </div>
      <div class="slds-accordion__content" id="referenceId-42">
        {item.content}
      </div>
    </section>
  </li>
	{ /each }
</ul>

<style lang="scss" type="text/scss">
  @import "./assets/styles/salesforce-lightning-design-system.css";
  :host {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .heading {
    color: blueviolet;
  }
</style>
