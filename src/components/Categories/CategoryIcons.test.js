import React from 'react'
import { mount } from 'enzyme'
import CategoryIcons, { categories } from './CategoryIcons'

describe('Category Icons', () => {
	it('renders without crashing', () => {
		mount(<CategoryIcons />)
	})

	it('failing test', () => {
		expect(categories).not.toEqual(undefined);
	})
})


