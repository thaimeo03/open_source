// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
Cypress.Commands.add('login', () => {
  // Check if user is redirected to login page
  cy.url().should('include', '/login')

  // Login
  cy.fixture('login').then((data) => {
    // Login with valid credentials
    const validUser = data.validUser
    
    cy.get('input[name="email"]').type(validUser.email)
    cy.get('input[name="password"]').type(validUser.password)
    cy.get('button[type="submit"]').click()

    cy.url().should('not.include', '/login')
    cy.url().should('include', '/')
  })
})
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })