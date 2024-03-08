describe('Home', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000'); // Update URL as needed
  });

  it('renders without crashing', () => {
    cy.get('header').should('exist');
    cy.get('article').should('exist');
  });

  it('displays photo cards', () => {
    cy.get('.grid').find('.photo-card').should('have.length.greaterThan', 0);
  });

  it('changes page when pagination button is clicked', () => {
    cy.get('.pagination-button').first().click();
    cy.get('.pagination-button').first().should('have.class', 'active');
  });

  it('searches for destinations', () => {
    cy.get('.search-input').type('destination');
    cy.get('.search-button').click();
    cy.get('.grid').find('.photo-card').should('have.length.greaterThan', 0);
  });

  it('displays error message for empty search', () => {
    cy.get('.search-input').type('{enter}');
    cy.get('.text-blue').should('exist');
  });
});
