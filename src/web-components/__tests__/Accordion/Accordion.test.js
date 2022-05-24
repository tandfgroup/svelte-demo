import '@testing-library/jest-dom'

import {render} from '@testing-library/svelte'
import svelte from "svelte-inline-compile"
import { Accordion } from '../../Accordion'

test('should have the passed children correctly', async() => {
  const result = render(svelte`<Accordion><span>Slot Content</span></Accordion>`)
	await new Promise((resolve) => {setTimeout(()=>resolve(), 100)})
	expect(result.getByTestId("heading")).toHaveTextContent("Slot Content")
})

test('should show correct items', async() => {
  const result = render(Accordion)
	await new Promise((resolve) => {setTimeout(()=>resolve(), 100)})
	expect(result.getAllByTestId("accordion-item")).toHaveLength(3)
})