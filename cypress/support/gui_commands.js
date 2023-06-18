// prettier-ignore
Cypress.Commands.add('login', (
    user = Cypress.env('user_name'),
    password = Cypress.env('user_password')
  ) => {
    const login = () => {
      cy.visit('/users/sign_in')

      cy.get("[data-qa-selector='login-field']").type(user)
      cy.get("[data-qa-selector='password-field']").type(password, {log: false})    //log impede que seja logado no modo de comando do cypress
      cy.get("[data-qa-selector='sign_in_button']").click()
    }
    login()
  }
)
