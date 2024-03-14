describe('RegisterForm Page', () => {
  it('should render the register form', () => {
    cy.viewport(550, 750); 
    cy.visit('http://localhost:3000/register');
    cy.get('#register-form').should('exist');
  });

  it('should fill in the form correctly for registration and show the modal', () => {
    cy.viewport(550, 750); 
    cy.visit('http://localhost:3000/register');

    cy.get('input[name="name"]').type('Daisy');
    cy.get('input[name="email"]').type('daisy@mail.com');
    cy.get('input[name="password"]').type('password123');

    cy.get('form').submit();

    cy.get('.modal--show').should('exist');
  });
});
