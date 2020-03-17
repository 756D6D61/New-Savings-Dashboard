import React from 'react'
import { mount } from 'enzyme'
import BudgetIcons, { budgets } from './BudgetIcons'

describe('Budget Icons', () => {
	it('renders without crashing', () => {
		mount(<BudgetIcons />)
	})

	it('failing test', () => {
		expect(budgets).not.toEqual(undefined);
	})
})


