
describe('Home end-to-end', () => {
	it('should have a header', () => {
	  cy.visit('http://localhost:8000');
	  cy.get('h1')
		.should('have.text', 'Budgets');
	});
  });
