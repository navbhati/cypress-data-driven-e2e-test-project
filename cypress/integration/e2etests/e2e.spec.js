describe('Data Driven End to End Test', () => {
  context('Seed Todos', () => {
    it.only('seed todos test data', () => {
      cy.seedAndVisit()

      cy.get('.todo-count')
        .should('contain', '3 todos left')
    })
  })
})