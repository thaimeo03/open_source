describe('Testing Delayed Element with Cypress', () => {
  it('Should wait email, password input visible and click submit', () => {
    // Access to the website
    cy.visit('http://127.0.0.1:5500/index.html');

    // Cypress automatically waits until the element is visible
    cy.get('#email').type('cypress@gmail.com');
    cy.get('#password').type('cypress');

    cy.get('#element_1').should('be.visible');
    cy.get('#element_2').should('be.visible');
    cy.get('#element_3').should('be.visible');
    cy.get('#element_4').should('be.visible');
    cy.get('#element_5').should('be.visible');
    cy.get('#element_6').should('be.visible');

    // Check next page
    cy.get('#btn').click();
    cy.url().should('include', '/page_1.html');
  });
});
