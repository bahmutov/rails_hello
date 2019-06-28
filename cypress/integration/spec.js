// enables intelligent code completion for Cypress commands
// https://on.cypress.io/intelligent-code-completion
/// <reference types="Cypress" />

describe('Rails Hello', () => {
  beforeEach(() => {
    // usually we recommend setting baseUrl in cypress.json
    // https://on.cypress.io/visit
    cy.visit('/')
  })

  it('has greeting', function () {
    cy.contains('You’re on Rails!').should('be.visible')
  })

  // more examples
  //
  // https://github.com/cypress-io/cypress-example-todomvc
  // https://github.com/cypress-io/cypress-example-kitchensink
  // https://on.cypress.io/writing-your-first-test
})
