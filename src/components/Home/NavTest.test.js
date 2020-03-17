import React from 'react'
import { wrapper } from 'enzyme'
import NavTest from './NavTest'

describe('Navigation', () => {
	let link;
	it("displays a link tag with the Login text", () => {
		link = wrapper.find("Link").find({ to: "/" });

		expect(link.html()).toBe('<a class="/">Home</a>');
	  });
});
