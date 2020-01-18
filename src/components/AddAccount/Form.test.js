import React from 'react'
import { shallow } from 'enzyme'
import Form from './Form'

describe('Form', () => {
	describe('renders correctly', () => {
		it('renders components correctly', () => {
			expect(Form).toMatchSnapshot()
		})
	})
})
