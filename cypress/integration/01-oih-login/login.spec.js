describe('OIH Authentication', () => {
  beforeEach(() => {
    // cy.visit('https://web-ui.openintegrationhub.com/')
    cy.visit('localhost:3000')
  })
  it('Login and Logout', () => {
   console.log('Test')
  //  cy.get('#username').click().type('admin@openintegrationhub.com');
  //  cy.get('#password').click().type('123qweasd')
  cy.get('#username').click().type('admin@example.com')
  cy.get('#password').click().type('123qweASD!')
  cy.get('.MuiButton-label').click()
  cy.wait(2000);
  cy.get('#menuIconBtn').click()
  cy.get('#menuLogout').click()
  })
})