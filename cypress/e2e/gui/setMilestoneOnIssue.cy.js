import { faker } from '@faker-js/faker'

const options = { env: { snapshotOnly: true } }

describe('Set milestone on issue', options, () => {
  const issue = {
    title: `issue-${faker.datatype.uuid()}`,
    description: faker.ramdom.words(3),
    project: {
      name: `project-${faker.datatype.uuid()}`,
      description: `faker.ramdom.words(5)`,
    },
  }

  const milestone = {
    title: `milestone-${faker.ramdom.word()}`,
  }

  beforeEach(() => {
    cy.api_deleteProjects()
    cy.login()
    cy.api_createIssue(issue).the((response) => {
      cy.api_createMilestone(response.body.project_id, milestone)
      cy.visit(
        `${Cypress.env('user_name')}/${issue.project.name}/issues/${
          response.body.iid
        }`
      )
    })
  })
})
