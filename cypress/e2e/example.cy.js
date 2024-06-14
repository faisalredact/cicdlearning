describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://faisalredact.github.io/').wait(2000)
    cy.get('.use-middle > ul > :nth-child(1) > a').click().wait(3000)
    cy.get('#intro > .close').click()
  })
})