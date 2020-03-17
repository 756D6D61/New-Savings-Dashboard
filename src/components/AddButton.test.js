import React from 'react'
import { mount } from 'enzyme'
import AddButton from './AddButton'

describe("Add button", () => {
	it('renders without crashing', () => {
		mount(<AddButton />)
	})
})
