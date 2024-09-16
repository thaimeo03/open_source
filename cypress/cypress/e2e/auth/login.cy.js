describe('Login feature', () => {
  // Before each test, visit the home page
  beforeEach(() => {
    cy.visit('/')
  })

  it('Should redirect to login page if not logged in', () => {
    // Check if user is redirected to login page
    cy.url().should('include', '/login')
  })

  it('Should show error message if login fails with invalid email format', () => {
    cy.fixture('login').then((data) => {
      // Login with invalid Email format
      const invalidEmailFormat = data.invalidEmailFormat
      cy.get('input[name="email"]').type(invalidEmailFormat.email)
      cy.get('input[name="password"]').type(invalidEmailFormat.password)
      cy.get('button[type="submit"]').click()
      
      // Check page still on login page
      cy.url().should('include', '/login')
    })
  })

  it('Should show error message if login fails with invalid password format', () => {
    cy.fixture('login').then((data) => {
      // Login with invalid Password format
      const invalidPasswordFormat = data.invalidPasswordFormat
      cy.get('input[name="email"]').type(invalidPasswordFormat.email)
      cy.get('input[name="password"]').type(invalidPasswordFormat.password)
      cy.get('button[type="submit"]').click()

      // Check page still on login page
      cy.url().should('include', '/login')
    })
  })

  it('Should show error message if login fails with invalid credentials', () => {
    cy.fixture('login').then((data) => {
      // Login with invalid credentials
      const invalidUser = data.invalidUser
      cy.get('input[name="email"]').type(invalidUser.email)
      cy.get('input[name="password"]').type(invalidUser.password)
      cy.get('button[type="submit"]').click()

      // Check page still on login page
      cy.url().should('include', '/login')
      cy.get('.group').should('be.visible')
    })
  })

  it('Should redirect to home page if login is successful', () => {
    cy.fixture('login').then((data) => {
      // Login with valid credentials
    const validUser = data.validUser
    cy.get('input[name="email"]').type(validUser.email)
    cy.get('input[name="password"]').type(validUser.password)
    cy.get('button[type="submit"]').click()

    
    // Check if user is redirected to home page
    cy.url().should('not.include', '/login')
    cy.url().should('include', '/')
    })
  })
})