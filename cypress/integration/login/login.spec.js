context('Login', () => {
  it('successfully performs login action', () => {
    cy.visit('/login');
    cy.contains('Login');
    cy.get('.LoginForm').within(() => {
      cy.get('.login-email').type('john@example.com');
      cy.get('.login-password').type('hi');
      cy.get('.login-submit').click();
    });
    cy.url().should('includes', '/profile');
  });

  // it('shows error message with incorrect email', () => {
  //   cy.visit('/login');
  //   cy.contains('Login');
  //   cy.get('.LoginForm').within(() => {
  //     cy.get('.login-email').type('wrong@example.com');
  //     cy.get('.login-password').type('hi');
  //     cy.get('.login-submit').click();
  //   })

  // })
});
