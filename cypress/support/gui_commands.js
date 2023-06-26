Cypress.Commands.add(
  'login',
  (
    user = Cypress.env('user_name'),
    password = Cypress.env('user_password'),
    { cacheSection = true } = {}
  ) => {
    const login = () => {
      cy.visit('/users/sign_in')

      cy.get("[data-qa-selector='login-field']").type(user)
      cy.get("[data-qa-selector='password-field']").type(password, {
        log: false,
      }) //log impede que seja logado no modo de comando do cypress
      cy.get("[data-qa-selector='sign_in_button']").click()
    }

    const validate = () => {
      cy.visit('/')
      cy.location('pathname', { timeout: 1000 }).should(
        'not.eq',
        '/users/sign_in'
      )
    }

    const options = {
      cacheAcrosssSpecs: true,
      validate,
    }

    //se o login já foi feito, entao salva em cache os dados
    if (cacheSection) {
      cy.session(user, login, options)
      //se nao, realiza o login
    } else {
      login()
    }
  }
)

Cypress.Commands.add('logout', () => {
  cy.get('.qa-user-avatar').click()
  cy.contains('Sign out').click()
})

Cypress.Commands.add('gui_createProject', (project) => {
  cy.visit('/projects/new')

  cy.get('#project_name').type(project.name)
  cy.get('#project_description').type(project.description)
  cy.get('.qa-initianlize-with-readme-checkbox').check()
  cy.contains('Create project').check()
})

Cypress.Commands.add('gui_createIssue', (issue) => {
  cy.visit(`/${Cypress.env('user_name')}/${issue.project.name}/issues/new`)

  cy.get('.qa-issueable-form-title').type(issue.title)
  cy.get('.qa-issueable-form-description').type(issue.description)
  cy.contains('Submit issue').click()
})
