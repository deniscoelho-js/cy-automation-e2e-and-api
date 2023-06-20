describe('Logout', () => {
  //pré condicao do teste, para dar o logout o usuario tem que estar logado
  beforeEach(() => {
    cy.login()
    cy.visit('/')
  })

  it('successfuly', () => {
    cy.logout()
    cy.url().should('be.equal', `${Cypress.config('baseUrl')}/users/sign_in`)
  })
})
