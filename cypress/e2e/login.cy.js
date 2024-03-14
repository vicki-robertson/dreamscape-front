describe('StartSession Page', () => {
  it('should render the login form', () => {
    cy.viewport(550, 750) 
    cy.visit('localhost:3000/login');
    cy.get('#login-form').should('exist');
  });

  it('should fill in the form correctly by a registered user', () => {
    cy.viewport(550, 750) 
    cy.visit('localhost:3000/login');

    cy.get('input[name="email"]').type('pepito@mail.com');
    cy.wait(2000);
    cy.get('input[name="password"]').type('123456');

    cy.get('form').submit();

    cy.contains('Has iniciado sesión correctamente').should('be.visible');
  });
});
