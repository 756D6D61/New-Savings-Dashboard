import React from 'react'
import ReactDOM from 'react-dom'
import BudgetsOverview, { sum, change } from './BudgetsOverview'

test('total budgets calculation', () => {
	expect(BudgetsOverview(sum).toBe(sum));
})

test('budget change calculation', () => {
	expect(BudgetsOverview(change).toBe(change));
})
