describe('Create blog feature', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.login()
  })
  
  it('Should create new blog', () => {
    cy.get(':nth-child(1) > .inline-flex').click()
  })
})