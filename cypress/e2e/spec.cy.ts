describe('template spec', () => {
  it('passes', () => {
    cy.visit('/')

    cy.get('[aria-label="Angular on twitter"]').click();         
  })
})