describe('Test OIH profile page', () => {
  beforeEach(() => {
    // cy.visit('https://web-ui.openintegrationhub.com/')
    cy.visit('localhost:3000')
  })
  it('navigate to profile', () => {
  //  cy.get('#username').click().type('admin@openintegrationhub.com');
  //  cy.get('#password').click().type('123qweasd')
    cy.get('#username').click().type('admin@example.com')
    cy.get('#password').click().type('123qweASD!')
    cy.get('.MuiButton-label').click()
    cy.wait(2000)
    cy.get('#menuIconBtn').click()
    cy.get('#menuProfile').click()
    cy.wait(1000)
    cy.get('#menuLogout').click()
  })


})